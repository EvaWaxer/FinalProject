const db = require("../model");
const { user } = require("../model");
const User = db.users;
const Op = db.Sequelize.Op;

const express = require("express");
const {validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");

exports.create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const {email, password } = req.body;

    //check if user already exist 
    try {
        let dbuser = await User.findOne({where:{
            email
          }});
          if (dbuser) {
            return res.status(400).json({
              msg: "User Already Exists"
            });
          }
        
    // Create a User
    const user = {
    email: req.body.email,
    password: req.body.password,
    };
      
    const salt =  await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    
    // Save User in the database
    await User.create(user)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating user.",
        });
      });

      const payload = {
        user: {
          email: user.email
        }
      };
  
      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 10000
        },
        (err, token) => {
          if (err) throw err;
          console.log(token)
          res.status(200).json({
            token
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  };

  // Find a single user with an id
exports.findOne = async (req, res) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
  
    const { email, password } = req.body;
    try {
        let user = await User.findOne({where:{
            email
          }});
      if (!user)
        return res.status(400).json({
          message: "User Not Exist"
        });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !"
          });
          const payload = {
            user: {
              id: user.id
            }
          };
    
          jwt.sign(
            payload,
            "randomString",
            {
              expiresIn: 3600
            },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                token
              });
            }
          );
        } catch (e) {
          console.error(e);
          res.status(500).json({
            message: e.message + "Server Error"
          });
        }
      };

      exports.fetch = async (req, res) => {
        try {
            // request.user is getting fetched from Middleware after token authentication
            const user = await User.findById(req.user.id);
            res.json(user);
            console.log(user);
          } catch (e) {
            res.send({ message: "Error in Fetching user" });
          }
      };
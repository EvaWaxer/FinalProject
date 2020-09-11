const db = require("../model");
const config = require("../config/auth.config");
const User = db.users;
const Role = db.role;

const Op = db.Sequelize.Op;

const express = require("express");
const {validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");

exports.create =  (req, res) => {
    // Create a User
    const user = {
    email: req.body.email,
    password: req.body.password,
    };
      
    const salt =   bcrypt.genSalt(10);
    user.password =  bcrypt.hash(password, salt);
    
    // Save User in the database
     User.create(user)
      .then((user) => {
        if (req.body.roles) {
          Role.findAll({
            where:{
              name: {
                [Op.or] : req.body.roles
              }
            }
          }).then(roles => {
            user.setRoles(rols).then(() =>{
              res.send({message: "User was registerd successfully!"});
            });
          });       
        } else {
          user.setRoles([1]).then(() => {
            res.send({message: "User was registerd successfully!"});
          })
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating user.",
        });
      });
    };

  // Find a single user with an id
exports.findOne =  (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
      };
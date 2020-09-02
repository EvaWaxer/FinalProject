const db = require("../model");
const { schools } = require("../model");
const School = db.schools;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
  
    // Create a school
    const school = {
      name: req.body.name,
      address: req.body.address,
      openSeats: req.body.openSeats
    };

    // Save Student in the database
    School.create(school)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating school.",
        });
      });
  };

  exports.findAll = (req, res) => {
  
    School.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Schools.",
        });
      });
  };
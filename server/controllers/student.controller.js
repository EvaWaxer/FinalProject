const db = require("../model");
const { students } = require("../model");
const Student = db.students;
const Op = db.Sequelize.Op;

// Create and Save a new Student
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
  
    // Create a Student
    const student = {
      id: req.body.id,
      name: req.body.name,
      address: req.body.address,     
    };
   //console.log(student);

    // Save Student in the database
    Student.create(student)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial.",
        });
      });
  };
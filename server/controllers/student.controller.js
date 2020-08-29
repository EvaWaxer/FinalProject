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

  // Find a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Student with id=" + id,
      });
    });
};
  // Update a student
exports.update = (req, res) => {
    const id = req.params.id;
  
    Student.update(req.body, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Student was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Student with id=" + id,
        });
      });
  };
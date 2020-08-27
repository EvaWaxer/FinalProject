module.exports = (app) => {
    const students = require("../controllers/student.controller");

    var router = require("express").Router();

    router.post("/", students.create);

    app.use("/students", router);
};
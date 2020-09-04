module.exports = (app) => {
    const students = require("../controllers/student.controller");

    var router = require("express").Router();

    router.post("/", students.create);
    router.get("/", students.findAll);
    router.put("/:id", students.update);
    router.get("/:id", students.findOne);

    app.use("/students", router);
}; 
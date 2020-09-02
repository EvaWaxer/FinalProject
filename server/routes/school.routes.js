module.exports = (app) => {
    const schools = require("../controllers/school.controller");

    var router = require("express").Router();

    app.use("/schools", router);
};
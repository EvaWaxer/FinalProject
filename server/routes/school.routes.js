module.exports = (app) => {
    const schools = require("../controllers/school.controller");

    var router = require("express").Router();
    
    router.post("/", schools.create);
    router.get("/", schools.findAll);
    
    app.use("/schools", router);
};
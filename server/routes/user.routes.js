const { check } = require("express-validator/check");
const auth = require("../middleware/auth");

module.exports = (app) => {
    const users = require("../controllers/user.controller");

    var router = require("express").Router();

    router.post("/register",
    [check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6
    })],
     users.create);
    router.post("/login", 
    [    
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6
    })]
    ,users.findOne);

    router.get("/me", auth, users.fetch);

    app.use("/users", router);
};

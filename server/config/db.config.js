module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "hava1990",
    DB: "Final_Project",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
/*const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password:"hava1990",
    database:"Final_project",
    port:5432,
    host:"localhost"
})

module.exports = pool*/
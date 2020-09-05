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

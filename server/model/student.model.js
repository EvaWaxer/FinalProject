const {  DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey : true,
        allowNull : false
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      address: {
        type: Sequelize.STRING,
        allowNull : false
      },
      /*
      latitude:{
        type: DataTypes.DOUBLE,
        allowNull : false
      },
      longitude:{
        type: DataTypes.DOUBLE,
        allowNull : false
      },*/
      schoolName : {
          type: Sequelize.STRING,
      }
    }, {tableName:'studentsPersonalInfo', timestamps: false});
  
    return Student;
  };
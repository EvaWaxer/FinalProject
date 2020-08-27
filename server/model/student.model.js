
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
      schoolName : {
          type: Sequelize.STRING,
      }
    }, {tableName:'studentsPersonalInfo', timestamps: false});
  
    return Student;
  };
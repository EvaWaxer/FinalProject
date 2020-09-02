module.exports = (sequelize, Sequelize) => {
    const School = sequelize.define("school", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey : true      
      },
      name : {
        type: Sequelize.STRING,
        allowNull: false
    },
      address: {
        type: Sequelize.STRING,
        allowNull : false
      },
      openSeats: {
        type: Sequelize.INTEGER,
        allowNull : false
      },

    }, {tableName:'schoolGeneralInfo', timestamps: false});
  
    return School;
  };
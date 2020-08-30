
module.exports = (sequelize, Sequelize) => {
const User = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        primaryKey : true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isAdmin: {
        type:Sequelize.BOOLEAN,
        allowNull : false
    },
}, {timestamps:false})

return User;
};
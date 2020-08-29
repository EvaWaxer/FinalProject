
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
        /*get() {
            return () => this.getDataValue('password')
        }
    },
    salt: {
        type: Sequelize.STRING,
        get() {
            return() => this.getDataValue('salt')
        }*/
    }
}, {timestamps:false})

return User;
};
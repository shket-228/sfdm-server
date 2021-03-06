const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'User'},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
    activationLink: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING}
})

const Token = sequelize.define('token', {
    refreshToken: {type: DataTypes.STRING, allowNull: false}
})

const Rate = sequelize.define('rate', {
    value: {type: DataTypes.FLOAT, allowNull: false, min: 0, max: 5}
})

User.hasOne(Token)
Token.belongsTo(User)

User.belongsToMany(User, {through: 'rate', as: 'source', foreignKey: 'destinationId'})

module.exports = {User, Token, Rate}
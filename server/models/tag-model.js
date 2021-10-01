const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Tag = sequelize.define('tag', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, required: true}
})

module.exports = Tag
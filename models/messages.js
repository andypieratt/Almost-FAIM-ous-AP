const { Sequelize, Model, DataTypes } = require('sequelize') 
const sequelize = require('../config/connection')

class Messages extends Model {}

Messages.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
          }
    },
    {
        sequelize
    }
)

module.exports = Messages
const { Sequelize, Model, DataTypes } = require('sequelize') 
const sequelize = require('../config/connection')

class Convos extends Model {}

Convos.init(
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

module.exports = Convos
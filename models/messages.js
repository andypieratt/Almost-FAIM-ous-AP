const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Messages extends Model {}

Messages.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    convos_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "convos",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "messages",
  }
);

module.exports = Messages;

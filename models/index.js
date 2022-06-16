const User = require("./user");
const Messages = require("./Messages");
const Convos = require("./Convos");

Convos.hasMany(Messages, { foreignKey: "convos_id" });
Messages.belongsTo(Convos, { foreignKey: "convos_id" });

User.belongsToMany(Convos, { through: "User_Convos" });
Convos.belongsToMany(User, { through: "User_Convos" });

module.exports = {
  User,
  Convos,
  Messages,
};

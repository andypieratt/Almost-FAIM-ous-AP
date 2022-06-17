const User = require("./user");
const Messages = require("./messages");
const Convos = require("./convos");

Convos.hasMany(Messages);
Messages.belongsTo(Convos);
Messages.belongsToMany(User, {through: Convos})
User.hasMany(Convos)
// User.hasMany(Messages, {through: Convos})
// Convos.hasMany(Messages, { foreignKey: "convos_id" });
// Messages.belongsTo(Convos, { foreignKey: "convos_id" });

// User.hasMany(User, { through: "Convos" });
// User.belongsToMany(User, {
//   through: "Convos",
//   as: "user1",
//   foreignKey: "user1_id",
// });
// User.belongsToMany(User, {
//   through: "Convos",
//   as: "user2",
//   foreignKey: "user2_id",
// });

// User.belongsToMany(Convos, { through: "User_Convos" });
// Convos.belongsToMany(User, { through: "User_Convos" });

module.exports = {
  User,
  Convos,
  Messages,
};

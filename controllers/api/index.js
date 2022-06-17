const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const messageRoutes = require("./message-routes.js");
const convoRoutes = require("./convo-routes");

//MIDDLEWARE
router.use("/user", userRoutes);
router.use("/messages", messageRoutes);
router.use("/convos", convoRoutes);


//EXPORT
module.exports = router;

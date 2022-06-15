const router = require("express").Router();

const userRoutes = require("./user-routes.js");
//ADD POST ROUTES OR WHATEVER WE CALL IT!!!

router.use("/user", userRoutes);

//EXPORT
module.exports = router;

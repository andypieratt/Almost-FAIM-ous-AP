const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
  const user = await User.findAll();
  res.status(200).json(user);
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      // email: req.body.email,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;
      req.session.password = newUser.password;
      // req.session.email = newUser.email;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login-data", async (req, res) => {
  const user = await User.findAll({
    where: {
      loggedIn: true,
    },
  });
  res.status(200).json(user);
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "No user account found!" });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(200).end();
  }
});

//delete user route

module.exports = router;

const router = require("express").Router();
const { Messages, Convos, User } = require("../../models");

//localhost:3001/api/messages

//Get all messages
router.get("/", async (req, res) => {
  try {
    const msgData = await Messages.findAll({
      include: User,
    });

    res.status(200).json(msgData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create Message
router.post("/", async (req, res) => {
  try {
    const newMsg = await Messages.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.status(200).json(newMsg);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/delete", async (req, res) => {
  try {
    const msgData = await Messages.destroy({
      where: {},
    });
    res.status(200).json(msgData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Exports
module.exports = router;

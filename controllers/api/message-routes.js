const router = require("express").Router();
const { Messages, Convos, User } = require("../../models");

//localhost:3001/api/messages

//Get all messages
router.get("/", async (req, res) => {
  try {
    const msgData = await Messages.findAll({
      include: User
    });
    // const msgData = await Messages.findAll({
    //   include: [{ model: User }, { model: Convos }],
    // });
    res.status(200).json(msgData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//Get message by ID????

//Create Message
router.post("/", async (req, res) => {
  try {
    console.log('post message', req.body)
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
      where: {}
    });
    // const msgData = await Messages.findAll({
    //   include: [{ model: User }, { model: Convos }],
    // });
    res.status(200).json(msgData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//Exports
module.exports = router;

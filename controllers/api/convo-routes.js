const router = require("express").Router();
const { Convos, User, Messages } = require("../../models");

//localhost:3001/api/convos

//GET All Convos based on User
router.get("/", async (req, res) => {
  try {
    const convoData = await Convos.findAll({ include: [{ model: User }] });
    res.status(200).json(convoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Convos by ID
router.get("/:id", async (req, res) => {
  try {
    const convoData = await Convos.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    res.status(200).json(convoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE New Convo
router.post("/", async (req, res) => {
  try {
    const newConvo = await Convos.create({
      ...body,
      userId: req.session.userId,
    });
    res.status(200).json(newConvo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE Convo
router.delete("/:id", async (req, res) => {
  try {
    const [affectedRows] = Convos.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Exports
module.exports = router;

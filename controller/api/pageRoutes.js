const router = require("express").Router();
const { Page } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPage = await Page.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPage);
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  try {
    const pageData = await Page.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!pageData) {
      res.status(404).json({ message: "No page found with this id!" });
      return;
    }

    res.status(200).json(pageData);
  } catch (error) {
    res.status(404).json(err);
  }
});

module.exports = router;

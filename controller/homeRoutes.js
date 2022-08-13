const router = require("express").Router();
const { User, Page } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const pageData = await Page.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const pages = pageData.map((page) => page.get({ plain: true }));

    res.render("login", {
      pages,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;

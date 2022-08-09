const router = require("express").Router();
const userRoutes = require("./userRoutes");
const pageRoutes = require("./pageRoutes");

router.use("/Page", pageRoutes);
router.use("/Users", userRoutes);

module.exports = router;

const express = require("express");
const router = express.Router();
const contactRoutes = require("./contactRoutes");
const authRoutes = require("./authRoutes");

router.use("/contact", contactRoutes);
router.use("/auth", authRoutes);

module.exports = router;

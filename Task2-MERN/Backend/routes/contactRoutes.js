const express = require("express");
const router = express.Router();
const {
  handleContactFormSubmission,
} = require("../controllers/contactController");

router.post("/", handleContactFormSubmission);

module.exports = router;

const express = require("express");
const router = express.Router();
const landingController = require("../controllers/landingController");

router.get("/", landingController.homepage);

module.exports = router;

// src/routes/index.js
const express = require("express");

const cron = require("./cron");

const router = express.Router();

router.use("/cron", cron);

module.exports = router;

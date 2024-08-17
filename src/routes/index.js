// src/routes/index.js
const express = require("express");

const cron = require("./cron");
const pruebas = require("./pruebas");

const router = express.Router();

router.use("/cron", cron);
router.use("/pruebas", pruebas);

module.exports = router;

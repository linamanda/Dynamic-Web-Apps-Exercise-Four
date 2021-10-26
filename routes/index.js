const express = require("express");
const { builtinModules } = require("module");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World in Routes");
});

module.exports = router;

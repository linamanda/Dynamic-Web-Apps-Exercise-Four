const express = require("express");

const router = express.Router();

// TODO: hook up to firebase for a single post based on ID

router.get("/", (req, res) => {
  res.send(`
    <h1>Individual Post</h1>
    <p>A single post will go here...</p>
    `);
});

module.exports = router;

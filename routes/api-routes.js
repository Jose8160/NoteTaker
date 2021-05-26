const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");

router.get("/notes", (req, res) => {
  fs.readFileSync("../db/db.json", "utf8").then((notes) => res.json(notes));
});

module.exports = router;

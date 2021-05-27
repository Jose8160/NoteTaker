const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");
const path = require("path");
// router.get("/notes", (req, res) => {
//   fs.readFileSync("../db/db.json", "utf8").then((notes) => res.json(notes));
// });

router.get("/notes", (req, res) => {
  let data = fs.readFileSync(path.resolve(__dirname, "../db/db.json"), "utf8");
  console.log(data);
  res.json(data);
  // res.send('hello');
});

module.exports = router;

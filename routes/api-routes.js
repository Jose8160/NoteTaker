const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");
const path = require("path");
// router.get("/notes", (req, res) => {
//   fs.readFileSync("../db/db.json", "utf8").then((notes) => res.json(notes));
// });

// router.get("/notes", (req, res) => {
//   let data = fs.readFileSync(path.resolve(__dirname, "../db/db.json"), "utf8");
//   console.log(data);
//   res.json(data);
//   // res.send('hello');
// });

// router.get('/notes', (req, res) => {
//     console.log('req.body in get notes', req.body);
//     try {
//       let data = fs.readFileSync(
//         path.resolve(__dirname, '../db/db.json'),
//         'utf8'
//       );
//       console.log('data', data);
//       return res.json(data);
//     } catch (err) {
//       console.log('err', err);
//     }
//   });

router.get("/notes", (req, res) => {
  console.log("req.body in get notes", req.body);
  try {
    let data = fs.readFileSync(
      path.resolve(__dirname, "../db/db.json"),
      "utf8"
    );
    console.log("data", data);
    console.log("typeof data", typeof data);
    let parsedNotes = JSON.parse(data);
    return res.json(parsedNotes);
  } catch (err) {
    console.log("err", err);
  }
});

// router.post("/notes", (req, res) => {
//   let data = fs.writeFileSync(path.resolve(__dirname, "../db/db.json"), "utf8");
//   console.log(data);
//   res.json(data);
// });

router.post("/saveNote", (req, res) => {
    console.log("req.body in get notes", req.body);
    try {
      let data = fs.writeFileSync(
        path.resolve(__dirname, "../db/db.json"),
        "utf8"
      );
      console.log("data", data);
      console.log("typeof data", typeof data);
      let parsedNotes = JSON.parse(data);
      return res.json(parsedNotes);
    } catch (err) {
      console.log("err", err);
    }
  });

module.exports = router;

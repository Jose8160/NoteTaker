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
//   fs.writeFileSync(
//     path.join(__dirname, "db/db.json"),
//     JSON.stringify(arrayOfNotes),
//     (err) => {
//       if (err) {
//         return err;
//       }
//       console.log(arrayOfNotes);
//     }
//   );
//   res.send("success");
// });

// router.post("/notes", (req, res) => {
//   console.log("i hit the route!");
//   fs.writeFileSync(
//     path.join(__dirname, "db/db.json"),
//     JSON.stringify(arrayOfNotes),
//     (err) => {
//       if (err) {
//         return err;
//       }
//       console.log(arrayOfNotes);
//     }
//   );
//   res.send("success");
// });

router.post("/notes", (req, res) => {
    console.log("i hit the route!");
   console.log(req.body);
   console.log(arrayOfNotes)//so you can make sure you are getting the right object
    fs.writeFileSync(
      path.join(__dirname, "db/db.json"),
      JSON.stringify(arrayOfNotes),
      (err) => {
        if (err) {
          throw err.message;
        }
       
      });
    res.send("success");
   });

module.exports = router;

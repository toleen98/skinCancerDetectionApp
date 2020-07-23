const express = require("express");
app = express();
const router = express.Router();
const models = require("../database/models");

router.post("/patientReport", function (req, res) {
  models.Patient.findById(JSON.parse(req.body.params.data.id), function (err,report) {
    res.send(report)
    // console.log(report);
    // .then((report) => res.send(report), console.log(res.body))
    // .catch((err) => res.status(400).json("Error: " + err));
  });
});

// router.get("/patientReport", function (req, res) {
//   console.log("got your data");
//   models.Patient.find({ _id: idToSort })
//     .then((reports) => res.send(reports), console.log(res.body))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = router;

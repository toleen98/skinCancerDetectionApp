const express = require("express");
app = express();
const router = express.Router();
const models = require("../database/models");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

var idToSort;
router.post("/patientReport", function (req, res) {
  console.log("Hi from server");
  console.log(req.body);
  idToSort = req.body.params.data.id;
  console.log(idToSort);
  res.send(idToSort);
});

router.get("/patientReport", function (req, res) {
  console.log("got your data");
  models.Patient.find({ _id: idToSort })
    .then((reports) => res.send(reports), console.log(res.body))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

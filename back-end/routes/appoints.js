const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require('mongoose')
const models = require("../database/models");
router.post("/patient/appoints", function (req, res) {
  models.Appointment.find({patientId: (req.body.params.value.id)}, function (err, appoints) {
    console.log(req.body);
    console.log(appoints);
    res.send(appoints);
  })
  .then(async (res) => {
    console.log("hi second time")
    models.Doctor.find({_id: (req.body.params.value.id)}, function (err, docs) {
        console.log(req.body);
        console.log(appoints);
        res.send(docs);
      })
})
});
module.exports = router;
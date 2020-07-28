const router = require("express").Router();
const e = require("cors");
const mongoose = require("mongoose");
const models = require("../database/models");
router.get("/patient/appoints", function (req, res) {
  models.Appointment.find({ patientId: req.body.params.value.id }, function (
    err,
    appoints
  ) {
    // console.log(req.body);
    // console.log(appoints);
    // res.json(appoints);
    // var x= appoints
    // x.map( (element,i) => {
    //     models.Doctor.findOne({_id:element.doctorId[0]}, (err,user) => {
    //         element.doctorname = user.firstName
            
    //     })
    // })
    // console.log(x)
   res.json(appoints);
  })
});
module.exports = router;
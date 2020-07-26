const router = require("express").Router();
const models = require("../database/models");

router.post("/bookappointment", (req, res) => {
  const newApointment = models.Appointment({
    status: "pending",
    date: req.body.date,
    time: req.body.time,
    discription: req.body.discription,
    doctorId: "5f1acb00dc35660d70861fda",
    patientId: "5f16ac53082a493570770a1d",
  });
  newApointment
    .save()
    .then(() => {
      return res.status(201).send("Appointment booked successfully!");
    })
    .catch((err) => res.send(err));
});

module.exports = router;
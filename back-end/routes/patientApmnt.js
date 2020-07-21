const router = require("express").Router();
let db = require("../database/models");

router.route("/patient/appointments").get((req, res) => {
  db.Appointment.find({ _id: req.body.userId })
    .then((appointment) => res.json(appointment))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

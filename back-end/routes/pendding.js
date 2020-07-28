const router = require("express").Router();
const models = require("../database/models");
router.post("/pendingap", function (req, res) {
  models.Appointment.find({ doctorId: req.body.params.value.id }, function (
    err,
    appoints
  ) {
    console.log(req.body);
    console.log(appoints);
    console.log("hi from back", req.body.params.value.id);
    res.json(appoints);
  });
});
module.exports = router;

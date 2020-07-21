const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const models = require("../database/models");

router.post("/login", function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    models.Patient.findOne({ email: email }).then((patient) => {
      if (!patient) {
        return res.send("Email not found");
      }
      bcrypt.compare(password, patient.password, function (err, result) {
        if (err) {
          return res.send(err);
        }else if (result === true) {
          return res.send(result);
        }else if (result === false) {
          return res.send(result);
        }
      });
    });
  });
  module.exports = router;
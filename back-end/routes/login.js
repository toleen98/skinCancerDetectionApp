const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const models = require("../database/models");
const jwt = require('jsonwebtoken')

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
      } else if (result === true) {
        var pat = {
          patient: patient,
          result: result,
        };
        return res.send(pat);
      } else if (result === false) {
        return res.send(result);
      }
      bcrypt.compare(password, patient.password, function (err, result) {
        if (err) {
          return res.send(err);
        }else if (result === true) {
          const token = jwt.sign({auth_token: patient._id}, process.env.SECRET)
          var pat = {
            patient: patient,
            result: result,
          };
          return res.header(token).json(pat);
        }else if (result === false) {
          return res.send(result);
        }
      });
    });
  });
});
  module.exports = router;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const models = require("../database/models");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();

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
        const token = jwt.sign({auth_token: patient._id}, process.env.SECRET)
        var pat = {
          patient: patient,
          result: result,
          token:token
        };
        console.log('token:',token)

        console.log(pat)
        return res.send(pat);
      } 
    });
  });
});
  module.exports = router;
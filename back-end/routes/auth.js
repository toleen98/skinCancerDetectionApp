const express = require('express');
const router = express.Router();
const User = require('../database/models');
const bcrypt = require('bcrypt');
const { regesterVaidationP } = ('../../validation');
const jwt = require("jsonwebtoken")

//patient regestration
router.post('/patient/signup', (req, res) =>{
    //validation errors
    const {error} = regesterVaidationP(req.body)

    if(error) return res.status(400).send(error.details[0].message);

    User.Patient.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(422).send( "Email already exists" );
        }
    });

       // Hash password before saving in database
       bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          //add new user to the db
          const newUser = new User.Patient({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            phoneNumber: req.body.phoneNumber,
            bloodType: req.body.bloodType,
            height: req.body.hight,
            weight: req.body.weight  
          });

          newUser
            .save()
            .then(() =>{ return res.status(201).send({user: user._id});})
            .catch(err => res.send(err));

        });
      });
})


//doctors regestration
router.post('/doctors/signup', (req, res) =>{
    //validation errors
    const {error} = regesterVaidationP(req.body)

    if(error) return res.status(400).send(error.details[0].message);

    User.Doctor.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(422).send( "Email already exists" );
        }
    });

       // Hash password before saving in database
       bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          //add new user to the db
          const newUser = new User.Doctor({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            phoneNumber: req.body.phoneNumber,
            clinicLocation: req.body.clinicLocation,
            workingFrom: req.body.workingFrom,
            workingTo: req.body.workingTo,
          });

          newUser
            .save()
            .then(() =>{ return res.status(201).send({user: user._id});})
            .catch(err => res.send(err));

        });
      });
})


module.exports = router;
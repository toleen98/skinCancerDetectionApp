const express = require('express');
const router = express.Router();
const User = require('../database/models');
const bcrypt = require('bcrypt');


router.get("/doctors",(req,res) => {
    User.Doctor.find({}).then(users =>{
        res.json(users);
    })
})

//creat new doctor 
router.post('/doctor/signup', (req, res) =>{

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
            notes: req.body.notes
          });

          newUser
            .save()
            .then(() =>{ return res.status(201).send("user created sucessfully");})
            .catch(err => res.send(err));

        });
      });
})

module.exports = router;
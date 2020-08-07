const router = require("express").Router();
const db = require("../database/models");
router.post("/patient/updatepatient", ((req, res) =>{
  console.log(req.body)
  console.log("hi")
//   var profileImage = req.body.profileImage;
  var phoneNumber = req.body.phoneNumber;
  var height = req.body.height;
  var weight = req.body.weight;
  var blood = req.body.blood;
  db.Patient.updateOne(
    {_id: JSON.parse(req.body.id)},
    {$set: {
    phoneNumber: phoneNumber ,
     height: height ,
    weight: weight ,
    blood: blood ,
    }
    },{multi: true }
  )
    .then(() => res.json("updated"))
    .catch((err) => res.status(400).json("Error: " + err));
}));

router.post('/user/paitent',(req,res) => {
  console.log(req.body)
  db.Patient.findOne({_id: req.body.id}).then(user=>{
    console.log(user)
    res.json(user);
})
})
module.exports = router;
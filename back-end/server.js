const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongo = require("./database/index");
const db = require("./database/models");
const auth = require("./routes/auth");
const patientupdate = require("./routes/patientUpdate");
const login = require("./routes/login");

const doctors = require("./routes/doctor");
const appoints = require("./routes/appoints");
const docprf = require("./routes/doctorProfile");

const book = require("./routes/book");
const appoint = require("./routes/patientApmnt");
const reportPatient = require("./routes/patientReport");
const scheduleDoctor = require("./routes/doctorSchedule");

const pendding = require("./routes/pendding");
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("I am here");
  res.send("Welcome!");
});



app.use("/api/user/", doctors);


app.use("/api/user", auth);
app.use("", appoints);
app.use("/api/profile", patientupdate)
app.use("",login);
app.use("",book);
app.use("", appoint);

app.use("",reportPatient);
app.use("", scheduleDoctor);
app.use("", pendding);
app.use("", docprf);
// app.use("/api/profile", patientupdate)


app.listen(port, () => console.log(`Server started on port: ${port}`));

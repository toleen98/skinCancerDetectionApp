const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongo = require("./database/index");
const db = require("./database/models");
const auth = require("./routes/auth");
const patientupdate = require("./routes/patientUpdate");
const login = require("./routes/login");
const patientapmnt = require("./routes/patientApmnt");
const patientRep = require("./routes/patientRep");

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("I am here");
  res.send("Welcome!");
});

app.use("/api/user", auth);
app.use("/api/profile", patientupdate);
app.use("", login);
app.use("", patientapmnt);
app.use("", patientRep);

app.listen(port, () => console.log(`Server started on port: ${port}`));

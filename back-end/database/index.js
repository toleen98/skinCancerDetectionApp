const mongoose = require("mongoose");
const url =
  "mongodb+srv://yasmeen:1996292yaso@cluster0-l9jkx.mongodb.net/skinCancer?retryWrites=true&w=majority";
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');

dotenv.config();
const uri = process.env.MONGO;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("We are connected");
});
module.exports = db;

//testing mongoDB and mongoose

// const mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017/attackOnTitans";
// mongoose.connect(url, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.once("open", (_) => {
//   console.log("Database connected:", url);
// });

// db.on("error", (err) => {
//   console.error("connection error:", err);
// });

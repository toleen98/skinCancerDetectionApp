// const app = require("../../server.js");
// app.listen(8888);
// const supertest = require("supertest");
// const request = supertest(app);
// const mongoose = require("mongoose");
// const databaseName = "signBase";
// const dataB = require("../../database/models.js");

// beforeAll(async () => {
//   const url = `mongodb://127.0.0.1/${databaseName}`;
//   await mongoose.connect(url, { useNewUrlParser: true });
// });

// jest.useFakeTimers();
// it("Should login for user", async (done) => {
//   await request.post("/login").send({
//     email: "smunawer@gmail.com",
//     password: "HELLooo!!!",
//   });

//   done();
// });

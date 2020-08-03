const app = require("../../server.js");
app.listen(8080);
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require("mongoose");
const databaseName = "signBase";
const dataB = require("../../database/models.js");

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});

jest.useFakeTimers();

it("Should save user to database", async (done) => {
  const res = await request.post("/api/user/patient/signup").send({
    name: "smunawer",
    email: "smunawer@gmail.com",
    password: "HELLooo!!!",
  });

  const pat = await dataB.Patient.findOne({ email: "smunawer@gmail.com" });

  done();
});

//clean all collections and data from database
// async function removeAllCollections() {
//   const collections = Object.keys(mongoose.connection.collections);
//   for (const collectionName of collections) {
//     const collection = mongoose.connection.collections[collectionName];
//     await collection.deleteMany();
//   }
// }

// afterEach(async () => {
//   await removeAllCollections();
// });

// require('dotenv').config();
const express = require('express');
const app =  express();
const auth = require('./routes/auth')
const bodyParser = require('body-parser')


//middelwere
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: false
})
);
app.use(bodyParser.json());

app.use("/api/users", auth)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} Visit https://localhost:${PORT}`)});
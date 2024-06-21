const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const moongoose = require('mongoose');
const userRoute = require('./routes/user');

const app = express();
dotenv.config();


moongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DbConnection Successful"))
    .catch((err) => {
        console.log(err)
    });

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);


app.listen(process.env.PORT  || 5000, () => {
    console.log("Backend Server is running!");
});
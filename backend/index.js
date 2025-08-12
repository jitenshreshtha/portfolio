const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("mongodb connected")
    })
    .catch(err => console.log(err));


app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
})
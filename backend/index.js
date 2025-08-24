const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');


//file imports
const educationroute = require('./routes/educationroute');
const experienceroute = require('./routes/experienceroute');
const projectroute = require('./routes/projectroute');


const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("mongodb connected")
    })
    .catch(err => console.log(err));


app.use('/education', educationroute);
app.use('/experience', experienceroute);
app.use('/project', projectroute);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
})
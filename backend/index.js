const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path');


//file imports
const educationroute = require('./routes/educationroute');
const experienceroute = require('./routes/experienceroute');
const projectroute = require('./routes/projectroute');


const app = express();


app.use(express.json());
// const _dirname = path.dirname("");

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("mongodb connected")
    })
    .catch(err => console.log(err));


app.use('/education', educationroute);
app.use('/experience', experienceroute);
app.use('/project', projectroute);



const buildpath = path.join(__dirname,"../frontend/dist");
app.use(express.static(buildpath));
app.get(/\/(.*)/, (req, res) => {
    res.sendFile(path.join(buildpath, 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
})
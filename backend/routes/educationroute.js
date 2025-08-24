const express = require("express");
const router = express.Router();


//file imports 
const { addEducation, getEducation } = require("../controllers/educationController");

router.post('/addEducation', addEducation);
router.get('/getEducation', getEducation);

module.exports = router;
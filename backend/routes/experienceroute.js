const express = require('express');
const router = express.Router();
const addExperience = require('../controllers/experienceController');

router.post('/addExperience',addExperience);


module.exports = router;
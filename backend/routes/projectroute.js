const express = require('express');
const router = express.Router();

const { addProject, getProject } = require('../controllers/projectcontroller');



router.post('/addProject', addProject);
router.get('/getproject', getProject);


module.exports = router;
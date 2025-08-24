const Experience = require('../models/Experience');

const addExperience = async(req,res) =>{
    try {
        const { jobTitle, company, startDate, endDate } = req.body;
        const newExperience = new Experience({
            jobTitle,
            company,
            startDate,
            endDate
        });
        await newExperience.save();
        res.status(201).json({ message: "Experience added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding experience" });
    }
}

module.exports = addExperience;
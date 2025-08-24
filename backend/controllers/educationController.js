const Education = require('../models/Education');

const addEducation = async (req, res) => {
    try {
        const { degree, institution, startDate, endDate } = req.body;
        const newEducation = new Education({
            degree,
            institution,
            startDate,
            endDate
        });
        await newEducation.save();
        res.status(201).json(newEducation);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}
const getEducation = async(req,res) =>{
    try {
        const allEducation = await Education.find({});
        res.status(200).json(allEducation);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = { addEducation, getEducation };
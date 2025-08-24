const Project = require('../models/Project');

const addProject = async (req, res) => {
    try {
        const { title, description, startDate, endDate } = req.body;
        const newProject = new Project({
            title,
            description,
            startDate,
            endDate
        });
        await newProject.save();
        res.status(201).json({ message: "Project added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding project" });
    }
}
const getProject = async (req, res) => {
    try {
        const allProjects = await Project.find({});
        res.status(200).json(allProjects);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching projects" });
    }
}

module.exports = { addProject, getProject };

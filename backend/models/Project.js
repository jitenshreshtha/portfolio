const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
        required: true
    },
    github: {
        type: String
    },
    live: {
        type: String
    },
    image: {
        type: String
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function AdminProject() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/projects", formData);
            console.log("Project added:", response.data);
            toast.success("Project added successfully");
            setFormData({
                title: "",
                description: "",
                startDate: "",
                endDate: ""
            });
        } catch (error) {
            console.error("Error adding project:", error);
            toast.error("Error adding project");
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Project Title:</label>
                <input type="text" name="title" value={formData.title} placeholder="Enter our project title here" onChange={handleChange} />

                <label>Description:</label>
                <textarea name="description" value={formData.description} placeholder="Enter project description here" onChange={handleChange}></textarea>

                <label>Start Date:</label>
                <input type="Date" name="startDate" value={formData.startDate} onChange={handleChange} />

                <label>End Date:</label>
                <input type="Date" name="endDate" value={formData.endDate} onChange={handleChange} />

                <button type="submit">Add Project</button>
            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default AdminProject;
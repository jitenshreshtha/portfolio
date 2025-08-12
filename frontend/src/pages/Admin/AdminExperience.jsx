import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function AdminExperience() {
    const [formData, setFormData] = useState({
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/experience", formData);
            console.log(response.data);
            toast.success("Experience added successfully!");
            setFormData({
                jobTitle: "",
                company: "",
                startDate: "",
                endDate: ""
            });
        } catch (error) {
            console.error("Error adding experience:", error);
            toast.error("Failed to add experience.");
        }
    }
    return (
        <div>
            <h3>Experience</h3>
            <form onSubmit={handleSubmit}>
                <label>Job Title:</label>
                <input type="text" name="jobTitle" placeholder="Enter your job title" value={formData.jobTitle} onChange={handleChange} />

                <label>Company:</label>
                <input type="text" name="company" placeholder="Enter your company" value={formData.company} onChange={handleChange} />

                <label>Start Date:</label>
                <input type="date" name="startDate" placeholder="Enter your start date" value={formData.startDate} onChange={handleChange} />

                <label>End Date:</label>
                <input type="date" name="endDate" placeholder="Enter your end date" value={formData.endDate} onChange={handleChange} />

                <button>Add Experience</button>

            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default AdminExperience;
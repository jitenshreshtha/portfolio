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
            const response = await axios.post("http://localhost:5000/experience/addExperience", formData);
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
            <form onSubmit={handleSubmit} className="mx-auto max-w-lg flex flex-col gap-4 m-8 bg-gray-100 p-4 rounded-lg shadow">
                <label className="mb-1 font-medium">Job Title:</label>
                <input type="text" name="jobTitle" placeholder="Enter your job title" value={formData.jobTitle} onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4" />

                <label className="mb-1 font-medium">Company:</label>
                <input type="text" name="company" placeholder="Enter your company" value={formData.company} onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4" />

                <label className="mb-1 font-medium">Start Date:</label>
                <input type="date" name="startDate" placeholder="Enter your start date" value={formData.startDate} onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4" />

                <label className="mb-1 font-medium">End Date:</label>
                <input type="date" name="endDate" placeholder="Enter your end date" value={formData.endDate} onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4" />

                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 mt-4">Add Experience</button>

            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default AdminExperience;
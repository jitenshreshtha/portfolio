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
            const response = await axios.post("http://localhost:5000/project/addProject", formData);
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
            <form onSubmit={handleSubmit} className="mx-auto max-w-lg flex flex-col gap-4 m-8 bg-gray-100 p-4 rounded-lg shadow">
                <label className="mb-1 font-medium"> Project Title:</label>
                <input type="text" name="title" value={formData.title} placeholder="Enter our project title here" onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4" />

                <label className="mb-1 font-medium">Description:</label>
                <textarea name="description" value={formData.description} placeholder="Enter project description here" onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4"></textarea>

                <label className="mb-1 font-medium">Start Date:</label>
                <input type="Date" name="startDate" value={formData.startDate} onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4" />

                <label className="mb-1 font-medium">End Date:</label>
                <input type="Date" name="endDate" value={formData.endDate} onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4" />

                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 mt-4">Add Project</button>
            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default AdminProject;
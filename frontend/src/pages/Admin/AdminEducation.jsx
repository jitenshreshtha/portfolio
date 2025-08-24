import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';


function AdminEducation() {
    const [formData, setFormData] = useState({
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/education/addEducation", formData);
            console.log("Education added:", response.data);
            toast.success("Education added successfully");
            setFormData({
                degree: "",
                institution: "",
                startDate: "",
                endDate: ""
            })
        } catch (error) {
            console.error("Error adding education:", error);
            toast.error("Error adding education");
        }

    }
    return (
        <div>
            <h3>Education</h3>
            <form onSubmit={handleSubmit} className="mx-auto max-w-lg flex flex-col gap-4 m-8 bg-gray-100 p-4 rounded-lg shadow">
                <div className="m-auto flex flex-col gap-4">
                    <div>
                        <label className="mb-1 font-medium">Degree:</label>
                        <input type="text" name="degree" placeholder="Enter your degree" value={formData.degree} onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4" />
                    </div>

                    <div>
                        <label className="mb-1 font-medium">Institution:</label>
                        <input type="text" name="institution" placeholder="Enter your institution" value={formData.institution} onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4" />
                    </div>

                    <div>
                        <label className="mb-1 font-medium">Start Date:</label>
                        <input type="Date" name="startDate" placeholder="Enter your start date" value={formData.startDate} onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4" />
                    </div>

                    <div>
                        <label className="mb-1 font-medium">End Date:</label>
                        <input type="Date" name="endDate" placeholder="Enter your end date" value={formData.endDate} onChange={handleChange} className="border px-4 py-2 rounded-lg ml-4" />
                    </div>
                </div>

                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 mt-4">Add Education</button>

            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    )
}

export default AdminEducation;
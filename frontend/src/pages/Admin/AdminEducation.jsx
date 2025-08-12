import React, { useState } from "react";


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
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div>
            <h3>Education</h3>
            <form onSubmit={handleSubmit}>
                <label>Degree:</label>
                <input type="text" name="degree" placeholder="Enter your degree" value={formData.degree} onChange={handleChange} />

                <label>Institution:</label>
                <input type="text" name="institution" placeholder="Enter your institution" value={formData.institution} onChange={handleChange} />

                <label>Start Date:</label>
                <input type="Date" name="startDate" placeholder="Enter your start date" value={formData.startDate} onChange={handleChange} />

                <label>End Date:</label>
                <input type="Date" name="endDate" placeholder="Enter your end date" value={formData.endDate} onChange={handleChange} />

                <button>Add Education</button>

            </form>
        </div>
    )
}

export default AdminEducation;
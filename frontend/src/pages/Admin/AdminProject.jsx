import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function AdminProject() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        technologies: "",
        github: "",
        live: "",
        image: null, // will store File object
        startDate: "",
        endDate: ""
    });

    // Handle text fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle image upload
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("startDate", formData.startDate);
        data.append("endDate", formData.endDate);
        data.append("github", formData.github);
        data.append("live", formData.live);
        data.append(
            "technologies",
            JSON.stringify(
                formData.technologies
                    .split(",")
                    .map((tech) => tech.trim())
                    .filter((tech) => tech.length > 0)
            )
        );
        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            const response = await axios.post(
                "/project/addProject",
                data,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            console.log("Project added:", response.data);
            toast.success("Project added successfully");

            setFormData({
                title: "",
                description: "",
                technologies: "",
                github: "",
                live: "",
                image: null,
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
            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-lg flex flex-col gap-4 m-8 bg-gray-100 p-4 rounded-lg shadow"
                encType="multipart/form-data"
            >
                <label className="mb-1 font-medium"> Project Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Enter project title here"
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-lg ml-4"
                />

                <label className="mb-1 font-medium">Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    placeholder="Enter project description here"
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-lg ml-4"
                ></textarea>

                <label className="mb-1 font-medium">Technologies (comma separated):</label>
                <input
                    type="text"
                    name="technologies"
                    value={formData.technologies}
                    placeholder="e.g. React, Node.js, MongoDB"
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-lg ml-4"
                    required
                />

                <label className="mb-1 font-medium">GitHub Link:</label>
                <input
                    type="url"
                    name="github"
                    value={formData.github}
                    placeholder="https://github.com/username/repo"
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-lg ml-4"
                />

                <label className="mb-1 font-medium">Live Demo Link:</label>
                <input
                    type="url"
                    name="live"
                    value={formData.live}
                    placeholder="https://yourproject.com"
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-lg ml-4"
                />

                <label className="mb-1 font-medium">Upload Project Image:</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="border px-4 py-2 rounded-lg ml-4"
                />

                <label className="mb-1 font-medium">Start Date:</label>
                <input
                    type="Date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-lg ml-4"
                />

                <label className="mb-1 font-medium">End Date:</label>
                <input
                    type="Date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-lg ml-4"
                />

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 mt-4"
                >
                    Add Project
                </button>
            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default AdminProject;

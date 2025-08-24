import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Adminhome() {
    const [name, setName] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (name === "GX") {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [name]);
    return (
        <div>
            <h1>Admin Home</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter password" className="border px-4 py-2 ml-4 rounded-lg bg-gray-200"/>
            {show && (
                <div className="m-4 flex gap-4">
                    <Link to='/me/education' className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 mt-4">Education</Link>
                    <Link to='/me/experience' className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 mt-4">Experience</Link>
                    <Link to='/me/project' className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 mt-4">Project</Link>
                </div>
            )}
        </div>
    );
}

export default Adminhome;
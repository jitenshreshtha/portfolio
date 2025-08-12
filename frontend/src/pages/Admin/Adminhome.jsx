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
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {show && (
                <div>
                    <Link to='/me/education'>Education</Link>
                    <Link to='/me/experience'>Experience</Link>
                    <Link to='/me/project'>Project</Link>
                </div>
            )}
        </div>
    );
}

export default Adminhome;
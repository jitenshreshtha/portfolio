import { Link } from "react-router-dom";


function Adminhome(){
    return (
        <div>
            <h1>Admin Home</h1>
            <Link to='/me/education'>Education</Link>
        </div>
    );
}

export default Adminhome;
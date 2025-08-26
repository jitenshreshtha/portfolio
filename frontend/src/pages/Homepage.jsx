import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import ProjectPage from "./Projectpage";
import EducationPage from "./Educationpage";
import About from "../components/About";
import HireMe from "../components/Hireme";

function Homepage() {
    return (
        <div>
            <div className="h-screen">
                <Header />
                <div id="home">
                    <Introduction />
                </div>
                <Skills />
                <div id="project">
                    <ProjectPage />
                </div>
                <div id="education">
                    <EducationPage />
                </div>
                <About />
               <div id="hire">
                 <HireMe />
               </div>
            </div>
        </div>
    )
}

export default Homepage;
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
                <Introduction />
                <Skills />
                <div id="project">
                    <ProjectPage />
                </div>
                <div id="education">
                    <EducationPage />
                </div>
                <About />
                <HireMe />
            </div>
        </div>
    )
}

export default Homepage;
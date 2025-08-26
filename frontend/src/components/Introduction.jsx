import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import profilepicture from "../assets/Images/profile_picture.JPG";

function Introduction() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.3)",
                }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-6 max-w-6xl mx-auto animate-fade-in">
                <div className="text-center md:text-left flex-1">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I’m{" "}
                        <span className="text-gradient">
                            Jiten
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                        Full Stack Web Developer | Computer Engineer
                    </h2>

                    <p className="text-lg text-gray-400 mb-12 max-w-2xl">
                        Passionate developer with a knack for creating dynamic and responsive web applications.
                        Always eager to learn and implement new technologies to enhance user experience.
                        I believe in the power of collaboration and the importance of understanding user needs
                        to deliver effective solutions. Let’s connect and bring ideas to life!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
                        <button
                            onClick={() => document.getElementById("project").scrollIntoView({ behavior: "smooth" })}
                            className="px-8 py-3 text-lg rounded-2xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white shadow-lg hover:opacity-90 transition-all duration-300 glow-effect">
                            View My Work
                        </button>
                        <a href="/Jiten_Shreshtha_FullStack_Resume.docx" className="px-8 py-3 text-lg rounded-2xl font-semibold border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300">
                            Download CV
                        </a>
                    </div>

                    <div className="flex gap-6 justify-center md:justify-start">
                        <a href="https://github.com/jitenshreshtha" className="text-gray-400 hover:text-primary transition-colors">
                            <Github size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/jiten-shreshtha-23855521a/" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin size={28} />
                        </a>
                        <a href="mailto:jitenshreshtha07@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                            <Mail size={28} />
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src={profilepicture}
                        alt="Profile Picture"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl ring-4 ring-primary/50 hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}

export default Introduction;

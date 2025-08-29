import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/Projectcard";

const ProjectPage = () => {
  const [projects,setProjects] = useState([]);

  useEffect(()=>{
    const fetchProjects = async()=>{
      try {
        const response = await axios.get('/project/getproject');
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProjects();
  },[])
  return (
    <section className="py-20 px-4 bg-black/90 min-h-screen">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my skills in
          full-stack development, UI/UX design, and problem-solving.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;

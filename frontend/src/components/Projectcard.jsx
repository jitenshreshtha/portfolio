import React from "react";
import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  const { title, description, technologies, github, live, image } = project;

  return (
    <div className="relative w-full bg-black/40 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
      {/* Image */}
      {image && (
        <div className="relative overflow-hidden">
          <img
            src={`http://localhost:5000/uploads/${image}`}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        {/* Technologies */}
        {technologies && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-white/10 text-white rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href={github || "#"}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <Github size={16} /> Code
          </a>
          <a
            href={live || "#"}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white hover:opacity-90 transition-all duration-300"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

import React from "react";
import { Code, Palette, Zap } from "lucide-react";

function About() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
    },
    {
      icon: Zap,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, User Research",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black/90 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with experience creating
            digital solutions that bridge the gap between design and
            functionality. I love turning complex problems into simple,
            beautiful designs.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-black/40 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                <skill.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-white">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

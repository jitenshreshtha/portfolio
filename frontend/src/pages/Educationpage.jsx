import React, { useState, useEffect } from "react";
import axios from "axios";
import { GraduationCap, Award } from "lucide-react";

function EducationPage() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get("http://localhost:5000/education/getEducation");
        setEducation(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEducation();
  }, []);

  // Optional: Add certifications (hardcoded or fetched from API)
  const certifications = [
    { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { title: "Google UX Design Certificate", issuer: "Google", year: "2022" },
    { title: "Meta Frontend Developer Certificate", issuer: "Meta", year: "2021" }
  ];

  return (
    <section className="py-20 px-4 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and growth through formal education and professional certifications
            in the latest technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Cards */}
          <div className="space-y-8 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
              <GraduationCap className="text-primary" size={28} /> Education
            </h3>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {education.map((edu) => (
                <div
                  key={edu._id}
                  className="relative bg-black/40 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 w-72"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1 text-white">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-400 mb-2">
                        {new Date(edu.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} -
                        {new Date(edu.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </p>

                      {edu.description && (
                        <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Cards */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
              <Award className="text-primary" size={28} /> Certifications
            </h3>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="relative bg-black/40 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 w-72"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{cert.title}</h4>
                      <p className="text-gray-400 text-sm">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationPage;

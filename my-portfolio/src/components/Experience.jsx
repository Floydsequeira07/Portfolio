import React from "react";
import { MdLocationOn, MdWork } from "react-icons/md";
import { BiCalendarAlt } from "react-icons/bi";

const experienceData = {
  role: "Software Development Intern",
  company: "Ukshati Technologies Pvt Ltd",
  location: "Mangaluru, Karnataka",
  duration: "Feb 2025 - May 2025",
  type: "On-site",
  description: `• Developed responsive user interfaces using React.js, enhancing user experience with dynamic components and efficient state management.
• Built and optimized backend services with Node.js and MySQL.
• Deployed applications using Docker for containerization, ensuring scalability and smooth integration.`,
  technologies: ["React.js", "Express.js", "Node.js", "MySQL", "Docker"],
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        min-h-screen py-28 px-6
        bg-background text-foreground
        border-b border-border/60
      "
    >
      {/* Section Title */}
      <div className="w-auto mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Experience
        </h2>
        <div className="w-24 h-1 mx-auto bg-purple-500 rounded-full"></div>
      </div>

      {/* Experience Card */}
      <div className="w-auto mx-auto">
        <div
          className="
            bg-card/80 backdrop-blur-sm
            rounded-2xl p-6 md:p-8
            shadow-2xl
            transition-all duration-300
            hover:shadow-purple-500/30
            border border-border
            hover:border-purple-600
          "
        >
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <div className="flex items-center gap-2">
              <BiCalendarAlt className="text-purple-400 w-5 h-5" />
              <span className="font-semibold text-purple-400">
                {experienceData.duration}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MdLocationOn className="text-muted-foreground w-5 h-5" />
              <span className="text-muted-foreground">
                {experienceData.location}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MdWork className="text-blue-400 w-5 h-5" />
              <span className="text-blue-400">{experienceData.type}</span>
            </div>
          </div>

          {/* Role & Company */}
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-left tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            {experienceData.role}
          </h3>

          <p className="text-left font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            {experienceData.company}
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-base sm:text-lg text-left mb-6 leading-relaxed whitespace-pre-line">
            {experienceData.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-border">
            {experienceData.technologies.map((tech, i) => (
              <span
                key={i}
                className="
                  bg-gradient-to-r from-purple-600/30 to-blue-600/30
                  text-foreground
                  text-xs font-medium
                  px-3 py-1 rounded-full
                  shadow-md
                  hover:scale-105
                  transition-all duration-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

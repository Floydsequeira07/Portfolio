import React from "react";
import { MdLocationOn, MdWork } from "react-icons/md";
import { BiCalendarAlt } from "react-icons/bi";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "MindStack Technologies Pvt Ltd",
    location: "Mangaluru, Karnataka",
    duration: "Dec 2025 – Present",
    type: "On-site (Ongoing)",
    description: `• Working on HealthConnect a full-stack healthcare booking platform.
• Developing frontend using Next.js, Tailwind CSS, and modern React patterns.
• Building backend APIs with NestJS and MySQL.
• Implementing role-based access, dashboards, and booking workflows.
• Using TypeScript, React Hooks, and Lucide icons for scalable UI development.`,
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "MySQL",
      "Tailwind CSS",
      "React Hooks",
      "Lucide Icons",
    ],
    highlight: true,
  },
  {
    role: "Software Development Intern",
    company: "Ukshati Technologies Pvt Ltd",
    location: "Mangaluru, Karnataka",
    duration: "Feb 2025 – May 2025",
    type: "On-site",
    description: `• Developed responsive user interfaces using React.js.
• Built and optimized backend services with Node.js and MySQL.
• Deployed applications using Docker for containerization.`,
    technologies: ["React.js", "Express.js", "Node.js", "MySQL", "Docker"],
    highlight: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-28 px-6 bg-background text-foreground border-b border-border/60"
    >
      {/* Section Title */}
      <div className="w-auto mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Experience
        </h2>
        <div className="w-24 h-1 mx-auto bg-purple-500 rounded-full" />
      </div>

      {/* Experience Cards */}
      <div className="w-auto mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`
              bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8
              shadow-2xl transition-all duration-300
              border border-border
              hover:border-purple-600 hover:shadow-purple-500/30
              ${exp.highlight ? "ring-1 ring-purple-500/40" : ""}
            `}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
              <div className="flex items-center gap-2">
                <BiCalendarAlt className="text-purple-400 w-5 h-5" />
                <span className="font-semibold text-purple-400">
                  {exp.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MdLocationOn className="text-muted-foreground w-5 h-5" />
                <span className="text-muted-foreground">{exp.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <MdWork className="text-blue-400 w-5 h-5" />
                <span className="text-blue-400">{exp.type}</span>
              </div>
            </div>

            {/* Role & Company */}
            <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {exp.role}
            </h3>

            <p className="font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {exp.company}
            </p>

            {/* Description */}
            <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed whitespace-pre-line">
              {exp.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-foreground text-xs font-medium px-3 py-1 rounded-full shadow-md hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

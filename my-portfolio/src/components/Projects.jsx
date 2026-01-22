// src/components/Projects.jsx
import projects from "../data/projects";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-28 px-6
        bg-background text-foreground
        border-b border-border/60
      "
    >
      {/* Section Title */}
      <div className="w-auto mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Projects
        </h2>
        <div className="w-24 h-1 mx-auto bg-purple-500 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="w-auto mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
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
            {/* Project Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-left tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-muted-foreground text-base sm:text-lg text-left mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Project Links */}
            {index !== 3 && (
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    bg-blue-500 text-white
                    rounded-full
                    hover:bg-blue-600
                    transition-colors duration-200
                  "
                >
                  <FiExternalLink className="w-5 h-5" />
                  Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    border border-blue-500
                    rounded-full
                    text-foreground
                    hover:bg-blue-500 hover:text-white
                    transition-colors duration-200
                  "
                >
                  <FaGithub className="w-5 h-5" />
                  Code
                </a>
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-border">
              {project.technologies.map((tech, i) => (
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
        ))}
      </div>
    </section>
  );
}

// src/components/Technologies.jsx
import technologies from "../data/technologies";

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="
        py-28 px-6
        bg-background text-foreground
        border-b border-border/60
      "
    >
      {/* Section Title */}
      <div className="w-auto mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Technologies
        </h2>
        <div className="w-24 h-1 mx-auto bg-purple-500 rounded-full"></div>
      </div>

      {/* Technologies Grid */}
      <div className="w-auto mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="
              bg-card/80 backdrop-blur-sm
              rounded-2xl p-4
              flex flex-col items-center justify-center
              shadow-2xl
              border border-border/60
              hover:border-purple-600
              hover:shadow-purple-500/30
              transition-all duration-300
            "
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-12 h-12 sm:w-14 sm:h-14 mb-3 object-contain"
            />
            <p className="text-foreground text-base sm:text-lg font-medium">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

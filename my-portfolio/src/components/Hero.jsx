import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative flex flex-col items-center justify-center
        text-center py-32 px-6 min-h-screen
        bg-background
        border-b border-border/60
      "
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Hi, I'm{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Floyd Jostin Sequeira
        </span>{" "}
        👋
      </h1>

      <p className="w-auto mx-auto text-base sm:text-lg mb-10 leading-relaxed text-muted-foreground">
        I’m a passionate{" "}
        <span className="text-blue-400 font-semibold">Full Stack</span> and{" "}
        <span className="text-purple-400 font-semibold">Python developer</span>{" "}
        with expertise in creating{" "}
        <span className="text-blue-400 font-semibold">robust</span>,{" "}
        <span className="text-purple-400 font-semibold">scalable</span>, and{" "}
        <span className="text-blue-400 font-semibold">user-friendly</span>{" "}
        web applications. Skilled in{" "}
        <span className="text-purple-400 font-semibold">React</span>,{" "}
        <span className="text-blue-400 font-semibold">Express.js</span>, and{" "}
        <span className="text-purple-400 font-semibold">MySQL</span>, I focus on
        delivering{" "}
        <span className="text-blue-400 font-semibold">efficient solutions</span>{" "}
        that drive{" "}
        <span className="text-purple-400 font-semibold">innovation</span> and
        create{" "}
        <span className="text-blue-400 font-semibold">
          meaningful digital experiences
        </span>.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/Floyd_resume.pdf"
          download
          className="px-6 py-3 bg-blue-500 rounded-lg text-white font-medium shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
        >
          Download Resume
        </a>

        <NavLink
          to="/contact"
          className="px-6 py-3 border border-blue-500 rounded-lg font-medium text-foreground hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          Contact Me
        </NavLink>
      </div>
    </section>
  );
}

import { NavLink } from "react-router-dom";
import heroEmoji from "../assets/emoji.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative min-h-screen
        bg-background
        border-b border-border/60
        px-6 py-32
        flex items-center
        overflow-hidden
      "
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-20%] w-[520px] h-[520px] bg-purple-500/20 rounded-full blur-[140px]" />
        <div className="absolute right-[-10%] bottom-[-20%] w-[520px] h-[520px] bg-blue-500/20 rounded-full blur-[140px]" />
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left animate-[fadeUp_0.8s_ease-out]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Floyd Jostin Sequeira
            </span>{" "}
            <span className="inline-block animate-wave ml-2 text-white">👋</span>
          </h1>

          <p className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg mb-10 leading-relaxed text-muted-foreground">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Floyd_resume.pdf"
              download
              className="
                px-6 py-3 rounded-lg font-medium
                bg-blue-500 text-white
                shadow-lg hover:shadow-xl
                hover:bg-blue-600 transition-all duration-300
              "
            >
              Download Resume
            </a>

            <NavLink
              to="/contact"
              className="
                px-6 py-3 rounded-lg font-medium
                border border-blue-500
                text-foreground
                hover:bg-blue-500 hover:text-white
                transition-all duration-300
              "
            >
              Contact Me
            </NavLink>
          </div>
        </div>

        {/* RIGHT EMOJI */}
        <div className="flex justify-center relative animate-[fadeUp_1s_ease-out]">
          {/* Glow Ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-purple-500/25 to-pink-500/25 rounded-full blur-[160px] -z-10" />

          <img
            src={heroEmoji}
            alt="Developer Emoji"
            className="
              w-72 sm:w-80 md:w-[360px] lg:w-[420px]
              animate-float
              drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]
              transition-transform duration-500
              hover:scale-105
            "
          />
        </div>
         <div onClick={()=>
          document.getElementById("about")?.scrollIntoView({behavior:"smooth"})
         }
         aria-label="Scroll to next section"
 
         className="absolute bottom-6 left-1/2 -translate-x-1/2  text-4xl md:text-5xl text-muted-foreground   animate-bounce  select-none">
              ↓
            </div>

      </div>
    </section>
  );
}

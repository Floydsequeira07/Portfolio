import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import heroEmoji from "../assets/emoji.png";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const texts = [
  "React.js Developer",
  "Node.js Developer",
  "Next.js Developer",
  "AI Application Developer",
  "REST API Developer",
];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
  
    if (!deleting && subIndex === texts[index].length) {
      const pause = setTimeout(() => setDeleting(true), 1200);
      return () => clearTimeout(pause);
    }

    
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

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
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-20%] w-[520px] h-[520px] bg-purple-500/20 rounded-full blur-[140px]" />
        <div className="absolute right-[-10%] bottom-[-20%] w-[520px] h-[520px] bg-blue-500/20 rounded-full blur-[140px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left animate-[fadeUp_0.8s_ease-out]">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
  <span className="text-foreground">
    Hi, I'm{" "}
  </span>

  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
    Floyd Jostin Sequeira
  </span>

  <span className="inline-block animate-wave ml-2 text-white">
    👋
  </span>
</h1>

  {/* TYPING SUBTITLE */}
  <div className="mt-4 mb-8 h-12">
    <div className="text-lg sm:text-xl font-semibold text-blue-400">
      Full Stack Developer
    </div>

    <div className="h-6 overflow-hidden">
      <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
        {texts[index].substring(0, subIndex)}
        <span className="ml-1 animate-pulse">|</span>
      </span>
    </div>
  </div>
          {/* DESCRIPTION */}
          <p className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg mb-10 leading-relaxed text-muted-foreground">
  I’m a passionate{" "}
  <span className="text-blue-400 font-semibold">Full Stack Developer</span>{" "}
  focused on building scalable, user-friendly, and{" "}
  <span className="text-purple-400 font-semibold">AI-powered applications.</span>
</p>

          {/* BUTTONS */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Floyd_Sequeira_updatedSky.pdf"
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
         <div
  onClick={() =>
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  aria-label="Scroll to next section"
  className="
    absolute bottom-6 left-1/2 -translate-x-1/2
    w-12 h-12
    rounded-full
    border border-blue-400/50
    bg-background/40
    backdrop-blur-sm
    flex items-center justify-center
    text-blue-400
    cursor-pointer
    animate-bounce
    hover:bg-blue-500/10
    hover:border-blue-400
    hover:text-blue-300
    transition-all duration-300
    shadow-[0_0_20px_rgba(59,130,246,0.25)]
  "
>
  <ChevronDown size={26} strokeWidth={2} />
</div>

      </div>
    </section>
  );
}
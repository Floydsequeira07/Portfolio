import profilePic from "../assets/image.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-background text-foreground border-b border-border/60"
    >
      {/* Section Title */}
      <div className="w-auto mx-auto mb-16">
        <h2 className="
          text-4xl sm:text-5xl font-extrabold mb-4
          text-center tracking-tight
          text-transparent bg-clip-text
          bg-gradient-to-r from-blue-400 to-purple-600
        ">
          About Me
        </h2>
        <div className="w-24 h-1 mx-auto bg-purple-500 rounded-full" />
      </div>

      {/* About Content Card */}
      <div className="
        w-auto mx-auto
        bg-card text-card-foreground
        backdrop-blur-sm
        rounded-2xl p-6 md:p-8
        shadow-2xl
        border border-border
        hover:border-purple-600
        transition-all duration-300
        flex flex-col items-center
      ">
        {/* Profile Picture */}
        <div className="
          w-40 h-40 md:w-48 md:h-48
          rounded-full p-1
          bg-gradient-to-r from-purple-500 to-blue-500
          shadow-lg mb-6
        ">
          <div className="w-full h-full rounded-full overflow-hidden bg-background">
            <img
              src={profilePic}
              alt="Floyd Jostin Sequeira"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 35%" }}
            />
          </div>
        </div>

        {/* Description */}
        <p className="
          text-left leading-relaxed
          text-base sm:text-lg
          text-muted-foreground
        ">
          I’m a dedicated and versatile{" "}
          <span className="text-blue-400 font-semibold">Full Stack Developer</span>{" "}
          with a growing passion for{" "}
          <span className="text-purple-400 font-semibold">UI/UX Design</span>.
          I enjoy building clean, intuitive, and user-focused digital experiences.

          Skilled in{" "}
          <span className="text-purple-400 font-semibold">React.js</span>,{" "}
          <span className="text-blue-400 font-semibold">Next.js</span>,{" "}
          <span className="text-purple-400 font-semibold">Express.js</span>,{" "}
          <span className="text-blue-400 font-semibold">MySQL</span>, and{" "}
          <span className="text-purple-400 font-semibold">Python</span>, I
          specialize in creating efficient, scalable web applications that blend
          strong engineering with thoughtful design.

          Alongside development, I’m actively improving my skills in{" "}
          <span className="text-blue-400 font-semibold">wireframing</span>,{" "}
          <span className="text-purple-400 font-semibold">prototyping</span>, and{" "}
          <span className="text-blue-400 font-semibold">UI layout design</span>.
          I enjoy analyzing user needs, planning smooth user flows, and
          transforming ideas into visually appealing interfaces.

          I thrive in collaborative environments, love solving complex problems,
          and continuously aim to{" "}
          <span className="text-purple-400 font-semibold">
            learn new technologies
          </span>{" "}
          while contributing to meaningful and user-centered digital products.
        </p>
      </div>
    </section>
  );
}

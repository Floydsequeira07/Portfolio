import profilePic from "../assets/floyd.png";

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
  I’m a dedicated and passionate{" "}
  <span className="text-blue-400 font-semibold">Full Stack Developer</span>{" "}
  with hands-on experience in building responsive, scalable, and
  user-friendly web applications.

  I have experience working with{" "}
  <span className="text-purple-400 font-semibold">React.js</span>,{" "}
  <span className="text-blue-400 font-semibold">Next.js</span>,{" "}
  <span className="text-purple-400 font-semibold">Node.js</span>,{" "}
  <span className="text-blue-400 font-semibold">NestJS</span>,{" "}
  <span className="text-purple-400 font-semibold">Express.js</span>, and{" "}
  <span className="text-blue-400 font-semibold">MySQL</span>,{" "}
  developing frontend interfaces, REST APIs, backend services, and
  database-driven applications.

  I’m also interested in{" "}
  <span className="text-purple-400 font-semibold">AI-powered applications</span>{" "}
  and have worked with{" "}
  <span className="text-blue-400 font-semibold">LLMs</span>,{" "}
  <span className="text-purple-400 font-semibold">Groq AI</span>, and{" "}
  <span className="text-blue-400 font-semibold">Socket.IO</span>{" "}
  to build intelligent and real-time applications.

  I enjoy solving problems, learning new technologies, and building
  applications that provide practical and meaningful solutions. I’m
  continuously improving my development skills while looking for
  opportunities to contribute to real-world projects and grow as a
  Full Stack Developer.
</p>
      </div>
    </section>
  );
}

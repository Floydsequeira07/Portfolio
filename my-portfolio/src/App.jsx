import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sections = [
  { id: "hero", path: "/" },
  { id: "about", path: "/about" },
  { id: "technologies", path: "/technologies" },
  { id: "experience", path: "/experience" },
  { id: "projects", path: "/projects" },
  { id: "contact", path: "/contact" },
];

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const isProgrammaticScroll = useRef(false);
  const lastPath = useRef(location.pathname);
  const ticking = useRef(false);

  
  useEffect(() => {
    if (lastPath.current === location.pathname) return;

    const match = sections.find((s) => s.path === location.pathname);
    if (!match) return;

    isProgrammaticScroll.current = true;
    lastPath.current = location.pathname;

    document.getElementById(match.id)?.scrollIntoView({
      behavior: "auto", // 🔥 IMPORTANT: instant scroll
      block: "start",
    });

    const timer = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 120); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current || ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollPos = window.scrollY + window.innerHeight * 0.35;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i].id);
          if (!section) continue;

          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            if (lastPath.current !== sections[i].path) {
              lastPath.current = sections[i].path;
              navigate(sections[i].path, { replace: true });
            }
            break;
          }
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate]);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

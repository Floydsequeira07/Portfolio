import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Technologies", to: "/technologies" },
    { name: "Experience", to: "/experience" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background border-b border-border">
      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO (DESKTOP + MOBILE) */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            rounded-full
            transition-all duration-300
            hover:shadow-[0_0_18px_rgba(99,102,241,0.35)]
          "
        >
          <img
            src={logo}
            alt="Floyd Sequeira Logo"
            className="
              w-12 h-12 md:w-18 md:h-18
              rounded-full object-cover
            "
          />
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `font-semibold transition ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                      : "text-foreground"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <ThemeToggle />
        </div>

        {/* MOBILE NAV */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-3xl text-foreground">
                <HiMenu />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="bg-background text-foreground">
              <div className="flex justify-between items-center  mb-6">
                {/* LOGO INSIDE MOBILE MENU */}
                <button
                  onClick={scrollToTop}
                  className="
                    rounded-full
                    transition-all duration-300
                    hover:shadow-[0_0_16px_rgba(99,102,241,0.35)] 
                  "
                >
                  <img
                    src={logo}
                    alt="Floyd Sequeira Logo"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </button>
                 <div className="mt-6">
                <ThemeToggle />
              </div>
              </div>

              <div className="flex flex-col gap-6">
                {links.map((link) => (
            <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `
                      font-semibold transition
                      ${isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                        : "text-foreground"
                      }
                      active:scale-95
                    `
                  }
                >
                  {link.name}
            </NavLink>

                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}

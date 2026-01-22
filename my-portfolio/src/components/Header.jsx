import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
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

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background border-b border-border">
      <div className="flex justify-between items-center px-6 py-4">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Floyd Sequeira
        </h1>

        {/* DESKTOP */}
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

        {/* MOBILE */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-3xl text-foreground">
                <HiMenu />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="bg-background text-foreground">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                  Floyd Sequeira
                </h2>
                <ThemeToggle />
              </div>

              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className="font-semibold text-foreground"
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

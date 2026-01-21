import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

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
    <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-600 text-white z-50">
      <div className="w-auto mx-auto flex justify-between items-center px-6 py-4">
        
        {/* LOGO */}
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Floyd Sequeira Portfolio
        </h1>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `relative font-semibold transition ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                    : "text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-blue-400 to-purple-600 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ================= MOBILE NAV (SHADCN – OPTIMIZED) ================= */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-3xl">
                <HiMenu />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="
                bg-slate-950 text-white border-slate-800
                transition-transform duration-200
              "
            >
              {/* MOBILE LOGO */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                  Floyd Sequeira Portfolio
                </h2>
                <div className="mt-2 h-px w-full bg-slate-800" />
              </div>

              {/* MOBILE LINKS */}
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className={({ isActive }) =>
                      `text-base font-semibold transition ${
                        isActive
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                          : "text-white"
                      }`
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

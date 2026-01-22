import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (systemDark ? "dark" : "light");

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        p-2 rounded-full border border-border
        bg-card hover:scale-105 transition
      "
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-white-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-800" />
      )}
    </button>
  );
}

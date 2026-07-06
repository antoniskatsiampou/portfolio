import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#coursework", label: "Coursework" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Theme state
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") === "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  const toggleTheme = () => setIsLight((v) => !v);

  return (
    <header className="fixed top-0 left-0 right-0 pt-5 z-50">
      <nav className="container mx-auto flex justify-between md:grid md:grid-cols-3 items-center gap-4 px-4">
        {/* Left logo */}
        <a href="#" className="text-2xl hover:text-accent justify-self-start">
          <strong>
            Antonis K<span className="text-accent">.</span>
          </strong>
        </a>

        {/* Center links */}
        <div className="glass hidden md:flex justify-self-center">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-base hover:text-accent whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 justify-self-end">
          {/* Desktop theme toggle */}
          <span className="hidden md:block">
            <ThemeToggle isLight={isLight} onToggle={toggleTheme} />
          </span>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex items-center justify-center p-2 cursor-pointer transition-colors duration-200 hover:text-accent"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden container mx-auto px-4 mt-3">
          <div className="glass !flex-col items-stretch gap-2 py-4 !rounded-2xl">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base hover:text-accent px-2 py-1"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile theme toggle */}
            <div className="border-t border-accent/30 mt-2 pt-2 flex items-center gap-2 px-2">
              <ThemeToggle isLight={isLight} onToggle={toggleTheme} />
              <span className="text-sm">Theme</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

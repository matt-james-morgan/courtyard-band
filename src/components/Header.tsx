import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);
      setIsHidden(y > 100 && y > lastScrollY.current);
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Account for header height
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isHidden ? "-translate-y-full" : "translate-y-0",
        isScrolled
          ? "py-3 bg-background/95 backdrop-blur-md border-b border-border/20"
          : "py-5 bg-transparent border-b border-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-end">
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks scrollToSection={scrollToSection} />
        </div>

        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block w-6 transition-all duration-300",
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            )}
          >
            <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-6 h-0.5 bg-foreground mb-1.5" />
            <span className="block w-4 h-0.5 bg-foreground" />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col pt-24 px-6 md:hidden",
          "transition-[transform,opacity] duration-500 ease-in-out",
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
        style={{ backgroundColor: "hsl(var(--background))" }}
      >
        <button
          className="absolute top-5 right-5 p-2"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-foreground transform rotate-45 translate-y-0.5" />
          <span className="block w-6 h-0.5 bg-foreground transform -rotate-45" />
        </button>

        <nav className="flex flex-col space-y-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "hover:text-accent transition-colors",
                isActive && "text-accent font-semibold"
              )
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <button
            className="text-left text-xs uppercase tracking-widest font-light text-foreground/60 hover:text-foreground transition-colors"
            onClick={() => {
              scrollToSection("performances");
              setIsMobileMenuOpen(false);
            }}
          >
            Shows
          </button>
          <button
            className="text-left text-xs uppercase tracking-widest font-light text-foreground/60 hover:text-foreground transition-colors"
            onClick={() => {
              scrollToSection("contact");
              setIsMobileMenuOpen(false);
            }}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

interface NavLinksProps {
  scrollToSection: (id: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection }) => (
  <>
    <button
      className="text-xs uppercase tracking-widest font-light text-foreground/60 hover:text-foreground transition-colors"
      onClick={() => scrollToSection("home")}
    >
      Home
    </button>
    <button
      className="text-xs uppercase tracking-widest font-light text-foreground/60 hover:text-foreground transition-colors"
      onClick={() => scrollToSection("about")}
    >
      About
    </button>
    <button
      className="text-xs uppercase tracking-widest font-light text-foreground/60 hover:text-foreground transition-colors"
      onClick={() => scrollToSection("performances")}
    >
      Shows
    </button>
    <button
      className="text-xs uppercase tracking-widest font-light text-foreground/60 hover:text-foreground transition-colors"
      onClick={() => scrollToSection("contact")}
    >
      Contact
    </button>
  </>
);

export default Header;

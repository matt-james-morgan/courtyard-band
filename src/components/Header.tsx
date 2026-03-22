import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { label: "Home", action: () => scrollToSection("home") },
    { label: "About", action: () => scrollToSection("about") },
    { label: "Shows", action: () => scrollToSection("performances") },
    { label: "Materials", action: () => scrollToSection("materials") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <>
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
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="text-xs uppercase tracking-widest font-light text-foreground/60 hover:text-foreground transition-colors"
                onClick={item.action}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-foreground" />
            <span className="block w-6 h-0.5 bg-foreground" />
            <span className="block w-4 h-0.5 bg-foreground" />
          </button>
        </div>
      </header>

      {/* Mobile menu — rendered outside <header> to avoid stacking context issues */}
      <div
        className={cn(
          "fixed inset-0 z-[100] flex flex-col pt-24 px-8 md:hidden bg-background",
          "transition-[transform,opacity] duration-500 ease-in-out",
          isMobileMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 p-2"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-foreground transform rotate-45 translate-y-0.5" />
          <span className="block w-6 h-0.5 bg-foreground transform -rotate-45" />
        </button>

        <nav className="flex flex-col space-y-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="text-left text-xs uppercase tracking-widest font-light text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => {
                item.action();
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;

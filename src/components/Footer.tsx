import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Mail, Facebook, Instagram } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
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
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer
      className={cn(
        "py-20 md:py-32 bg-white border-t border-gray-100",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-serif font-medium mb-4">
            Courtyard
          </h3>
          <p className="text-muted-foreground mb-6">
            Indie Band · Guelph, Ontario
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:courtyardtheband@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/courtyard_theband/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61565740834045"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              to="/"
              className="text-xl font-serif font-medium tracking-tight"
            >
              Courtyard
            </Link>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm hover:text-gray-900 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Courtyard. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

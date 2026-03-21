import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("py-12 bg-background border-t border-border", className)}>
      <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" className="text-sm uppercase tracking-[0.3em] text-foreground/40 font-light hover:text-foreground transition-colors">
          Courtyard
        </Link>
        <p className="text-xs text-foreground/30 font-light">
          &copy; {new Date().getFullYear()} Courtyard. Guelph, Ontario.
        </p>
        <a
          href="mailto:courtyardtheband@gmail.com"
          className="text-xs uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors font-light"
        >
          courtyardtheband@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;

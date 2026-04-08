import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "Portfolio", path: "/#portfolio" },
    { name: "About", path: "/#about" },
    { name: "Our Team!", path: "/#team" },
  ];

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith("/#") && location.pathname === "/") {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-tech-blue/80 backdrop-blur-md border-neon-cyan/20 py-4"
          : "bg-transparent py-6"
      )}
    >
    
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
         
          <span className="font-display font-bold text-xl tracking-tight">
            Digi <span className="text-neon-cyan">10x</span> Growth
            
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book-appointment"
            className="px-5 py-2.5 rounded-full bg-transparent border border-neon-cyan text-neon-cyan font-medium text-sm hover:bg-neon-cyan hover:text-tech-blue transition-all box-glow-hover"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-neon-cyan"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-tech-blue-light border-b border-neon-cyan/20 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className="text-lg font-medium text-gray-300 hover:text-neon-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book-appointment"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-6 py-3 rounded-full bg-neon-cyan text-tech-blue font-semibold text-center hover:shadow-[0_0_20px_#00F0FF] transition-shadow"
          >
            Book Appointment
          </Link>
        </motion.div>
      )}
    </header>
  );
}

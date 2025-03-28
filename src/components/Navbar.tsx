
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle clicking on mobile menu items
  const handleMobileMenuItemClick = () => {
    setIsOpen(false); // Close the mobile menu when an item is clicked
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || !transparent
          ? "bg-cream-50/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-xl md:text-2xl font-serif font-medium text-nature-900">
              212 Mini Mall/
              <span className="text-accent">Coffee Bean</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Reservation Button */}
          <a
            href="#reservation"
            className="hidden md:inline-flex btn-primary"
          >
            Reserve a Table
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-nature-800 hover:text-nature-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-cream-50 z-40 md:hidden overflow-y-auto pt-20">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-6 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium nav-link"
                  onClick={handleMobileMenuItemClick}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#reservation"
                className="btn-primary w-full justify-center mt-4"
                onClick={handleMobileMenuItemClick}
              >
                Reserve a Table
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

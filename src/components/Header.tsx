/**
 * @file Header.tsx
 * @description Main navigation header with responsive menu and scroll behavior.
 * @module Components/Layout
 */

import React, { useState, useEffect, memo } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { brand } from "@/data/siteContent";

/**
 * Navigation link type
 */
interface NavLink {
  label: string;
  href: string;
}

const Header: React.FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Collection", href: "/collection" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        bg-background/95 backdrop-blur-md shadow-[var(--shadow-soft)] py-4`}
      aria-label="Main navigation"
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl font-bold text-primary"
            aria-label="Go to home page"
          >
            {brand.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  to={href}
                  className={`${
                    label === "Contact" ? "btn-outline-gold" : "text-foreground hover:text-accent"
                  } transition-colors duration-200 ${
                    isActive(href) && label !== "Contact" ? "text-accent" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <ul className="flex flex-col space-y-4 pt-4">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    onClick={closeMenu}
                    className={`text-left transition-colors duration-200 ${
                      label === "Contact"
                        ? "text-foreground hover:text-accent"
                        : `text-foreground hover:text-accent ${
                            isActive(href) ? "text-accent" : ""
                          }`
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
});

Header.displayName = "Header";

export default Header;

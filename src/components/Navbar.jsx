import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-medic-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link
          to="/"
          className="font-heading font-bold text-xl md:text-2xl text-medic-text"
        >
          Sukrutha<span className="text-medic-teal"> Healthcare</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`relative text-[15px] transition-colors group ${
                location.pathname === link.to
                  ? "text-medic-teal"
                  : "text-medic-text hover:text-medic-teal"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-medic-teal transition-transform origin-left duration-300 ${
                  location.pathname === link.to
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/contact"
            className="rounded-full bg-medic-teal text-white text-[14px] font-semibold px-6 py-[10px] hover:bg-medic-teal-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-medic-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-medic-white border-t border-medic-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`block text-[15px] py-2 transition-colors ${
                location.pathname === link.to
                  ? "text-medic-teal"
                  : "text-medic-text hover:text-medic-teal"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center rounded-full bg-medic-teal text-white text-[14px] font-semibold px-6 py-3 hover:bg-medic-teal-light transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}

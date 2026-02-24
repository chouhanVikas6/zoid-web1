"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Who We Are", path: "/who-we-are" },
    { label: "What We Do", path: "/what-we-do" },
    { label: "Careers", path: "/careers" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-navy" : "bg-transparent"}`}>
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-navy-foreground font-bold text-lg tracking-widest uppercase">
              ZOID
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm tracking-wide uppercase transition-colors ${pathname === link.path
                  ? "text-white font-semibold"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="text-white/80 hover:text-white transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden bg-navy border-t border-white/10 px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm uppercase tracking-wide text-white/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
      {/* Pink accent line */}
      <div className="h-1 bg-pink-accent" />
    </header>
  );
};

export default Header;

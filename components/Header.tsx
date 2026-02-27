"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Accessibility, MessageSquare } from "lucide-react";
import React, { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = [
    { label: "Systems & Solutions", path: "#" },
    { label: "Who We Are", path: "/who-we-are" },
    { label: "What We Do", path: "#" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-md" : "bg-transparent"}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/zoid-logo.png" alt="Zoid Logo" className="h-8 md:h-10 w-auto object-contain" />
            <span className="text-white font-bold text-3xl tracking-wide uppercase">
              ZOID
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.path}
                className="text-lg text-white hover:text-white/70 transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Section */}
          {/* <div className="hidden md:flex items-center gap-6">
            <button className="text-white hover:text-white/70 transition-colors focus:outline-none" aria-label="Accessibility">
              <Accessibility className="w-5 h-5" />
            </button>

            <div className="flex items-stretch h-10 border border-white/20 rounded-[4px] overflow-hidden bg-[#2a2e45]">
              <button className="flex items-center gap-2 px-4 hover:bg-[#343956] text-white text-[14px] font-medium transition-colors border-r border-white/20">
                AI Chat
                <div className="relative">
                  <MessageSquare className="w-[18px] h-[18px]" />
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                </div>
              </button>
              <button className="px-4 hover:bg-[#343956] text-white transition-colors flex items-center justify-center" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div> */}

          {/* Mobile toggle */}
          <button
            className="xl:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"}`}>
          <nav className="flex flex-col gap-2 bg-[#333333] p-4 rounded-b-lg border border-white/10 mt-2">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.path} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-white hover:text-white/70">
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <div className="flex items-center justify-between py-2">
              <button className="flex items-center gap-2 text-white hover:text-white/70">
                <Accessibility className="w-5 h-5" />
                <span className="text-sm">Accessibility</span>
              </button>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#2a2e45] hover:bg-[#343956] rounded-sm text-white text-sm transition-colors border border-white/20">
                  AI Chat
                  <MessageSquare className="w-4 h-4" />
                </button>
                <button className="p-2 bg-[#2a2e45] hover:bg-[#343956] rounded-sm text-white transition-colors border border-white/20">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

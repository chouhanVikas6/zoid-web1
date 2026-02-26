"use client";

import Link from "next/link";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-black text-white pt-20 pb-12 font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">

        {/* Top Row: Logo, Socials, Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 md:mb-24 gap-8">
          {/* <Link href="/">
            <img
              src="https://www.northropgrumman.com/images/NGC-logo-white-on-clear.webp"
              alt="ZOID Corporation Logo"
              className="w-[220px] h-[55px] object-contain opacity-100"
            />
          </Link> */}
          {/* 
          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://www.facebook.com/NorthropGrumman/" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
              <img src="https://cdn.northropgrumman.com/-/media/facebook.svg" alt="Facebook" className="w-[16px] h-[16px] object-contain brightness-0 invert" />
            </a>
            <a href="https://www.instagram.com/northropgrumman/?hl=en" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
              <img src="https://cdn.northropgrumman.com/-/media/instagram.svg" alt="Instagram" className="w-[16px] h-[16px] object-contain brightness-0 invert" />
            </a>
            <a href="https://www.linkedin.com/company/northrop-grumman-corporation/" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
              <img src="https://cdn.northropgrumman.com/-/media/linkedin.svg" alt="LinkedIn" className="w-[16px] h-[16px] object-contain brightness-0 invert" />
            </a>
            <a href="https://twitter.com/northropgrumman" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
              <img src="https://cdn.northropgrumman.com/-/media/twitter-x.png" alt="Twitter-X" className="w-[16px] h-[16px] object-contain brightness-0 invert" />
            </a>
            <a href="https://www.youtube.com/channel/UCiTTe3mBodoZVGVhQDpEFjg" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
              <img src="https://cdn.northropgrumman.com/-/media/youtube/youtube.svg" alt="YouTube" className="w-[16px] h-[16px] object-contain brightness-0 invert" />
            </a>
            <a href="https://www.threads.net/@northropgrumman" target="_blank" rel="noopener noreferrer" className="w-[34px] h-[34px] rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors">
              <img src="https://cdn.northropgrumman.com/-/media/threads.png" alt="Threads" className="w-[16px] h-[16px] object-contain brightness-0 invert" />
            </a>
          </div> */}

          <button onClick={scrollToTop} aria-label="Back to top" title="Back to top" className="p-2 hover:-translate-y-1 transition-transform">
            <ChevronUp className="w-6 h-6 text-white" strokeWidth={2} />
          </button>
        </div>

        {/* Center Nav Sections */}
        <div className="flex flex-col items-center gap-10">
          {/* Main Links */}
          {/* <ul className="flex flex-wrap justify-center gap-8 md:gap-14">
            <li><Link href="/who-we-are" className="text-[11px] font-medium uppercase tracking-[0.2em] text-white hover:text-white/80 transition-colors">Who We Are</Link></li>
            <li><Link href="/what-we-do" className="text-[11px] font-medium uppercase tracking-[0.2em] text-white hover:text-white/80 transition-colors">What We Do</Link></li>
            <li><Link href="/careers" className="text-[11px] font-medium uppercase tracking-[0.2em] text-white hover:text-white/80 transition-colors">Careers</Link></li>
          </ul> */}

          {/* Secondary Links */}
          {/* <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
            <li><a href="https://thengcstore.com/products" className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/90 hover:text-white transition-colors">Company Store</a></li>
            <li><a href="https://investor.northropgrumman.com/" className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/90 hover:text-white transition-colors">Investors</a></li>
            <li><a href="https://news.northropgrumman.com/" className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/90 hover:text-white transition-colors">News</a></li>
            <li><Link href="/Suppliers" className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/90 hover:text-white transition-colors">Suppliers</Link></li>
          </ul> */}

          {/* Legal Links */}
          {/* <ul className="flex flex-wrap justify-center gap-5 md:gap-8 mt-2 max-w-4xl mx-auto">
            <li><Link href="/who-we-are/privacy-policy" className="text-[11px] font-medium uppercase tracking-[0.2em] md:tracking-[0.15em] hover:text-white/80 transition-colors text-white/90">Privacy Notice</Link></li>
            <li><button className="text-[11px] font-medium uppercase tracking-[0.2em] md:tracking-[0.15em] hover:text-white/80 transition-colors text-white/90">Manage Cookie Preferences</button></li>
            <li><Link href="/who-we-are/terms-of-use" className="text-[11px] font-medium uppercase tracking-[0.2em] md:tracking-[0.15em] hover:text-white/80 transition-colors text-white/90">Terms of Use</Link></li>
            <li><Link href="/corporate-responsibility/reaffirmation-of-equal-employment-opportunity-and-affirmative-action-policies" className="text-[11px] font-medium uppercase tracking-[0.2em] md:tracking-[0.15em] hover:text-white/80 transition-colors text-white/90">EEO</Link></li>
            <li><a href="https://investor.northropgrumman.com/corporate-governance/highlights" className="text-[11px] font-medium uppercase tracking-[0.2em] md:tracking-[0.15em] hover:text-white/80 transition-colors text-white/90">Corporate Governance</a></li>
            <li><Link href="/who-we-are/e-verify" className="text-[11px] font-medium uppercase tracking-[0.2em] md:tracking-[0.15em] hover:text-white/80 transition-colors text-white/90">E-Verify</Link></li>
            <li><Link href="/who-we-are/contact-us-northrop-grumman" className="text-[11px] font-medium uppercase tracking-[0.2em] md:tracking-[0.15em] hover:text-white/80 transition-colors text-white/90">Contact Us</Link></li>
          </ul> */}

          {/* Copyright */}
          <div className="mt-8 text-center px-4">
            <p className="text-[10px] md:text-[11px] tracking-wide text-white/80 font-medium">
              © {new Date().getFullYear()} ZOID. The ZOID name and logos are registered trademarks of ZOID.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

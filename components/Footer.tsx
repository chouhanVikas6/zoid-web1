"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-24 pb-16 px-6 md:px-12 font-sans border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-y-32 gap-x-8">

          {/* Top Left: Logo */}
          <div className="md:col-span-5 lg:col-span-5">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <h2 className="text-5xl md:text-7xl font-serif font-medium tracking-widest mb-1">ZOID</h2>
              <p className="text-lg md:text-[22px] font-serif tracking-[0.15em] text-white/90 uppercase mb-8">Technologies</p>
            </Link>

            <div className="text-[12px] md:text-[13px] font-sans tracking-[0.15em] text-white/70 leading-[2] uppercase max-w-[420px]">
              <p>ADDRESS :1ST FLOOR, D-167, BLOCK D,</p>
              <p>VIVEK VIHAR PHASE 1, BLOCK D, VIVEK</p>
              <p>VIHAR PHASE 1, NEW DELHI, SHAHDARA,</p>
              <p>DELHI, 110095</p>
            </div>

            <div className="flex flex-col gap-1 pt-12 md:pt-24">
              <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-[0.05em] mb-4">
                COPYRIGHT © 2026 ZOID TECHNOLOGIES
              </span>
            </div>
          </div>

          {/* Top Right: Link Categories */}
          <div className="md:col-span-7 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-4 md:pr-12">

            {/* Column 1: COMPANY */}
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-bold text-white font-sans uppercase tracking-[0.05em] mb-1">
                COMPANY
              </span>
              <Link href="#" className="text-[14px] font-sans font-normal text-white/70 hover:text-white transition-colors tracking-wide">Mission</Link>
              <Link href="#" className="text-[14px] font-sans font-normal text-white/70 hover:text-white transition-colors tracking-wide">NewsRoom</Link>
              <Link href="#" className="text-[14px] font-sans font-normal text-white/70 hover:text-white transition-colors tracking-wide">Leadership</Link>
              <Link href="#" className="text-[14px] font-sans font-normal text-white/70 hover:text-white transition-colors tracking-wide">Gear Store</Link>

              <div className="pt-2 flex flex-col gap-4">
                <Link href="#" className="text-[14px] font-sans font-normal text-white/70 hover:text-white transition-colors tracking-wide">Privacy Policy</Link>
                <Link href="#" className="text-[14px] font-sans font-normal text-white/70 hover:text-white transition-colors tracking-wide">Terms of Use</Link>
              </div>
            </div>

            {/* Column 2: WORK WITH US */}
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-bold text-white font-sans uppercase tracking-[0.05em] mb-1">
                WORK WITH US
              </span>
              <Link href="/careers" className="text-[14px] font-sans font-normal text-white/70 hover:text-white transition-colors tracking-wide">Careers</Link>
              <Link href="#" className="text-[14px] font-sans font-normal text-white/70 hover:text-white transition-colors tracking-wide">The Forge Program</Link>
              <Link href="#" className="text-[14px] font-sans font-normal text-white/70 hover:text-white transition-colors tracking-wide">SkillBridge</Link>
              <Link href="#" className="text-[14px] font-sans font-normal text-white/70 hover:text-white transition-colors tracking-wide">Open Roles</Link>
            </div>

            {/* Column 3: SOCIAL */}
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-bold text-white font-sans uppercase tracking-[0.05em] mb-1">
                SOCIAL & CONTACT
              </span>
              <a href="#" className="text-[14px] font-sans font-normal text-white/70 hover:text-white transition-colors tracking-wide">LinkedIn</a>

              <div className="flex flex-col gap-1 mt-6 font-sans">
                <a href="tel:+919871617142" className="text-[14px] font-normal text-white/70 hover:text-white transition-colors tracking-wide">
                  +91 9871617142
                </a>
                <a href="mailto:sales@zoidtech.co.in" className="text-[14px] font-normal text-white/70 hover:text-white transition-colors tracking-wide">
                  sales@zoidtech.co.in
                </a>
              </div>
            </div>

          </div>



        </div>

      </div>
    </footer>
  );
};

export default Footer;

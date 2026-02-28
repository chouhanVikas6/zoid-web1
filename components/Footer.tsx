"use client";

import Link from "next/link";
import Image from "next/image";
import { LuMail } from "react-icons/lu";
import { LuSmartphone } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#050505] text-white pt-16 pb-8 px-6 md:px-12 xl:px-24 font-sans overflow-hidden border-t border-white/10 min-h-[600px] flex flex-col justify-between">
      {/* Background SVG Overlay */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none min-w-[1400px]">
        <img
          src="/jetsketch.svg"
          alt="Jet Sketch Background"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full h-full flex flex-col justify-between flex-grow">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 mb-20 md:mb-32 w-full pt-8 lg:pt-12">
          {/* Column 1 */}
          <div className="flex flex-col h-full">
            <div className="mb-12 md:mb-24">
              <h4 className="text-white font-medium text-xl mb-3 md:mb-5 tracking-wide">Registered Office</h4>
              <div className="text-white/80 text-xl md:text-xs leading-relaxed max-w-[240px]">
                D-167, Block-D, Vivek Vihar, Phase-1,<br />
                East Delhi, Delhi, 110095, India
              </div>
            </div>
            <div className="bottom-[10px] md:bottom-[-10px] left-[-15px] md:left-[-45px] mb-12 lg:mb-16 absolute">
              <img src="/Zoid-logo-footer.svg" alt="Zoid Technologies" className="h-[6rem] sm:h-[8rem] md:h-[10rem] lg:h-[16rem] w-auto" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col h-full">
            <div className="mb-12 md:mb-0">
              <h4 className="text-white font-medium text-xl mb-3 md:mb-5 tracking-wide">Corporate Office</h4>
              <div className="text-white/80 text-xl md:text-xs leading-relaxed max-w-[240px]">
                First Floor, B-13A, Block-B, Sector 132,<br />
                Noida, UP-201304, India
              </div>
            </div>
            <div className="flex flex-col gap-6 md:mt-24">
              <Link href="/" className="text-white/70 text-xl md:text-xs hover:text-white transition-colors">Home</Link>
              <Link href="/who-we-are" className="text-white/70 text-xl md:text-xs hover:text-white transition-colors">Who we are</Link>
              <Link href="/who-we-are" className="text-white/70 text-xl md:text-xs hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col h-full">
            <div className="mb-12 md:mb-0">
              <h4 className="text-white font-medium text-xl mb-3 md:mb-5 tracking-wide">Contact</h4>
              <div className="flex items-center gap-2 text-white/80 text-xl md:text-xs leading-relaxed">
                <LuSmartphone /> <a href="tel:+919871617142">+91 9871617142</a>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-xl md:text-xs leading-relaxed">
                <LuMail /> <a href="mailto:sales@zoidtech.co.in">sales@zoidtech.co.in</a>
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-6 md:mt-24">
              <Link href="/who-we-are" className="text-white/70 text-xl md:text-xs hover:text-white transition-colors">Systems</Link>
              <Link href="/who-we-are" className="text-white/70 text-xl md:text-xs hover:text-white transition-colors">What we do</Link>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col h-full ">
            <div className="mb-12 md:mb-0">
              <h4 className="text-white font-medium text-xl mb-3 md:mb-5 tracking-wide">Follow Us</h4>
              <Link href="https://www.linkedin.com/company/zoid/" className="flex items-center gap-2 text-white/80 text-xl md:text-xs hover:text-white transition-colors">
                <LuLinkedin /> LinkedIn
              </Link>
            </div>
            <div className="flex flex-col gap-6 mt-6 md:mt-24">
              <Link href="/who-we-are" className="text-white/70 text-xl md:text-xs hover:text-white transition-colors">Solutions</Link>
              <Link href="https://www.linkedin.com/company/zoid/" className="text-white/70 text-xl md:text-xs hover:text-white transition-colors">Careers</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Logo and Copyright */}
        <div className="flex flex-col pb-4 mt-auto xl:mt-32 relative">


          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 w-full pt-6">
            <div className="text-[9px] md:text-[10px] text-white/70 tracking-[0.05em] font-sans">
              ZOID TECHNOLOGIES PRIVATE LIMITED | 2026 All Rights Reserved
            </div>

            <div className="flex gap-8 text-[9px] md:text-[10px] text-white/70 tracking-[0.05em] font-sans">
              <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

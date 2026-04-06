import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Zoid Technologies",
  description: "Terms and conditions for using the Zoid Technologies website and services.",
};

const TermsOfUse = () => {
  const lastUpdated = "April 06, 2026";

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-12 font-sans selection:bg-cyan-500/30 scroll-smooth">
      {/* Decorative background element */}
      <div className="fixed top-0 right-0 w-full h-full pointer-events-none opacity-[0.07] z-0">
        <img src="/jetsketch.svg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="text-sm flex items-center space-x-2 text-white/40 mb-12">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <span className="text-white/20">/</span>
          <span className="text-white font-medium">Terms of Use</span>
        </nav>

        {/* Header */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
            Terms of <span className="text-cyan-400">Use</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-cyan-400"></div>
            <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </header>

        {/* Main content sections */}
        <div className="space-y-16 text-white/70 leading-relaxed md:text-lg font-light">

          {/* Acceptance Box */}
          <section className="bg-[#0A0A0A] p-8 md:p-10 border border-white/5 rounded-2xl relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-lg md:text-xl font-bold text-white mb-4 uppercase tracking-wide">
              Legal Agreement
            </p>
            <p className="text-white/80 leading-relaxed">
              By accessing, browsing, or using the Zoid Technologies website (the "Website"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and to comply with all applicable laws and regulations. If you do not agree to these terms, please do not use this Website.
            </p>
          </section>

          {/* Section 01 */}
          <section id="use-of-website">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Use of Website</h2>
            </div>
            <div className="space-y-4">
              <p>
                Zoid Technologies Private Limited ("Zoid") grants you a non-exclusive, non-transferable, limited permission to access and display the Web pages within this site as a customer or potential customer of Zoid provided you comply with these Terms of Use.
              </p>
              <p>
                The use authorized under this agreement is non-commercial in nature. All other use of this site is prohibited. You may not use any "page-scrape", "robot", "spider" or other automatic device, program, algorithm or methodology to access, acquire, copy or monitor any portion of the Website.
              </p>
            </div>
          </section>

          {/* Section 02 */}
          <section id="intellectual-property">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Intellectual Property</h2>
            </div>
            <div className="space-y-4">
              <p>
                All content on this Website, including but not limited to designs, text, graphics, pictures, video, information, applications, software, music, sound and other files, and their selection and arrangement, are the proprietary property of Zoid or its licensors with all rights reserved.
              </p>
              <p>
                <strong className="text-white font-semibold">Trademarks:</strong> "Zoid Technologies", the Zoid logo, "NavRakshak", and all other product or service names or slogans displayed on the Website are registered or common law trademarks of Zoid Technologies Private Limited and may not be copied, imitated or used, in whole or in part, without the prior written permission of Zoid.
              </p>
            </div>
          </section>

          {/* Section 03 */}
          <section id="confidential-information">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">03</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Confidential Information</h2>
            </div>
            <p>
              Zoid does not want to receive confidential or proprietary information from you through our Website. Please note that any information or material sent to Zoid will be deemed NOT to be confidential. By sending Zoid any information or material, you grant Zoid an unrestricted, irrevocable license to copy, reproduce, publish, upload, post, transmit, distribute, publicly display, perform, modify, create derivative works from, and otherwise freely use, those materials or information.
            </p>
          </section>

          {/* Section 04 */}
          <section id="disclaimer">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">04</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Disclaimer of Warranty</h2>
            </div>
            <div className="bg-[#111111] p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-3xl rounded-full"></div>
              <p className="italic text-white relative z-10 md:text-xl">
                "Use of this site is at your sole risk. All materials, information, products, software, programs, and services are provided 'as is,' with no warranties or guarantees whatsoever."
              </p>
            </div>
            <p className="mt-6">
              Zoid expressly disclaims to the fullest extent permitted by law all express, implied, statutory, and other warranties, guarantees, or representations, including, without limitation, the warranties of merchantability, fitness for a particular purpose, and non-infringement of proprietary and intellectual property rights.
            </p>
          </section>

          {/* Section 05 */}
          <section id="limitation-liability">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">05</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Limitation of Liability</h2>
            </div>
            <p>
              To the fullest extent permitted by applicable law, in no event will Zoid be liable to any party for any direct, indirect, incidental, special, exemplary or consequential damages of any type whatsoever related to or arising from this website or any use of this website, or of any site or resource linked to, referenced, or accessed through this website.
            </p>
          </section>

          {/* Section 06 */}
          <section id="governing-law">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">06</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Governing Law</h2>
            </div>
            <p>
              These Terms of Use, and any dispute that may arise between you and Zoid, shall be governed by and construed in accordance with the laws of India, without regard to conflict of laws principles. You agree to the exclusive jurisdiction of the courts located in <span className="text-cyan-400">New Delhi, India</span> for the resolution of any disputes.
            </p>
          </section>


        </div>


      </div>
    </div>
  );
};

export default TermsOfUse;

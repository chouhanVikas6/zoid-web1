import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zoid Technologies",
  description: "Privacy policy and data protection practices of Zoid Technologies.",
};

const PrivacyPolicy = () => {
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
          <span className="text-white font-medium">Privacy Policy</span>
        </nav>

        {/* Header */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
            Privacy <span className="text-cyan-400">Policy</span>
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

          {/* Introduction Box */}
          <section className="bg-[#0A0A0A] p-8 md:p-10 border border-white/5 rounded-2xl relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-lg md:text-xl font-bold text-white mb-4 uppercase tracking-wide">
              Our Commitment
            </p>
            <p className="text-white/80 leading-relaxed">
              At Zoid Technologies, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website <span className="text-cyan-400">zoidtech.co.in</span> and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          {/* Section 01 */}
          <section id="information-collection">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">01</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Information We Collect</h2>
            </div>
            <div className="space-y-4">
              <p>
                We collect several types of information from and about users of our Website, including:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="">Personal Information:</strong> Includes name, postal address, e-mail address, and telephone number when you fill out forms on our Website.</li>
                <li><strong className="">Usage Data:</strong> Information about your internet connection, the equipment you use to access our Website, and usage details.</li>
                <li><strong className="">Analytics:</strong> We use tracking technologies like Google Analytics to collect information about how you interact with our site to improve user experience.</li>
              </ul>
            </div>
          </section>

          {/* Section 02 */}
          <section id="how-we-use">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">02</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">How We Use Your Information</h2>
            </div>
            <div className="space-y-4">
              <p>
                We use information that we collect about you or that you provide to us:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To notify you about changes to our Website or any products or services we offer.</li>
                <li>To improve our Website and deliver a better and more personalized service.</li>
              </ul>
            </div>
          </section>

          {/* Section 03 */}
          <section id="disclosure">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">03</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Disclosure of Information</h2>
            </div>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-3">
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
              <li>To comply with any court order, law, or legal process.</li>
            </ul>
          </section>

          {/* Section 04 */}
          <section id="data-security">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">04</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Data Security</h2>
            </div>
            <div className="bg-[#111111] p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-3xl rounded-full"></div>
              <p className="text-white relative z-10">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.
              </p>
            </div>
            <p className="mt-6">
              Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
            </p>
          </section>

          {/* Section 05 */}
          <section id="cookies">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">05</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Cookies & Tracking</h2>
            </div>
            <p>
              Our Website uses "cookies" to enhance your experience. A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website.
            </p>
          </section>

          {/* Section 06 */}
          <section id="your-rights">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-cyan-400 font-mono text-sm md:text-base font-bold bg-cyan-400/10 px-3 py-1 rounded">06</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">Your Rights</h2>
            </div>
            <p>
              You have the right to access, correct, or delete your personal information that we hold. You can also object to the processing of your data in certain circumstances. To exercise these rights, please contact us using the information provided below.
            </p>
          </section>



        </div>


      </div>
    </div>
  );
};

export default PrivacyPolicy;

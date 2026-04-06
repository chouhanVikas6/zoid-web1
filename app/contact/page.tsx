"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LuMail, LuSmartphone, LuLinkedin, LuFacebook, LuTwitter, LuNavigation } from "react-icons/lu";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("https://api.aims3d.in/inquiries/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        alert("Thank you for your message. We will get back to you soon!");
      } else {
        setStatus("error");
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      alert("Failed to send message. Please check your connection and try again.");
    } finally {
      setStatus("idle");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-12 font-sans overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img src="/jetsketch.svg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="text-sm flex items-center space-x-2 text-white/60 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-white font-medium">Contact Us</span>
        </nav>

        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-12 tracking-tight uppercase">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] rounded-2xl p-8 md:p-10 border border-white/5 shadow-2xl">
              <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider">Write to us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full bg-black border border-white/10 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter address"
                    className="w-full bg-black border border-white/10 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Contact</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="w-full bg-black border border-white/10 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    rows={5}
                    className="w-full bg-black border border-white/10 rounded-lg py-4 px-4 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full font-bold py-4 rounded-lg transition-all transform active:scale-[0.98] ${
                    status === "loading" 
                      ? "bg-gray-400 cursor-not-allowed" 
                      : "bg-white text-black hover:bg-cyan-400 hover:text-white hover:-translate-y-1"
                  }`}
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Box */}
            <div className="bg-[#111111] rounded-2xl p-8 border border-white/5 flex gap-6 items-start">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold uppercase tracking-wider">Address</h3>
                  <LuNavigation className="text-cyan-400 w-6 h-6" />
                </div>
                <div className="text-gray-400 leading-relaxed text-sm">
                  First Floor, B-13A, Block-B, Sector 132,<br />
                  Noida, UP-201304, India
                </div>
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-[#111111] rounded-2xl p-8 border border-white/5 flex gap-6 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    <LuMail className="w-5 h-5 text-cyan-400" />
                    <a href="mailto:sales@zoidtech.co.in">sales@zoidtech.co.in</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    <LuSmartphone className="w-5 h-5 text-cyan-400" />
                    <a href="tel:+918800712060">+91 8800712060</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    <LuSmartphone className="w-5 h-5 text-cyan-400" />
                    <a href="tel:+919871617142">+91 9871617142</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <Link href="#" className="w-12 h-12 bg-[#111111] rounded-lg border border-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-white transition-all">
                <LuTwitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="w-12 h-12 bg-[#111111] rounded-lg border border-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-white transition-all">
                <LuFacebook className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/company/zoid/" className="w-12 h-12 bg-[#111111] rounded-lg border border-white/5 flex items-center justify-center hover:bg-cyan-400 hover:text-white transition-all">
                <LuLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

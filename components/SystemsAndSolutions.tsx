import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const systemsData = [
    {
        name: "Missile Decoys",
        desc: "Reusable-off board missile decoy",
        image: "/missile-decoy.png",
        url: "/assets/romd.pdf"
    },
    {
        name: "Anti-Jam Anti-Spoof CRPA GNSS",
        desc: "Anti-Jam Anti-Spoof CRPA GNSS",
        image: "/crpa.svg",
        url: "/assets/crpa.pdf"
    },
    {
        name: "Aerial Intelligance Mapping Suit",
        desc: "From Sky to Surface — Precision Mapping Made Simple",
        image: "/aims.webp",
        url: "https://aims3d.in"
    },
    {
        name: "FOD detection system",
        desc: "AI based Autonomous FOD Detection",
        image: "/fod.jpeg",
        url: "#"
    },
    {
        name: "Aircraft Tracking and Monitoring System",
        desc: "Aircraft Tracking and Monitoring System",
        image: "https://www.rafael.co.il/wp-content/uploads/2025/06/IRON_BEAM_450.png",
        url: "#"
    },
    {
        name: "UAV Software Solution",
        desc: "UAV Software Solution",
        image: "/drone.svg",
        url: "#"
    }
];

export default function SystemsAndSolutions() {
    return (
        <section className="bg-black text-white py-24 px-4 md:px-8 w-full border-t border-white/10 relative overflow-hidden">
            {/* Background ambient light */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Info Block */}
                    <div className="flex flex-col justify-center lg:pr-8 mb-12 lg:mb-0 lg:col-span-1 lg:sticky lg:top-32 self-start">
                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-[0.1em] uppercase mb-6 leading-[1.1]">
                            Systems &amp; Solutions
                        </h2>
                        <p className="text-lg text-white/70 font-medium mb-10 max-w-sm">
                            Combat-proven, open architecture-based, and interoperable
                        </p>
                        <Link
                            href="#"
                            className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-[2px] px-8 py-4 transition-all w-fit"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">Discover All</span>
                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Cards Grid */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {systemsData.map((system, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 rounded-sm flex flex-col h-full"
                            >
                                {system.url !== "#" && <Link href={system.url} target='blank' className="absolute inset-0 z-20" aria-label={system.name} />}

                                <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded-sm">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">System</span>
                                </div>

                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border-b border-white/10">
                                    <img
                                        src={system.image}
                                        alt={system.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                        loading="lazy"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-[0.05em] mb-3 group-hover:text-white text-gray-200 transition-colors leading-tight">
                                            {system.name}
                                        </h3>
                                    </div>
                                    <p className="text-sm md:text-base text-white/50 leading-relaxed font-medium mt-auto group-hover:text-white/70 transition-colors">
                                        {system.desc}
                                    </p>
                                </div>

                                {/* Decorative corner */}
                                {/* <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-white/20 transition-colors m-4" /> */}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

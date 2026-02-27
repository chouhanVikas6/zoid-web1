"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";

export default function ArticleCarousel() {
    const [activeTab, setActiveTab] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const slides = [
        {
            id: 1,
            title: "Missile Decoys",
            category: "Missile Defense",
            videoSrc: "/assets/Missile-Decoys.webm",
            bgImg: "/missile-decoys.png",
            description: "We design advanced active missile decoy systems to protect naval and aerial assets from modern missile threats. Our decoys rapidly deploy away from the host platform, generates a false RF target, and seduces incoming missiles away from the ship or aircraft. Designed as the final soft-kill layer of defence, the system greatly enhances survivability. Enabled by our expertise in RF engineering, Digital Signal Processing, and Electronic Warfare, the solution delivers fast reaction, broadband coverage, and flexible deployment across multiple platforms.",
        },
        {
            id: 2,
            title: "AI powered Air-Field Monitoring",
            category: "AI and Autonomous Systems",
            videoSrc: "/assets/Air-Field-Monitoring.webm",
            bgImg: "/air-field-monitoring.png",
            description: "We deploy advanced airfield security and aircraft monitoring systems purpose-built for defence applications. Our custom solutions include FOD detection systems capable of identifying objects as small as 3 mm, and autonomous aircraft monitoring systems that enable real-time coordination and post-mission or crash analysis. Engineered for high reliability and operational continuity, our systems enhance airbase safety, situational awareness, and command-level decision support in demanding aviation environments.",
        },
        {
            id: 3,
            title: "Unmanned Autonomous Systems",
            category: "Aircraft",
            videoSrc: "/assets/Unmanned-Autonomous-Systems.webm",
            bgImg: "/Unmanned-Autonomous-Systems.png",
            description: "We develop advanced unmanned autonomous solutions for defence, spanning multi-rotor UAVs, fixed-wing platforms, and transonic ballistic missile systems, each custom-designed for mission-specific requirements. Our expertise covers swarming autonomy, edge computing, AI-enabled aerial perception, kinetic strike capabilities, and GNSS-denied navigation and control. From low-level firmware customization to high-level multi-platform mission autonomy, we build AI-driven software that enables coordinated operations in complex and contested environments. Our solutions are engineered to deliver success and mission excellence in the most challenging environments.",
        },
        {
            id: 4,
            title: "GNSS Denied Navigation",
            category: "Mission Solutions",
            videoSrc: "/assets/GNSS.webm",
            bgImg: "/GNSS.png",
            description: "We develop Stable Positioning, Navigation & Timing systems for UAVs, Guided Munitions, Manned Aircrafts, & Armored Land Vehicles operating in contested GNSS Electronic Warfare environments. Our solutions are engineered to maintain stable navigation and control under active jamming and spoofing conditions. By integrating anti-jamming Controlled Reception Pattern Antennas (CRPA) with AI-powered Visual–Inertial Odometry (VIO), we deliver robust navigation performance. The architecture enables sustained mission continuity and precise guidance across modern operational corridors.",
        },
        // {
        //     id: 5,
        //     title: "Electronic Warfare",
        //     category: "Mission Solutions",
        //     videoSrc: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/mission-solutions/fast-tracking-concept-combat-1920x840_V4.mp4",
        //     bgImg: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/mission-solutions/fast-tracking-concept-combat-hero-1920x840.jpg",
        //     description: "We develop Stable Positioning, Navigation & Timing systems for UAVs, Guided Munitions, Manned Aircrafts, & Armored Land Vehicles operating in contested GNSS Electronic Warfare environments. Our solutions are engineered to maintain stable navigation and control under active jamming and spoofing conditions. By integrating anti-jamming Controlled Reception Pattern Antennas (CRPA) with AI-powered Visual–Inertial Odometry (VIO), we deliver robust navigation performance. The architecture enables sustained mission continuity and precise guidance across modern operational corridors.",
        // },
    ];

    // Handle Tab Click
    const handleTabClick = (id: number) => {
        setActiveTab(id);
        const index = slides.findIndex(s => s.id === id);
        if (containerRef.current && cardRefs.current[index]) {
            const card = cardRefs.current[index];
            const containerLeft = containerRef.current.getBoundingClientRect().left;
            const cardLeft = card!.getBoundingClientRect().left;
            const scrollPosition = containerRef.current.scrollLeft + (cardLeft - containerLeft);

            containerRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth"
            });
        }
    };

    // Sync scroll position back to active tab (optional, for manual scrolling)
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const containerLeft = containerRef.current.getBoundingClientRect().left;

            let closestId = activeTab;
            let minDistance = Infinity;

            cardRefs.current.forEach((card, index) => {
                if (!card) return;
                const cardLeft = card.getBoundingClientRect().left;
                const distance = Math.abs(cardLeft - containerLeft);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestId = slides[index].id;
                }
            });

            if (closestId !== activeTab) {
                setActiveTab(closestId);
            }
        };

        const container = containerRef.current;
        if (container) {
            // Debounce scroll event to avoid rapid state updates
            let timeoutId: NodeJS.Timeout;
            const throttledScroll = () => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(handleScroll, 100);
            };
            container.addEventListener('scroll', throttledScroll);
            return () => container.removeEventListener('scroll', throttledScroll);
        }
    }, [activeTab, slides]);

    return (
        <section className="w-full bg-white text-black pb-20 pt-8 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">

                {/* Tabs */}
                <div className="flex overflow-x-auto scrollbar-hide mb-8 gap-2 md:gap-3">
                    {slides.map((slide) => (
                        <button
                            key={slide.id}
                            onClick={() => handleTabClick(slide.id)}
                            className={`py-3.5 px-6 md:px-12 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] whitespace-nowrap text-center transition-all border rounded w-fit ${activeTab === slide.id ? 'bg-black text-white border-black' : 'bg-white text-black border-black/40 hover:border-black hover:bg-black/5 hover:text-black'}`}
                        >
                            {slide.title}
                        </button>
                    ))}
                </div>

                {/* Carousel Content */}
                {/* We use a horizontal scrolling container. Cards are fixed width. */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                  .hide-scroll::-webkit-scrollbar {
                    display: none;
                  }
                  .hide-scroll {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                  }
                `}} />
                <div
                    ref={containerRef}
                    className="flex gap-4 w-[100vw] xl:w-full h-[400px] md:h-[600px] overflow-x-auto snap-x snap-mandatory hide-scroll scrollbar-hide -ml-4 md:-ml-8 px-4 md:px-8"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {slides.map((slide, idx) => {
                        const isActive = activeTab === slide.id;

                        return (
                            <div
                                key={slide.id}
                                ref={(el) => { cardRefs.current[idx] = el; }}
                                // Cards maintain original size, matching large width seen in screenshots
                                className={`snap-start shrink-0 w-[90vw] md:w-[85vw] lg:w-[1300px] h-full relative group overflow-hidden rounded-xl bg-zinc-900 border border-zinc-500 cursor-pointer transition-opacity duration-300 ${!isActive ? 'opacity-80 hover:opacity-100' : 'opacity-90 opacity-100'}`}
                                onClick={() => handleTabClick(slide.id)}
                            >
                                {isActive ? (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                                        src={slide.videoSrc}
                                    />
                                ) : (
                                    <img src={slide.bgImg} alt={slide.title} className="absolute inset-0 w-full h-full object-cover opacity-50 block sm:hidden md:block" /> // Using fallback image for inactive
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-16 flex flex-col justify-end w-full whitespace-normal z-20">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-shadow-lg font-bold text-white tracking-[0.3em] uppercase leading-tight mb-4 md:mb-6 transition-transform duration-500">
                                        {slide.title}
                                    </h3>

                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out w-full">
                                        <div className="overflow-hidden">
                                            <p className="text-[10px] sm:text-sm md:text-[14px] text-white/90 text-shadow-lg font-medium leading-[1.8] md:leading-[2] max-w-[800px] pb-8 md:pb-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                                                {slide.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                        <button className="inline-flex items-center justify-between gap-6 bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-md px-6 py-2 md:py-3 transition-colors rounded w-fit group-hover:bg-white/30 text-left">
                                            <span className="text-[9px] sm:text-[10px] font-bold text-white tracking-[0.2em] uppercase">Find Out More</span>
                                            <ChevronRight className="w-4 h-4 text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

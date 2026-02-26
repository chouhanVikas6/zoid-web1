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
            videoSrc: "https://cdn.northropgrumman.com/-/media/brand-team/new-homepage/fpa-thumbnails/boosting-production-fpa.mp4",
            bgImg: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/missile-defense/missile-defense-hero-1920x840.jpg",
        },
        {
            id: 2,
            title: "AI Airfield Safety",
            category: "Mission Solutions",
            videoSrc: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/microelectronics/ME_BOP_FPA_WEB_HDR_16_7_FINAL_251028.mp4",
            bgImg: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/microelectronics/microelectronics-hero-1920x840.jpg",
        },
        {
            id: 3,
            title: "Unmanned Autonomous Systems",
            category: "Aircraft",
            videoSrc: "https://cdn.northropgrumman.com/-/media/brand-team/new-homepage/fpa-thumbnails/talon-fpa.mp4",
            bgImg: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/air/air/project-talon-hero-1920x840.jpg",
        },
        {
            id: 4,
            title: "GNSS-Denied Navigation",
            category: "Mission Solutions",
            videoSrc: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/mission-solutions/fast-tracking-concept-combat-1920x840_V4.mp4",
            bgImg: "https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/mission-solutions/fast-tracking-concept-combat-hero-1920x840.jpg",
        },
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
                            className={`py-3.5 px-6 md:px-12 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] whitespace-nowrap text-center transition-all border rounded w-fit ${activeTab === slide.id ? 'bg-[#707070] text-white border-[#707070]' : 'bg-white text-black border-black/40 hover:border-black'}`}
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
                                className={`snap-start shrink-0 w-[90vw] md:w-[85vw] lg:w-[1300px] h-full relative group overflow-hidden rounded-xl bg-zinc-900 border border-zinc-500 cursor-pointer transition-opacity duration-300 ${!isActive ? 'opacity-80 hover:opacity-100' : 'opacity-100'}`}
                                onClick={() => handleTabClick(slide.id)}
                            >
                                {isActive ? (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                                        src={slide.videoSrc}
                                    />
                                ) : (
                                    <img src={slide.bgImg} alt={slide.title} className="absolute inset-0 w-full h-full object-cover opacity-50 block sm:hidden md:block" /> // Using fallback image for inactive
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6 md:p-10 flex flex-col justify-end w-full whitespace-nowrap">
                                    <p className="text-[10px] md:text-xs font-medium text-white/70 uppercase tracking-[0.3em] mb-3">{slide.category}</p>

                                    <h3 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white tracking-[0.15em] uppercase whitespace-normal leading-tight max-w-xl">
                                        {slide.title}
                                    </h3>

                                    <div className={`mt-6 md:mt-10 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                        <button className="inline-flex items-center justify-between min-w-[200px] md:min-w-[250px] bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm px-6 py-4 transition-colors rounded-sm group-hover:bg-white/30 text-left">
                                            <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-[0.2em]">{slide.title}</span>
                                            <ChevronRight className="w-5 h-5 text-white" />
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

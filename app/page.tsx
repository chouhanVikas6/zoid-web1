import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ArticleCarousel from "../components/ArticleCarousel";
import TextFlipper from "../components/TextFlipper";
import TypewriterText from "../components/TypewriterText";
import SystemsAndSolutions from "../components/SystemsAndSolutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Zoid Technologies",
    default: "Zoid Technologies | Turning Deep-Tech Into Defense Power",
  },
  description: "Zoid Technologies designs, develops, and deploys deep-tech solutions for military applications, specializing in Electronic Warfare, Missile Decoys, and AI-enabled software for unmanned systems.",
  keywords: [
    "Zoid Technologies",
    "Defense Tech",
    "Deep Tech",
    "Electronic Warfare",
    "Missile Decoys",
    "AI Systems",
    "Unmanned Systems",
    "GNSS Denied Navigation",
    "CRPA",
    "ROMD",
    "Aerial Intelligence maping suit",
    "EW"
  ],
  icons: {
    icon: "/zoid-logo-blue.png",
  },
};

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Video Section */}
      <section className="relative h-screen min-h-[600px] w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
            src="/assets/heronew.mp4"
          // src="https://cdn.northropgrumman.com/-/media/brand-team/WSY/WSY_STATUS_QUO_HOMEPAGE_REVD_02.mp4?rev=5b4d7e95e89f48fa969dfc5bc53ccd21"
          />
        </div>

        {/* Main Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full pt-16">
          <Link href="/who-we-are" aria-label="Learn more about Zoid Technologies" className="group flex flex-col items-center hover:opacity-90 transition-opacity">
            <h1
              className="text-[3rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[4rem] font-bold text-white uppercase text-center leading-[1.1] md:leading-[1.2] pl-[0.2em] tracking-[0.2em] sm:tracking-[0.4em] min-h-[3.3em] md:min-h-[3.6em] flex flex-col justify-center"
            >
              <span className="sr-only">Turning Deep-Tech Into Defense Power</span>
              <div aria-hidden="true">
                <TypewriterText text={"TURNING DEEP-TECH\nINTO\nDEFENSE POWER"} delay={100} />
              </div>
            </h1>
            <div className="mt-8 md:mt-12 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-[2px] px-6 py-3 flex items-center justify-between gap-8 transition-all w-fit pointer-events-auto">
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white">Find Out More</span>
              <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-auto" aria-hidden="true">
                <path d="M8.99388 11.6127L0.48224 20.1243L3.24954 22.8916L11.7612 14.38L14.3801 11.761L11.6129 8.99371L2.61914 0L0.00017293 2.61897L8.99388 11.6127Z" fill="white"></path>
              </svg>
            </div>
          </Link>
        </div>

        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
      </section>

      {/* New Deep-Tech Solutions Section */}
      <section className="bg-black text-white pt-16 md:pt-24 pb-20 md:pb-24 px-4 w-full z-20 relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[2.6rem] xl:text-[3rem] xl:whitespace-nowrap font-bold tracking-[0.05em] uppercase mb-10 md:mb-14 text-white">
            We Design, Develop & Deploy Deep-Tech Solutions.
          </h2>

          <div className="text-sm md:text-base lg:text-[1.1rem] leading-[2] md:leading-[2.2] text-white/80 font-medium mb-16 md:mb-24 max-w-[1300px]">
            We Design, Develop, & Deploy Deep-Tech solutions for military applications; with domain expertise in Electronic Warfare and AI-Enabled Software Solutions for unmanned systems.  We have a practical understanding of the technologies used in modern conflicts and hence, our solutions meet not only the end-user’s SQRs but also their operational needs. By integrating best-in-class technologies from our global network into our sovereign systems architecture, we solve complex battlefield problems and deliver solutions that operators can trust.
          </div>

          <div className="w-full flex justify-center">
            <Link href="/who-we-are" aria-label="Find out more about Zoid Technologies domains" className="group flex flex-col items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-gray-300 transition-colors">
              Find Out More
              <div className="flex flex-col space-y-2 mt-1 relative overflow-hidden h-8 w-8 group-hover:scale-125 transition-transform duration-300">
                <ChevronRight className="w-8 h-8 text-white rotate-90 absolute top-0 animate-[bounce_1.5s_infinite]" />
                <ChevronRight className="w-8 h-8 text-white/50 rotate-90 absolute top-2 animate-[bounce_1.5s_infinite_200ms]" />
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* Statement Block */}
      <section className="bg-white text-black pt-20 pb-12 shadow-sm border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-[0.2em] uppercase text-black mb-6">
            Discover Our Domains.
          </h2>

          <div className="w-full border-t border-black/30" />
        </div>
      </section>

      {/* Article Carousel */}
      <ArticleCarousel />


      {/* Systems & Solutions Section */}
      <SystemsAndSolutions />

      {/* Second Video Hero (Careers) */}
      <section className="relative h-screen min-h-[600px] w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/soldierswithflag.png"
            className="w-full h-full object-cover opacity-50"
            src="/assets/soldierswithflag.webm"
          />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-end h-full pb-24 md:pb-32">
          <Link href="https://www.linkedin.com/company/zoid/" aria-label="Zoid Technologies Careers on LinkedIn" className="group flex flex-col items-center hover:opacity-90 transition-opacity">
            <div className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-white text-center leading-[1.1] mb-1 md:mb-2 tracking-tight drop-shadow-lg">
              BUILD FOR
            </div>
            <div className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-white text-center leading-[1.1] tracking-tight drop-shadow-lg h-[1.2em]">
              <span className="sr-only">THE NATION. YOUR PRIDE. THE FIGHT. ZOID.</span>
              <div aria-hidden="true">
                <TextFlipper />
              </div>
            </div>
            <div className="mt-8 md:mt-12 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-[2px] px-8 py-3 flex items-center justify-between gap-8 transition-all w-fit relative top-4 pointer-events-auto">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">Careers</span>
              <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-auto" aria-hidden="true">
                <path d="M8.99388 11.6127L0.48224 20.1243L3.24954 22.8916L11.7612 14.38L14.3801 11.761L11.6129 8.99371L2.61914 0L0.00017293 2.61897L8.99388 11.6127Z" fill="white"></path>
              </svg>
            </div>
          </Link>
        </div>

        {/* Carousel subnav for careers */}

      </section>


    </div>
  );
}

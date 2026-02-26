import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ArticleCarousel from "../components/ArticleCarousel";

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
            src="https://cdn.northropgrumman.com/-/media/brand-team/WSY/WSY_STATUS_QUO_HOMEPAGE_REVD_02.mp4?rev=5b4d7e95e89f48fa969dfc5bc53ccd21"
          />
        </div>

        {/* Main Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full pt-16">
          <Link href="/who-we-are/the-facts" className="group flex flex-col items-center hover:opacity-90 transition-opacity">
            <h1
              className="text-[3rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[4rem] font-bold text-white uppercase text-center leading-[1.1] md:leading-[1.2] pl-[0.2em] tracking-[0.2em] sm:tracking-[0.4em]"
            >
              TURNING DEEP-TECH
              <br />
              INTO
              <br />
              DEFENSE POWER
            </h1>
            <div className="mt-8 md:mt-12 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-[2px] px-6 py-3 flex items-center justify-between gap-8 transition-all w-fit pointer-events-auto">
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white">Accelerating Defense</span>
              <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-auto">
                <path d="M8.99388 11.6127L0.48224 20.1243L3.24954 22.8916L11.7612 14.38L14.3801 11.761L11.6129 8.99371L2.61914 0L0.00017293 2.61897L8.99388 11.6127Z" fill="white"></path>
              </svg>
            </div>
          </Link>
        </div>

        {/* Categories Jump Nav */}
        {/* <div className="relative z-20 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-24 pb-8 px-4 flex flex-col md:flex-row items-end justify-between">
          <div className="w-24 hidden md:block" />
          <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
            {["Advanced Weapons", "Aircraft", "Missile Defense", "Mission Solutions", "Space"].map((cat) => (
              <button key={cat} className="text-[10px] md:text-[11.5px] font-semibold uppercase text-white/50 hover:text-white transition-colors tracking-[0.2em] whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden md:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer mb-2 mr-6">
            <ChevronRight className="w-4 h-4 text-white rotate-90 -mb-2" />
            <ChevronRight className="w-4 h-4 text-white rotate-90 mb-2" />
            <span className="text-[9px] text-white uppercase tracking-[0.2em] font-medium mt-1">Scroll for More</span>
          </div>
        </div> */}

        {/* Gradient transition to next section */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none" />
      </section>

      {/* New Deep-Tech Solutions Section */}
      <section className="bg-black text-white pt-16 md:pt-24 pb-20 md:pb-24 px-4 w-full z-20 relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] lg:text-[3rem] font-bold tracking-[0.05em] uppercase mb-10 md:mb-14 text-white">
            We Design, Develop & Deploy Deep-Tech Solutions.
          </h2>

          <div className="text-sm md:text-base lg:text-[1.1rem] leading-[2] md:leading-[2.2] text-white/80 font-medium mb-16 md:mb-24 max-w-[1300px]">
            We have domain expertise in Artificial Intelligence, Robotics-Unmanned Systems, and Electronic Warfare. We use our significant portfolio of IPs to design solutions for the Global Defence and Aerospace Industry. &nbsp;&nbsp; We work shoulder-to-shoulder with the end-user and military personnel to deliver systems that are shaped by real-world missions and insight learned from modern conflicts. This connection with the Concept of Operations drives our R&D process, allowing us to think beyond theoretical requirements and deliver mission success.
          </div>

          <div className="w-full flex justify-end">
            <Link href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-gray-300 transition-colors">
              Find Out More
            </Link>
          </div>
        </div>
      </section>

      {/* Statement Block */}
      <section className="bg-white text-black pt-20 pb-12 px-4 shadow-sm border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-[0.2em] uppercase text-black mb-6">
            Discover Our Domains.
          </h2>

          <div className="w-full border-t border-black/30" />

          {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <Link href="/who-we-are" className="text-[10px] md:text-[11px] font-bold text-black uppercase tracking-[0.25em] hover:text-black/70 transition-colors">
              Who We Are
            </Link>
            <div className="flex flex-wrap justify-start md:justify-end gap-6 md:gap-x-10">
              {["Leadership", "The Facts", "Global Presence", "Investors", "News", "Suppliers", "Sustainability"].map((link) => (
                <Link key={link} href="#" className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.15em] text-black hover:text-black/70 transition-colors shrink-0 whitespace-nowrap">
                  {link}
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Article Carousel */}
      <ArticleCarousel />

      {/* Second Video Hero (Careers) */}
      <section className="relative h-screen min-h-[600px] w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
            src="https://cdn.northropgrumman.com/-/media/brand-team/new-homepage/careers-banner.mp4?rev=a19d14fe24b54eac98796190b11d6d51"
          />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full pt-16">
          <Link href="/careers" className="group flex flex-col items-center hover:opacity-90 transition-opacity">
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-white text-center leading-[1.1] mb-1 md:mb-2 tracking-tight drop-shadow-lg">
              Advancing defense
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-white text-center leading-[1.1] tracking-tight drop-shadow-lg">
              and your career.
            </h1>
            <div className="mt-8 md:mt-12 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-[2px] px-8 py-3.5 flex items-center justify-between gap-8 transition-all w-fit relative top-4 pointer-events-auto">
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">Careers</span>
              <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-auto">
                <path d="M8.99388 11.6127L0.48224 20.1243L3.24954 22.8916L11.7612 14.38L14.3801 11.761L11.6129 8.99371L2.61914 0L0.00017293 2.61897L8.99388 11.6127Z" fill="white"></path>
              </svg>
            </div>
          </Link>
        </div>

        {/* Carousel subnav for careers */}
        <div className="relative z-20 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-24 pb-8 px-4 flex flex-col md:flex-row items-end justify-between">
          <div className="w-24 hidden md:block" />
          <div className="flex items-center justify-center gap-6 md:gap-10 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
            {["Early Career", "Professionals", "Veterans", "Search By Location", "Life at ZOID", "Current Employees"].map((cat) => (
              <button key={cat} className="text-[10px] md:text-[11.5px] font-semibold uppercase text-white/50 hover:text-white transition-colors tracking-[0.2em] whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden md:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer mb-2 mr-6">
            <ChevronRight className="w-4 h-4 text-white rotate-90 -mb-2" />
            <ChevronRight className="w-4 h-4 text-white rotate-90 mb-2" />
            <span className="text-[9px] text-white uppercase tracking-[0.2em] font-medium mt-1">Scroll for More</span>
          </div>
        </div>
      </section>

      {/* Secondary Careers Article Area */}
      <section className="bg-black text-white w-full border-b border-gray-900">
        <div className="relative h-[500px] md:h-[700px] w-full overflow-hidden group cursor-pointer max-w-[1600px] mx-auto">
          <div className="absolute inset-0 bg-black">
            <img
              src="https://cdn.northropgrumman.com/-/media/Project/Northrop-Grumman/ngc/what-we-do/air/air/Interns-Hero-no-gradient-4.jpg?h=1000&w=2000"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              alt="Interns"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          <div className="relative z-10 w-full h-full px-4 xl:px-8 flex flex-col justify-end pb-8 md:pb-16 text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 font-serif drop-shadow-md">Discover a mission with meaning.</h3>
            <div>
              <button className="inline-flex items-center gap-5 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm px-6 py-4 transition-colors w-fit">
                <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Learn More</span>
                <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-auto">
                  <path d="M8.99388 11.6127L0.48224 20.1243L3.24954 22.8916L11.7612 14.38L14.3801 11.761L11.6129 8.99371L2.61914 0L0.00017293 2.61897L8.99388 11.6127Z" fill="white"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

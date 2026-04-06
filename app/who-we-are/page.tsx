import Link from "next/link";
import { leaders } from "@/lib/leaders";

const WhoWeAre = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[calc(100vh-200px)] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/zoid.png" alt="Hero background" className="w-full h-full object-cover object-top" />
        </div>

        <div className="absolute inset-0 flex items-end ml-[50px] mb-[80px]">
          <div className="w-[355px] md:w-[450px] lg:w-[500px] h-[440px] bg-black/50 backdrop-blur-[5px] flex flex-col justify-center px-10 box-border">
            <h1 className="text-5xl md:text-[56px] font-bold text-white mb-6 uppercase leading-tight font-sans tracking-tight">Who we are</h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-lg text-white">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-3 text-white">&gt;</span>
            <span className="text-white">Who We Are</span>
          </nav>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We are a Deep-Tech Defense Technology Startup.
          </h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            We Design, Develop, & Deploy Deep-Tech solutions for military applications; with domain expertise in Electronic Warfare and AI-Enabled Software Solutions for unmanned systems.  We have a practical understanding of the technologies used in modern conflicts and hence, our solutions meet not only the end-user’s SQRs but also their operational needs. By integrating best-in-class technologies from our global network into our sovereign systems architecture, we solve complex battlefield problems and deliver solutions that operators can trust.
          </p>
        </div>
      </section>

      {/* Alternating Sections */}
      <section className="bg-black text-white w-full">
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[350px] lg:min-h-[400px] max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center w-full h-full order-1 lg:order-1 overflow-hidden ">
            <img
              src="/soldieratcliff.jpeg"
              alt="Our Mission"
              className="w-full h-auto aspect-[1.5] lg:aspect-[1.6] object-cover rounded-sm hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="px-6 py-1 lg:py-2 lg:px-8 xl:px-12 2xl:px-16 flex flex-col justify-center bg-[#020202] order-2 lg:order-2 h-full">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 tracking-wide">Our Mission</h2>
              <p className="text-white/90 mb-8 leading-relaxed md:text-[17px] font-light">
                Historically, India's defense technology has relied on foreign imports, tying our national security to external geopolitical shifts. Even supposedly "indigenous" solutions are often restricted by exploitative Transfer of Technology (ToT) agreements. The status quo is high-cost contracts, and bureaucracy-led development leading to sub-par products with limited flexibility for our Defense Forces. In today's volatile climate, dependency is a risk we cannot afford. <strong className="font-semibold text-white">Our mission</strong> is to build truly sovereign, battle-ready tech driven by real R&D, delivering mission success for India's Defense and Aerospace Industry.
              </p>
            </div>
          </div>
        </div>



        {/* Listen First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[350px] lg:min-h-[400px] max-w-7xl mx-auto px-4">
          <div className="pr-6 py-1 lg:py-2 lg:pr-8 xl:pr-12 2xl:pr-16 flex flex-col justify-center bg-[#020202] order-2 md:order-1 items-start lg:items-end text-left lg:text-left h-full">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 tracking-wide">We listen first</h2>
              <p className="text-white/90 mb-8 leading-relaxed md:text-[17px] font-light">
                We engage directly with military personnel, war-fighters, and field analysts to deeply understand their operational pain points in modern conflicts. Backed by a strategic network of retired military veterans, we ensure our engineering is always grounded in tactical reality.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full order-1 md:order-2 overflow-hidden">
            <img
              src="/weListenFirst.jpeg"
              alt="We listen first"
              className="w-full h-auto aspect-[1.5] lg:aspect-[1.6] object-cover rounded-sm hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Build with Private Funds Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[350px] lg:min-h-[400px] max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center w-full h-full order-1 lg:order-1 overflow-hidden">
            <img
              src="/solderingboard.jpeg"
              alt="We Build with Private Funds"
              className="w-full h-auto aspect-[1.5] lg:aspect-[1.6] object-cover rounded-sm hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="px-6 py-1 lg:py-2 lg:px-8 xl:px-12 2xl:px-16 flex flex-col justify-center bg-[#020202] order-2 lg:order-2 h-full">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 tracking-wide">We Build with Private<br className="hidden lg:block" /> Funds</h2>
              <p className="text-white/90 mb-8 leading-relaxed md:text-[17px] font-light">
                Zoid operates differently. We are product driven and privately funded, giving us complete autonomy over our R&D and technology roadmap. We identify operational problems early, and invest our own capital to develop solutions well before user requirements are formally defined. This enables rapid innovation, accelerated deployment-cycles, and technology that is delivered only when it is truly battle-ready.
              </p>
            </div>
          </div>
        </div>

        {/* Deliver Success Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[350px] lg:min-h-[400px] max-w-7xl mx-auto px-4">
          <div className="pr-6 py-1 lg:py-2 lg:pr-8 xl:pr-12 2xl:pr-16 flex flex-col justify-center bg-[#020202] order-2 md:order-1 items-start lg:items-end text-left lg:text-left h-full">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 tracking-wide">We Deliver Success</h2>
              <p className="text-white/90 mb-8 leading-relaxed md:text-[17px] font-light">
                We don't engineer just to "check the boxes" or meet baseline PSQRs; we build for the fight. We push beyond standard user requirements to deliver decisive, real-world outcomes in high-stakes deployments.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full order-1 md:order-2 overflow-hidden">
            <img
              src="/jet.jpeg"
              alt="We Deliver Success"
              className="w-full h-auto aspect-[1.5] lg:aspect-[1.6] object-cover rounded-sm hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section id="leadership" className="w-full flex justify-center bg-white text-black pt-20 border-t border-gray-100 flex-col items-center">
        {/* Desktop View */}
        <div className="hidden md:flex flex-col w-full relative">
          <div className="max-w-7xl mx-auto px-4 w-full mb-8">
            <h2 className="text-3xl font-extrabold inline-block border-b-2 border-black pb-1">
              Our Leadership
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 w-full pb-20">
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              {leaders.map((leader) => (
                <Link key={leader.slug} href={`/who-we-are/company-leadership/${leader.slug}`} className="w-full bg-white rounded-md border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden group hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                  <div className="bg-[#d1d5db] mx-4 mt-4 rounded-sm overflow-hidden">
                    <img src={leader.image} alt={leader.name} className="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 md:p-8 border-t border-gray-100 mt-4">
                    <h3 className="text-xl font-bold text-black mb-1 group-hover:text-blue-600 transition-colors uppercase">{leader.name}</h3>
                    <p className="text-sm font-medium text-gray-500">{leader.role}</p>
                    <p className="mt-4 text-[14px] text-black/80 leading-relaxed font-sans">{leader.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Earth Video Section - Desktop */}
        <div className="hidden md:block w-full relative bg-black h-[95vh]">
          <video autoPlay loop muted playsInline src="/assets/earth.mp4" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="relative z-10 w-full h-full flex items-center justify-end">
            <div className="max-w-2xl text-white pr-8 lg:pr-16 xl:pr-24 text-right">
              <p className="text-[28px] md:text-[32px] xl:text-[36px] leading-tight font-light font-sans tracking-wide">
                Empowering the Defense and Aerospace industry with home-grown <strong className="font-bold text-white">Deep-Tech solutions</strong> that ensure <strong className="font-bold text-white">mission outcomes</strong> across every domain <strong className="font-bold text-white">of modern warfare.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col w-full relative">
          <div className="max-w-7xl mx-auto px-4 w-full pb-16">
            <h2 className="text-3xl font-extrabold mb-8 inline-block border-b-2 border-black pb-1">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {leaders.map((leader) => (
                <Link key={leader.slug} href={`/who-we-are/company-leadership/${leader.slug}`} className="w-full bg-white rounded-md border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.08)] overflow-hidden active:bg-gray-50">
                  <div className="bg-[#d1d5db] mx-4 mt-4 rounded-sm overflow-hidden aspect-[4/5]">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-6 border-t border-gray-100 mt-4">
                    <h3 className="text-xl font-bold text-black mb-1 uppercase">{leader.name}</h3>
                    <p className="text-sm font-medium text-gray-500">{leader.role}</p>
                    <p className="mt-4 text-[14px] text-black/80 leading-relaxed font-sans">{leader.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Earth Video Section - Mobile */}
        <div className="md:hidden w-full relative bg-gray-900 h-[80vh] flex items-center">
          <video autoPlay loop muted playsInline poster="/earth.png" src="/assets/earth.mp4" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
            <p className="text-[24px] leading-tight font-light text-white bg-black/40  p-6 rounded-lg tracking-wide">
              Empowering the Defense and Aerospace industry with home-grown <strong className="font-bold text-white">Deep-Tech solutions</strong> that ensure <strong className="font-bold text-white">mission outcomes</strong> across every domain <strong className="font-bold text-white">of modern warfare.</strong>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhoWeAre;

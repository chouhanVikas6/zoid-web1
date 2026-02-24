import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  "Advanced Weapons", "Aircraft", "Missile Defense", "Mission Solutions", "Space",
];

const sections = [
  {
    id: "advanced-weapons",
    title: "Advanced Weapons",
    description: "Our advanced weapons are built for precision, adaptability and performance in no-fail missions. Our arsenal maximizes combat effectiveness today while driving revolutionary capabilities for the future, delivering smarter, more survivable and effective weapons with speed and affordability.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=500&fit=crop",
    imageAlt: "Advanced weapons technology",
    buttonText: "Explore Our Advanced Weapons Capabilities"
  },
  {
    id: "aircraft",
    title: "Aircraft",
    description: "We're redefining air dominance with some of the most advanced aircraft in the world. From the sixth-generation B-21 Raider to autonomous systems to leading edge airborne sensors, our aircraft are engineered to win in complex environments. Through digital engineering and advanced manufacturing, we accelerate every stage of design and production to meet the demands of the modern battlespace.",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=500&fit=crop",
    imageAlt: "Military aircraft",
    buttonText: "Explore Our Aircraft Capabilities"
  },
  {
    id: "missile-defense",
    title: "Missile Defense",
    description: "Our missile defense systems provide comprehensive protection against ballistic missiles, cruise missiles, and emerging hypersonic threats. We deliver layered defense from the ground, sea, and space.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=500&fit=crop",
    imageAlt: "Missile defense systems",
    buttonText: "Explore Our Missile Defense Capabilities"
  },
  {
    id: "mission-solutions",
    title: "Mission Solutions",
    description: "We deliver mission-critical solutions in cyber, logistics, training, and C4ISR. Our technologies connect platforms, enable decision-making, and ensure mission success across every domain.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    imageAlt: "Mission solutions",
    buttonText: "Explore Our Mission Solutions Capabilities"
  },
  {
    id: "space",
    title: "Space",
    description: "From satellites and space vehicles to ground systems and launch vehicles, we define the future of space. Our space systems support national security, scientific exploration, and commercial applications.",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&h=500&fit=crop",
    imageAlt: "Space technology",
    buttonText: "Explore Our Space Capabilities"
  },
];

const WhatWeDo = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[calc(100vh-200px)] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1920&h=800&fit=crop" alt="Hero background" className="w-full h-full object-cover object-top" />
        </div>
        <div className="absolute inset-y-0 left-0 w-full md:w-[45%] lg:w-[40%] bg-black/80 z-10" />

        <div className="max-w-7xl mx-auto px-4 w-full relative z-20 mt-12">
          <div className="max-w-sm xl:max-w-lg lg:max-w-md">
            <h1 className="text-5xl md:text-[56px] font-bold text-white mb-6 uppercase">What We Do</h1>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Advanced Solutions for Ultimate Performance
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-secondary py-3">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">What We Do</span>
          </nav>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex items-center gap-8 py-4 min-w-max">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors whitespace-nowrap"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Forging Technologies That Push the Boundaries of Possible
          </h2>
          <p className="text-white/80 max-w-3xl text-lg leading-relaxed">
            We create advanced technologies, products, and solutions that enable our customers to achieve
            mission success. Our capabilities span air, land, sea, space, and cyberspace.
          </p>
        </div>
      </section>

      {/* Alternating Sections */}
      <div className="bg-black text-white pb-24">
        {sections.map((section, idx) => (
          <section key={section.id} id={section.id} className="py-16 md:py-20 lg:py-24">
            <div className={`max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
              {idx % 2 === 0 ? (
                <>
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full h-auto aspect-[1.5] lg:aspect-[1.6] object-cover"
                    loading="lazy"
                  />
                  <div className="lg:pl-6 xl:pl-8">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6">
                      {section.title}
                    </h2>
                    <p className="text-white/90 mb-8 leading-relaxed md:text-[17px]">
                      {section.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-block bg-[#0033a0] text-white px-6 py-3 text-[15px] font-medium hover:bg-[#002277] transition-colors"
                    >
                      {section.buttonText}
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:pr-6 xl:pr-8 order-2 lg:order-1">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6">
                      {section.title}
                    </h2>
                    <p className="text-white/90 mb-8 leading-relaxed md:text-[17px]">
                      {section.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-block bg-[#0033a0] text-white px-6 py-3 text-[15px] font-medium hover:bg-[#002277] transition-colors"
                    >
                      {section.buttonText}
                    </Link>
                  </div>
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full h-auto aspect-[1.5] lg:aspect-[1.6] object-cover order-1 lg:order-2"
                    loading="lazy"
                  />
                </>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* We Define Possible Section */}
      <section className="relative h-[400px] md:h-[600px] w-full mt-auto flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src="https://cdn.northropgrumman.com/-/media/brand-team/WSY/we-define-possible-space-earth-sun.jpg"
            alt="Earth from space with sun"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-4 md:px-8 w-full relative z-10 lg:pl-16 xl:pl-24">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-wide">
            We Define Possible
          </h2>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;

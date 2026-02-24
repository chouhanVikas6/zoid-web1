import Link from "next/link";
import { ChevronRight } from "lucide-react";

const cardRows = [
  [
    { title: "Leadership", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop", desc: "Meet the leaders guiding our mission." },
    { title: "Our Values", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop", desc: "Integrity, quality, and innovation drive everything we do." },
    { title: "Corporate Responsibility", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop", desc: "Making a positive impact in our communities." },
  ],
  [
    { title: "News", image: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&h=300&fit=crop", desc: "Latest updates and announcements." },
    { title: "Investors", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop", desc: "Financial information and reports." },
    { title: "Annual Reports", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop", desc: "Year-in-review publications." },
  ],
  [
    { title: "Life at ZOID", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop", desc: "Culture, benefits, and employee experience." },
    { title: "Now. Powered by ZOID", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", desc: "Innovation stories from our teams." },
    { title: "Heritage", image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop", desc: "Our legacy of defining possible." },
  ],
];

const WhoWeAre = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[calc(100vh-200px)] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=800&fit=crop" alt="Hero background" className="w-full h-full object-cover object-top" />
        </div>
        <div className="absolute inset-y-0 left-0 w-full md:w-[45%] lg:w-[40%] bg-black/80 z-10" />

        <div className="max-w-7xl mx-auto px-4 w-full relative z-20 mt-12">
          <div className="max-w-sm lg:max-w-md xl:max-w-lg">
            <h1 className="text-5xl md:text-[56px] font-bold text-white mb-6">Who We Are</h1>
            <p className="text-white text-base md:text-lg leading-relaxed">
              We pioneer technologies at the edge of every frontier to connect, advance
              and protect the U.S. and its allies.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm font-light text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-3 text-gray-400">&gt;</span>
            <span className="text-gray-400">Who We Are</span>
          </nav>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="hidden md:block absolute right-4 top-2 w-12 h-12 border-t-[14px] border-r-[14px] border-black dark:border-white"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We solve the toughest problems.
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8 text-lg leading-relaxed">
            Our pioneering employees are dedicated to creating breakthrough technologies that keep people safe
            and advance human discovery. From undersea to outer space and into cyberspace, our team innovates
            with purpose and passion.
          </p>
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-8 py-3 text-sm uppercase tracking-widest hover:bg-navy-dark transition-colors"
          >
            Advanced Technology and Innovation
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Card Grids */}
      <section className="py-16 bg-[#002855]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardRows.flat().map((card) => (
              <div key={card.title} className="group cursor-pointer bg-white shadow-sm flex flex-col">
                <div className="relative overflow-hidden aspect-square object-cover">
                  <span className="absolute top-3 left-3 text-white text-2xl font-light z-10 opacity-70 leading-none">+</span>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-6 flex-1 bg-white">
                  <h3 className="font-bold text-xl md:text-[22px] text-black mb-2">{card.title}</h3>
                  <p className="text-gray-700 text-[15px] leading-snug">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=500&fit=crop"
            alt="Global operations"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-wide">Global Presence</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With operations across the globe, we deliver advanced capabilities wherever our customers need us.
              Our global footprint enables rapid response and mission success.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-8 py-3 text-sm uppercase tracking-widest hover:bg-navy-dark transition-colors"
            >
              Global Presence
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Job Locations */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4 uppercase tracking-wide">Find Your Place</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Explore career opportunities at locations around the world. Find the role and location that's right for you.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-8 py-3 text-sm uppercase tracking-widest hover:bg-navy-dark transition-colors"
            >
              Career Locations
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop"
            alt="Corporate building"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* About Us Dark Section */}
      <section className="relative w-full overflow-hidden">
        {/* Full-width Background Half-split */}
        <div className="absolute inset-0 z-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-white h-full"></div>
          <div className="w-full lg:w-1/2 bg-[#002855] h-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="h-full bg-white">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=900&fit=crop"
                alt="About Us"
                className="w-full h-full min-h-[400px] lg:min-h-[600px] object-cover block"
                loading="lazy"
              />
            </div>
            {/* Right: Text Content */}
            <div className="bg-[#002855] text-white py-12 px-6 lg:px-16 lg:py-20 flex flex-col justify-center">
              <h2 className="text-[28px] md:text-3xl font-bold text-white mb-6">About Us</h2>

              <p className="text-white/90 text-[14px] leading-relaxed mb-6 font-light">
                ZOID is a global aerospace, defense and security company.
                The majority of our business is with the U.S. government, principally the
                Department of Defense and intelligence community. In addition, we deliver
                solutions to global and commercial customers.
              </p>

              <p className="text-white/90 text-[14px] leading-relaxed mb-8 font-light">
                ZOID Corporation<br />
                2980 Fairview Park Drive<br />
                Falls Church, VA 22042<br />
                Phone: 703-280-2900
              </p>

              <h3 className="text-[20px] font-bold text-white mb-4">Financials</h3>

              <ul className="list-disc pl-5 text-white/90 text-[14px] leading-relaxed mb-8 space-y-1.5 font-light">
                <li>2023 Sales: $39.3 billion</li>
                <li>Year-end 2023 Backlog: $84.2 billion</li>
                <li>2023 Cash Flow from Operations: $3.9 billion</li>
                <li>Stock Ticker Symbol: NOC on the New York Stock Exchange.</li>
              </ul>

              <div>
                <Link
                  href="/contact"
                  className="inline-block bg-[#0033cc] text-white px-8 py-3 text-sm font-medium hover:bg-blue-800 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;

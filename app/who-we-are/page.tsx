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
          <img src="/zoid.png" alt="Hero background" className="w-full h-full object-cover object-top" />
        </div>

        <div className="w-full relative z-20">
          <div className="absolute left-0 top-0 bottom-0 w-[65%] md:w-[35%] lg:w-[40%] bg-[#111111]/70 backdrop-blur-[2px] -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 w-full">
            <div className="max-w-sm lg:max-w-md xl:max-w-lg">
              <h1 className="text-5xl md:text-[56px] font-bold text-white">Who we are</h1>
            </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            We are a Deep-Tech Defense Technology Startup.
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-left">
            We Design, Develop, & Deploy Deep-Tech solutions for military applications; with domain expertise in Electronic Warfare and AI-Enabled Software Solutions for unmanned systems.  We have a practical understanding of the technologies used in modern conflicts and hence, our solutions meet not only the end-user’s SQRs but also their operational needs. By integrating best-in-class technologies from our global network into our sovereign systems architecture, we solve complex battlefield problems and deliver solutions that operators can trust.
          </p>
        </div>
      </section>

      {/* Alternating Sections */}
      <section className="bg-black text-white w-full">
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[450px] lg:min-h-[500px]">
          <div className="relative min-h-[300px] w-full h-full">
            <img
              src="/indianflag&soldiers.jpeg"
              alt="Our Mission"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* N Badge */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 xl:bottom-16 xl:right-16 bg-white/30 backdrop-blur-md rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center pointer-events-none">
              <span className="text-[#ff6b4a] font-normal text-xl md:text-2xl">N</span>
            </div>
          </div>
          <div className="flex flex-col justify-center px-8 py-16 md:p-16 lg:px-24 xl:px-32 bg-[#020202]">
            <div className="max-w-[500px] xl:max-w-[600px]">
              <h2 className="text-3xl lg:text-[40px] font-bold mb-6 tracking-tight">Our Mission</h2>
              <p className="text-gray-300 text-[13px] md:text-[14px] leading-[1.8] font-light">
                Historically, India's defense technology has relied on foreign imports, tying our national security to external geopolitical shifts. Even supposedly "indigenous" solutions are often restricted by exploitative Transfer of Technology (ToT) agreements. The status quo is high-cost contracts, and bureaucracy-led development leading to sub-par products with limited flexibility for our Defense Forces. In today's volatile climate, dependency is a risk we cannot afford. <strong className="font-semibold text-white">Our mission</strong> is to build truly sovereign, battle-ready tech driven by real R&D, delivering mission success for India's Defense and Aerospace Industry.
              </p>
            </div>
          </div>
        </div>

        {/* Listen First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[450px] lg:min-h-[500px]">
          <div className="flex flex-col justify-center px-8 py-16 md:p-16 lg:px-24 xl:px-32 order-2 md:order-1 bg-[#020202]">
            <div className="max-w-[500px] xl:max-w-[600px] ml-auto">
              <h2 className="text-3xl lg:text-[40px] font-bold mb-6 tracking-tight">We listen first</h2>
              <p className="text-gray-300 text-[13px] md:text-[14px] leading-[1.8] font-light">
                We engage directly with military personnel, war-fighters, and field analysts to deeply understand their operational pain points in modern conflicts. Backed by a strategic network of retired military veterans, we ensure our engineering is always grounded in tactical reality.
              </p>
            </div>
          </div>
          <div className="relative min-h-[300px] w-full h-full order-1 md:order-2">
            <img
              src="/weListenFirst.jpeg"
              alt="We listen first"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* N Badge */}
            <div className="absolute inset-0 m-auto bg-white/30 backdrop-blur-md rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center pointer-events-none">
              <span className="text-[#ff6b4a] font-normal text-xl md:text-2xl">N</span>
            </div>
          </div>
        </div>

        {/* Build with Private Funds Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[450px] lg:min-h-[500px]">
          <div className="relative min-h-[300px] w-full h-full">
            <img
              src="/laptopandjoystick.jpeg"
              alt="We Build with Private Funds"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* N Badge */}
            <div className="absolute top-8 right-16 md:top-12 md:right-32 xl:top-24 xl:right-48 bg-white/30 backdrop-blur-md rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center pointer-events-none">
              <span className="text-[#ff6b4a] font-normal text-xl md:text-2xl">N</span>
            </div>
          </div>
          <div className="flex flex-col justify-center px-8 py-16 md:p-16 lg:px-24 xl:px-32 bg-[#020202]">
            <div className="max-w-[500px] xl:max-w-[600px]">
              <h2 className="text-3xl lg:text-[40px] font-bold mb-6 tracking-tight leading-tight">We Build with Private<br className="hidden lg:block" /> Funds</h2>
              <p className="text-gray-300 text-[13px] md:text-[14px] leading-[1.8] font-light">
                Zoid operates differently. We are product driven and privately funded, giving us complete autonomy over our R&D and technology roadmap. We identify operational problems early, and invest our own capital to develop solutions well before user requirements are formally defined. This enables rapid innovation, accelerated deployment-cycles, and technology that is delivered only when it is truly battle-ready.
              </p>
            </div>
          </div>
        </div>

        {/* Deliver Success Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[450px] lg:min-h-[500px]">
          <div className="flex flex-col justify-center px-8 py-16 md:p-16 lg:px-24 xl:px-32 order-2 md:order-1 bg-[#020202]">
            <div className="max-w-[500px] xl:max-w-[600px] ml-auto">
              <h2 className="text-3xl lg:text-[40px] font-bold mb-6 tracking-tight">We Deliver Success</h2>
              <p className="text-gray-300 text-[13px] md:text-[14px] leading-[1.8] font-light">
                We don't engineer just to "check the boxes" or meet baseline PSQRs; we build for the fight. We push beyond standard user requirements to deliver decisive, real-world outcomes in high-stakes deployments.
              </p>
            </div>
          </div>
          <div className="relative min-h-[300px] w-full h-full order-1 md:order-2">
            <img
              src="/jet.jpeg"
              alt="We Deliver Success"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* N Badge */}
            <div className="absolute inset-0 m-auto bg-white/30 backdrop-blur-md rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center pointer-events-none">
              <span className="text-[#ff6b4a] font-normal text-xl md:text-2xl">N</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="w-full flex justify-center bg-white text-black pt-20 border-t border-gray-100 flex-col items-center">
        {/* Desktop View */}
        <div className="hidden md:flex flex-col w-full relative">
          <div className="max-w-7xl mx-auto px-4 w-full mb-8">
            <h2 className="text-3xl font-extrabold inline-block border-b-2 border-black pb-1">
              Our Leadership
            </h2>
          </div>
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              {[{
                name: "Aman Virmani",
                role: "Founder and CEO",
                image: "/aman-virmani.png"
              }, {
                name: "Nilesh Aggarwal",
                role: "Founder and CTO",
                image: "/nilesh-aggarwal.png"
              }, {
                name: "Anunay Varshney",
                role: "Founder and COO",
                image: "/anunay.png"
              }].map((key) => (
                <div key={key.name} className="w-full bg-[#d1d5db]">
                  <img src={key.image} alt={key.name} className="w-full aspect-[4/5] object-cover object-top" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full relative bg-black min-h-[600px] mt-0">
            <img src="/earth.png" alt="Earth background" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-3 gap-6 lg:gap-8">
                {[{
                  name: "Aman Virmani",
                  role: "Founder and CEO",
                  image: "/aman-virmani.png"
                }, {
                  name: "Nilesh Aggarwal",
                  role: "Founder and CTO",
                  image: "/nilesh-aggarwal.png"
                }, {
                  name: "Anunay Varshney",
                  role: "Founder and COO",
                  image: "/anunay.png"
                }].map((key) => (
                  <div key={key.name} className="bg-white p-6 md:p-8 border-x border-b border-gray-200">
                    <h3 className="text-xl font-bold text-black mb-1">{key.name}</h3>
                    <p className="text-sm font-medium text-gray-500">{key.role}</p>
                  </div>
                ))}
              </div>

              <div className="mt-20 md:mt-28 max-w-2xl text-white pb-32">
                <p className="text-[28px] md:text-[32px] xl:text-[36px] leading-tight font-light font-sans tracking-wide">
                  Empowering the Defense and Aerospace industry with home-grown <strong className="font-bold text-white">Deep-Tech solutions</strong> that ensure <strong className="font-bold text-white">mission outcomes</strong> across every domain <strong className="font-bold text-white">of modern warfare.</strong>
                </p>
              </div>
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
              {[{
                name: "Aman Virmani",
                role: "Founder and CEO",
                image: "/aman-virmani.png"
              }, {
                name: "Nilesh Aggarwal",
                role: "Founder and CTO",
                image: "/nilesh-aggarwal.png"
              }, {
                name: "Anunay Varshney",
                role: "Founder and COO",
                image: "/anunay.png"
              }].map((key) => (
                <div key={key.name} className="w-full shadow-lg">
                  <div className="bg-[#d1d5db] aspect-[4/5]">
                    <img src={key.image} alt={key.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="bg-white p-6 border border-gray-200 border-t-0">
                    <h3 className="text-xl font-bold text-black mb-1">{key.name}</h3>
                    <p className="text-sm font-medium text-gray-500">{key.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full relative bg-gray-900 min-h-[400px] py-20 px-4 flex items-center">
            <img src="/earth.png" alt="Earth background" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="relative z-10 w-full max-w-2xl mx-auto">
              <p className="text-[24px] leading-tight font-light text-white bg-black/40 backdrop-blur-sm p-6 rounded-lg tracking-wide">
                Empowering the Defense and Aerospace industry with home-grown <strong className="font-bold text-white">Deep-Tech solutions</strong> that ensure <strong className="font-bold text-white">mission outcomes</strong> across every domain <strong className="font-bold text-white">of modern warfare.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhoWeAre;

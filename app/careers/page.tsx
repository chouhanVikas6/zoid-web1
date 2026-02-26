import Link from "next/link";
import { ChevronRight } from "lucide-react";

const resourcesAndFaqs = [
  {
    title: "Application Process",
    description: "The application process can be an involved one, so make sure you understand how it works.",
  },
  {
    title: "Interview Preparation Tips",
    description: "We look forward to meeting you by phone, video or in person. Find out how to make a great impression.",
  },
  {
    title: "Security Clearances",
    description: "Many jobs at ZOID require employees to acquire and maintain a security clearance.",
  },
  {
    title: "Application FAQs",
    description: null,
  },
  {
    title: "Benefits",
    description: "Our employees enjoy flexible schedules, career development, financial planning, tuition reimbursement, and health care.",
  },
  {
    title: "Technical Growth Offerings",
    description: "We offer highly selective technical programs that allow employees to expand proficiencies across skill sets.",
  },
];

const subNavLinks = [
  "Early Career", "Professionals", "Veterans", "Search by Location", "Life at ZOID", "Current Employees",
];

const careerCategories = [
  {
    title: "Early Career",
    description: "Launch your career with internships, co-ops, and entry-level positions that help you grow alongside industry leaders.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    title: "Professionals",
    description: "Bring your expertise to programs that matter. Join experienced teams solving the most complex challenges in defense and technology.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop",
  },
  {
    title: "Veterans",
    description: "Your military experience is valued here. Transition your service into a career that continues to make a difference.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
  },
];

const benefits = [
  { title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { title: "Education", desc: "Tuition assistance and professional development opportunities to grow your skills." },
  { title: "Work-Life Balance", desc: "Flexible work arrangements, generous PTO, and family-friendly policies." },
  { title: "Retirement", desc: "401(k) with company match and pension plans to secure your future." },
];

const Careers = () => {
  return (
    <div>
      {/* Secondary Nav Bar */}
      <div className="bg-black pt-[68px] pb-4 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <h2 className="text-white font-bold tracking-wide mb-4 md:mb-0">
            Careers at ZOID
          </h2>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            {["Search Jobs", "Internal Job Opportunities", "Events", "Recruitment Fraud"].map((link) => (
              <a key={link} href="#" className="text-white text-xs hover:text-white/80 transition-colors whitespace-nowrap">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=1920&h=800&fit=crop"
            alt="Clean room technician"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Box */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 sm:px-8 xl:px-16">
          <div className="bg-black/60 backdrop-blur-sm max-w-xl p-8 md:p-12 lg:p-16 text-white w-full sm:w-[90%] md:w-[75%] lg:w-[60%]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Careers at Zoid
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-10 text-white/90">
              Explore careers across air, cyber, land, sea, space and connectivity in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-[#0033a0] text-white px-6 py-3 text-sm font-medium hover:bg-[#002277] transition-colors text-center">
                Search Jobs
              </a>
              <a href="#" className="bg-[#0033a0] text-white px-6 py-3 text-sm font-medium hover:bg-[#002277] transition-colors text-center">
                Internal Job Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Advance Your Career With Us
          </h2>
          <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed mb-8">
            At ZOID, you'll work on meaningful projects that make a difference.
            Our teams solve tough problems and push the boundaries of what's possible — and we want you on our team.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-8 py-3 text-sm uppercase tracking-widest hover:bg-navy-dark transition-colors"
          >
            Search Jobs
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Career Categories */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 uppercase tracking-wide">
            Explore Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careerCategories.map((cat) => (
              <div key={cat.title} className="group cursor-pointer bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 relative">
                  <h3 className="font-bold text-lg text-card-foreground mb-2">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm">{cat.description}</p>
                  <span className="absolute top-4 right-4 text-xl text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 uppercase tracking-wide">
            Benefits & Culture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Resources and FAQs */}
      <section className="bg-[#002244] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Resources and FAQs
          </h2>
          <hr className="border-white/40 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {resourcesAndFaqs.map((item, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 border-t-[12px] border-[#0033a0] flex flex-col h-full shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-black/80 text-sm md:text-[15px] leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                )}
                {!item.description && <div className="flex-grow"></div>}

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#0033a0] font-medium hover:text-[#002277] transition-colors mt-auto text-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-foreground mb-4 uppercase tracking-wide">
            Ready to Define Possible?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join our team of innovators, dreamers, and doers. Search open positions and take the first step toward an extraordinary career.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white/20 transition-colors"
          >
            <span className="text-pink-accent">&#x25C8;</span>
            Search Jobs
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


    </div>
  );
};

export default Careers;

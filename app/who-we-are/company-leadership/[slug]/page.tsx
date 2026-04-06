import Link from "next/link";
import { leaders } from "@/lib/leaders";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import LeaderPageTracker from "@/components/LeaderPageTracker";
import PrintButton from "@/components/PrintButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const leader = leaders.find((l) => l.slug === slug);
  if (!leader) return { title: "Leader Not Found" };
  return {
    title: `${leader.name} | Zoid Technologies`,
    description: leader.desc,
  };
}

export default async function LeaderPage({ params }: PageProps) {
  const { slug } = await params;
  const leader = leaders.find((l) => l.slug === slug);

  if (!leader) {
    notFound();
  }

  return (
    <div className="bg-white font-sans overflow-visible pb-12">
      <LeaderPageTracker leaderName={leader.name} />
      
      {/* Print-only Header */}
      <div className="hidden print:flex items-center justify-between border-b-2 border-black pb-8 mb-8 pt-0">
        <img src="/zoid-logo.png" alt="Zoid Logo" className="h-10 w-auto" />
        <div className="text-right">
          <p className="font-bold text-xl uppercase tracking-widest text-black">Zoid Technologies</p>
          <p className="text-sm text-black/60">Corporate Leadership Profile</p>
        </div>
      </div>

      {/* Page Title */}
      <div className="py-12 pt-24 bg-black print:hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
          Corporate Leadership
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#0a0a0a] py-4 print:hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <nav className="text-sm flex items-center space-x-2 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>&gt;</span>
            <Link href="/who-we-are" className="hover:text-white transition-colors">Who We Are</Link>
            <span>&gt;</span>
            <Link href="/who-we-are#leadership" className="hover:text-white transition-colors">Company Leadership</Link>
            <span>&gt;</span>
            <span className="text-white font-medium">{leader.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Info Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-4xl md:text-[56px] font-bold text-black mb-4 leading-tight uppercase">
                {leader.name}
              </h2>
              <div className="space-y-1 mb-8">
                <p className="text-lg font-bold text-black tracking-tight">{leader.role}</p>
                <p className="text-lg font-bold text-black tracking-tight">Zoid Technologies</p>
              </div>

              <div className="text-lg text-black/80 leading-relaxed mb-8 max-w-2xl">
                {leader.desc}
              </div>

              <PrintButton />
            </div>

            <div className="w-full md:w-[40%] order-1 md:order-2">
              <div className="bg-[#d1d5db] overflow-hidden rounded-sm shadow-xl">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-black py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-[42px] font-bold mb-10 tracking-wide uppercase">Bio</h2>
          <div className="space-y-8 max-w-5xl">
            {leader.bio?.map((para: string, index: number) => (
              <p key={index} className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                {para}
              </p>
            )) || (
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-90">
                  {leader.desc}
                </p>
              )}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="bg-white py-20 text-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-[42px] font-bold mb-6 tracking-wide uppercase">About Zoid Technologies</h2>
          <div className="max-w-4xl">
            <p className="text-lg leading-relaxed text-black/80">
              Zoid Technologies is a leading Deep-Tech Defense technology company. Our pioneering solutions equip our customers with the capabilities they need to connect and protect the world, and push the boundaries of human exploration across the universe. Driven by a shared purpose to solve our customers' toughest problems, our teams define possible every day.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

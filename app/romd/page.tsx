import Image from "next/image";
import Link from "next/link";

export default function RomdPage() {
    return (
        <div className="pt-16 md:pt-0 bg-black">
            <Image className="w-full h-auto" src="/romd/first.jpg" alt="Romd" width={1920} height={1080} quality={100} />
            <Image className="w-full h-auto" src="/romd/second.jpg" alt="Romd" width={1920} height={1080} quality={100} />
            <Image className="w-full h-auto" src="/romd/third.jpg" alt="Romd" width={1920} height={1080} quality={100} />
            <Image className="w-full h-auto" src="/romd/fourth.jpg" alt="Romd" width={1920} height={1080} quality={100} />
            <Image className="w-full h-auto" src="/romd/fifth.jpg" alt="Romd" width={1920} height={1080} quality={100} />
            <Image className="w-full h-auto" src="/romd/sixth.jpg" alt="Romd" width={1920} height={1080} quality={100} />
            {/* <Image className="w-full h-auto" src="/romd/seventh.jpg" alt="Romd" width={1920} height={1080} quality={100} /> */}



            <Link
                href="/assets/romd.pdf"
                target="_blank"
                className="fixed bottom-4 right-4 z-50"
                download
            >
                <button className="bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full">Download Brochure</button>
            </Link>
        </div>
    );
}
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NavRakshak CRPA - Anti-Jam GNSS Receiver | Zoid Technologies",
    description: "NavRakshak CRPA is a multi-constellation, multi-band anti-jam and anti-spoof GNSS receiver offering protection against military-grade jammers.",
    keywords: [
        "CRPA",
        "NavRakshak",
        "Anti-Jam GNSS Receiver",
        "Anti-Spoof GNSS",
        "Adaptive Null Steering",
        "Electronic Warfare",
        "Military Grade GNSS",
        "Zoid Technologies",
        "Controlled Reception Pattern Antenna"
    ]
};

export default function CrpaPage() {
    return (
        <div className="pt-16 md:pt-0 bg-black relative">
            {/* SEO Content (Hidden visually but readable by search engines & screen readers) */}
            <h1 className="sr-only">NavRakshak CRPA - Anti-Jam and Anti-Spoof GNSS Receiver by Zoid Technologies</h1>
            <article className="sr-only">
                <h2>NavRakshak CRPA Versions</h2>
                <ul>
                    <li><strong>NAVRAKSHAK - 4:</strong> 4-Element CRPA Array, Protection from 3 Jammers (&gt;100 dB J/S). Weight: 150g. Dimensions: 76x76x23mm. Power: 12VDC @ 7W.</li>
                    <li><strong>NAVRAKSHAK - 8:</strong> 8-Element CRPA Array, Protection from 7 Jammers (&gt;110 dB J/S). Weight: 700g. Dimensions: 160x160x35mm. Power: 9-24VDC @ 12W.</li>
                    <li><strong>NAVRAKSHAK - 16:</strong> 16-Element CRPA Array, Protection from 15 Jammers (&gt;100 dB J/S). Weight: 1300g. Dimensions: 240x235x30mm. Power: 9-24VDC @ 25W.</li>
                </ul>
                <p>All versions support protected GNSS bands: GPS + GLONASS + GALILEO + BEIDOU. Environmental specifications: MIL-STD 810H (Vibration & Jerks), IP65, Operating Humidity &lt;95% RH, and Operating Temperature -40°C to +60°C.</p>

                <h2>Key Features</h2>
                <ul>
                    <li><strong>Protection from up to 15 Jammers:</strong> Up to 3 jammers with 4 Element; 7 jammers with 8 elements and 15 jammers with 16 elements.</li>
                    <li><strong>Ultra-Low SWaP:</strong> CRPA Antenna + RF Backend integrated in a single rugged module weighing as little as 150g.</li>
                    <li><strong>High Anti-Jam Performance:</strong> Proven anti-jam performance of 100dB-110dB Jammer/Signal Ratio against military jammers.</li>
                    <li><strong>Adaptive Null Steering:</strong> Adaptive null steering to dynamically optimize reception and suppress hostile interference.</li>
                    <li><strong>Advanced Digital Signal Processing:</strong> Additional digital anti-jamming features like adaptive notch filtering and pulse blanking.</li>
                    <li><strong>Plug and Play (PX4 & APM):</strong> Seamless integration into new & legacy platforms with a wide range of messaging format support.</li>
                </ul>

                <h2>Battle Tested Solution</h2>
                <p>Proven against Military Grade GNSS Jammers and real Electronic Warfare equipment used in Modern Conflicts: Wideband FMCW-AWGN Barrage Jammers, Narrowband Continuous Wave (CW) Jammers, Pulsed WB Radio Frequency Noise Jammers, Collocated GNSS Jamming & Spoofing Attacks.</p>
                <h3>Safe Standoff Distances</h3>
                <ul>
                    <li><strong>Portable Jammer (&lt; 30 W):</strong> NR-8 Safe Distance: &gt; 50m. NR-4/16 Safe Distance: &gt; 150m.</li>
                    <li><strong>Tactical Jammer (&lt; 500 W):</strong> NR-8 Safe Distance: &gt; 190m. NR-4/16 Safe Distance: &gt; 600m.</li>
                    <li><strong>Military Jammer (&lt; 2 kW):</strong> NR-8 Safe Distance: &gt; 380m. NR-4/16 Safe Distance: &gt; 1200m.</li>
                </ul>

                <h2>NavRakshak GNSS Receiver</h2>
                <p>Multi-Constellation Multi-Band Anti-Jam Anti-Spoof GNSS Receiver. NavRakshak CRPAs are supplied with a military grade GNSS receiver, tightly-integrated with the tracking loops of the CRPA RF back-end. The receiver comes pre-loaded with custom firmware & config, optimized to ensure stable PNT in contested GNSS jamming and spoofing environments.</p>
                <p>Each receiver unit is calibrated to support the dynamic characteristics of the intended deployment platform including fixed-wing aircraft, multi-rotor UAVs, highly maneuverable munitions, and land-based vehicles.</p>
                <ul>
                    <li>GNSS Constellations and Bands: GPS L1, L2, L5; GAL E1, E5, E6; BDS B1I, B1C, B2a, B3I; NavIC L5; SBAS L1C/A</li>
                    <li>Position Accuracy (with NavRakshak CRPA): 2D accuracy without RTK: 5.20m, 2D accuracy with RTK: 0.04m</li>
                    <li>GNSS Data Protocols: DroneCAN interface (compatible with Ardupilot and PX4); RTCM v2.x, v3.x (For RTK Corrections)</li>
                </ul>

                <p>Contact ZOID TECHNOLOGIES for more information: sales@zoidtech.co.in | +91 8800712060 | +91 9871617142 | www.zoidtech.co.in</p>
            </article>

            <Image className="w-full h-auto" src="/crpa/crpa_page-0001.jpg" alt="NavRakshak CRPA Cover - Zoid Technologies" width={1920} height={1080} />
            <Image className="w-full h-auto" src="/crpa/crpa_page-0002.jpg" alt="NavRakshak CRPA Key Features and Benefits" width={1920} height={1080} />
            <Image className="w-full h-auto" src="/crpa/crpa_page-0003.jpg" alt="NavRakshak CRPA Versions and Technical Specifications" width={1920} height={1080} />
            <Image className="w-full h-auto" src="/crpa/crpa_page-0004.jpg" alt="CRPA Battle Tested Solution and Safe Standoff Distances" width={1920} height={1080} />
            <Image className="w-full h-auto" src="/crpa/crpa_page-0005.jpg" alt="NavRakshak GNSS Receiver Integration and Metrics" width={1920} height={1080} />
            <Image className="w-full h-auto" src="/crpa/crpa_page-0006.jpg" alt="Zoid Technologies Contact Information" width={1920} height={1080} />

            <Link
                href="/assets/crpa.pdf"
                target="_blank"
                className="fixed bottom-4 right-4 z-50"
                download
                aria-label="Download CRPA Brochure PDF"
            >
                <button className="bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full">Download Brochure</button>
            </Link>
        </div>
    );
}
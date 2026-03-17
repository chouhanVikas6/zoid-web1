import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ROMD - Reusable Active Radar Decoy | Zoid Technologies",
    description: "ROMD is a high-speed tethered drone for naval vessels featuring an Active RF Missile Decoy Payload and Advanced Phased Array Antenna for anti-ship cruise missile defense.",
    keywords: [
        "ROMD",
        "Reusable Active Radar Decoy",
        "Tethered UAV",
        "Naval Vessels",
        "Missile Decoy",
        "Anti-Ship Missile Defense",
        "Zoid Technologies",
        "Active RF Seduction",
        "Soft-kill suite",
        "Electronic Warfare",
        "False RCS"
    ]
};

export default function RomdPage() {
    return (
        <div className="pt-16 md:pt-0 bg-black relative">
            {/* SEO Content (Hidden visually but readable by search engines & screen readers) */}
            <h1 className="sr-only">ROMD - Reusable Active Radar Decoy by Zoid Technologies</h1>
            <article className="sr-only">
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Rapid Reaction & High Agility:</strong> Tethered drone for rapid launch and high T/W design for high-speed positioning and seduction.</li>
                    <li><strong>Platform Agnostic Deployment:</strong> End-to-end operations without dedicated explosive launchers. Compatible with carriers, destroyers, frigates, and patrol vessels.</li>
                    <li><strong>Reusable and Cost-Efficient:</strong> Reusable UAV returns safely post-engagement. Eliminates recurring expenditure while sustaining high mission-readiness.</li>
                    <li><strong>Active RF Missile Decoy Payload:</strong> Receives, processes & transmits RF emissions to create a false RCS, seducing the radar seeker head of anti-ship cruise missiles.</li>
                    <li><strong>Advanced Phased Array Antenna:</strong> Antenna array capable of high-power handling and electronic beam-steering to ensure generation of a credible false target.</li>
                    <li><strong>Effective Against Variety of Seekers:</strong> Broadband seeker coverage C, X, Ku, K & Ka Bands while maintaining constant system gain throughout the frequency range.</li>
                </ul>

                <h2>ROMD - Concept of Operations</h2>
                <ol>
                    <li><strong>Threat Initiation:</strong> Anti-ship missile (ASM) is launched from aircraft, surface combatant, or shore-based battery, guided towards the target vessel by external sensors.</li>
                    <li><strong>Terminal Homing:</strong> The onboard RF seeker activates & begins precision homing towards the vessel.</li>
                    <li><strong>Threat Detection & Missile Defense Sequence:</strong> The defending vessel's ESM detects RF emissions of the seeker & the Combat Management System (CMS) initiates the Missile Defense Sequence, consisting of a layered hard-kill and soft-kill response.</li>
                    <li><strong>Soft-Kill Suite - ROMD Activation:</strong> The CMS activates the ROMD system & transmits threat engagement parameters. The carrier UAV executes rapid launch in &lt;5 secs & follows an AI generated trajectory to achieve optimal decoy geometry.</li>
                    <li><strong>Active RF Seduction of ASM:</strong> The DRFM payload transmits coherent RF emissions, actively beam steered towards the incoming threat. The Missile seeker acquires the much larger emulated RCS & diverts away from the vessel.</li>
                    <li><strong>Burn-Through Range & Recovery:</strong> As the ASM approaches, the range-gate of the seeker shifts towards the ROMD payload. As the ASM enters the burn-through region, the defending vessel is already at a safe miss-distance. The ASM passes under the ROMD system and the UAV autonomously lands back on the vessel.</li>
                </ol>

                <h2>ROMD Carrier - Tethered UAV</h2>
                <p>Long Duty-Cycle High-Speed Tethered Drone for Naval Vessels. Active decoy is deployed on a high-speed tethered UAV engineered for continuous maritime operations. An extremely high T/W ratio ensures stable station-keeping alongside moving naval vessels, even in turbulent sea state level 4. The surplus thrust margin enables rapid maneuvering and precise repositioning for the time-critical mission.</p>
                <ul>
                    <li>Configuration: Rotary-wing Tethered Quad-Copter</li>
                    <li>Endurance: 24 hour continuous tethered flight. 30 mins flight-time after detaching tether mid-flight.</li>
                    <li>Reaction Time: &lt;5 seconds after takeoff command. &lt;1 seconds if already in tethered flight.</li>
                    <li>Speed: Maximum 30 m/s, Cruise 15 m/s.</li>
                </ul>

                <h2>Missile Decoy - Re-usable Active Radar Decoy</h2>
                <p>Modern Anti-Ship Missiles pose a significant threat to Naval Platforms. The missiles fly at super-sonic speeds, at a sea-skimming trajectory, guided by terminal active radar seekers. ROMD system is equipped with an RF decoy mounted on a multi-rotor drone. The ROMD Drone is able to quickly position itself away from the ship and emit an emulated RF signal impersonating the RCS of ship. The ASM is seduced by decoy signals and misses the true target.</p>
                <p>Equipped with state-of-the-art electronics: GaN Power Amplifier, Wide-Band Superheterodyne Receiver, and Phased Antenna with Beam Steering; enabling High RCS Reproduction with a low burn-through range suitable for large Indian Ships.</p>
                <ul>
                    <li>Counter Multiple Types Of Missiles: Beats advanced ECCM of modern Radar Seekers</li>
                    <li>High RCS Reproduction: 20,000 sqm RCS to emulate ships</li>
                    <li>Broadband Coverage: Frequency C, X, Ku, K & Ka Bands</li>
                </ul>

                <p>Contact ZOID TECHNOLOGIES for more information: sales@zoidtech.co.in | +91 8800712060 | +91 9871617142 | www.zoidtech.co.in</p>
            </article>

            <Image className="w-full h-auto" src="/romd/first.jpg" alt="ROMD Cover - Zoid Technologies" width={1920} height={1080} quality={100} />
            <Image className="w-full h-auto" src="/romd/second.jpg" alt="ROMD Key Features" width={1920} height={1080} quality={100} />
            <Image className="w-full h-auto" src="/romd/third.jpg" alt="ROMD Concept of Operations" width={1920} height={1080} quality={100} />
            <Image className="w-full h-auto" src="/romd/fourth.jpg" alt="ROMD Carrier Tethered UAV Specifications" width={1920} height={1080} quality={100} />
            <Image className="w-full h-auto" src="/romd/fifth.jpg" alt="Missile Decoy Active Radar Decoy Payload" width={1920} height={1080} quality={100} />
            <Image className="w-full h-auto" src="/romd/sixth.jpg" alt="Zoid Technologies Contact Info" width={1920} height={1080} quality={100} />
            {/* <Image className="w-full h-auto" src="/romd/seventh.jpg" alt="ROMD Details" width={1920} height={1080} quality={100} /> */}

            <Link
                href="/assets/romd.pdf"
                target="_blank"
                className="fixed bottom-4 right-4 z-50"
                download
                aria-label="Download ROMD Brochure PDF"
            >
                <button className="bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full">Download Brochure</button>
            </Link>
        </div>
    );
}
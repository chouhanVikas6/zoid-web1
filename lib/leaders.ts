export interface Leader {
  name: string;
  role: string;
  image: string;
  desc: string;
  slug: string;
  bio?: string[];
}

export const leaders: Leader[] = [
  {
    slug: "aman-virmani",
    name: "Aman Virmani",
    role: "Founder and CEO",
    image: "/aman-virmani.jpeg",
    desc: "Aman Virmani is the Founder and the Chief Executive Officer of Zoid Technologies where he drives the vision and strategic roadmap of the Deep-Tech Defense Technology products. He leverages his industry connect, and vast techno-commercial experience to drive the team towards excellence.",
    bio: [
      "Aman founded Zoid Technologies in 2021 with the simple vision of enabling India’s Defence and Aerospace Industry to reduce it’s reliance on foreign technology and imported products. Over the years, this vision transformed to a much broader idea of Strategic Self-Reliance aligned with the Make-in-India Initiative, powered by the Indian Ministry of Defence.",
      "Prior to ZOID, Aman was the Team Captain of Team – Unmanned Aerial System, Delhi Technological University. Under his leadership, and collaboration with Adani Defence; the team won the Meher Baba Swarm Drone Competition organised by the Indian Air Force. These efforts led to the developemnt of a swarm of 30+ multi-rotor drones, with decentralized AI powered deciscion making, working as a single cohesive unit to achieve mission success even in GNSS Denied, and conflicted EW territories.",
    ]
  },
  {
    slug: "nilesh-aggarwal",
    name: "Nilesh Aggarwal",
    role: "Founder and CTO",
    image: "/nilesh-aggarwal.jpeg",
    desc: "Nilesh Aggarwal is the co-founder and the Chief Technology Officer of Zoid Technologies, where he develops and deploys Defence Technology alongside his brilliant team. He understands a wide spectrum of technologies from the various domains of Robotics, Optics, Software, Electronic Warfare, and Artificial Intelligence. He leverages this knowledge with his ability to learn & adapt quickly to execute high-stakes R&D projects even in unfavourable timelines.",
    bio: [
      "Nilesh Aggarwal is the co-founder and the Chief Technology Officer of Zoid Technologies, where he develops and deploys Defence Technology alongside his brilliant team.",
      "He understands a wide spectrum of technologies from the various domains of Robotics, Optics, Software, Electronic Warfare, and Artificial Intelligence. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "He leverages this knowledge with his ability to learn & adapt quickly to execute high-stakes R&D projects even in unfavourable timelines. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Nilesh's technical expertise and adaptive learning have been crucial in the successful execution of complex R&D projects under tight deadlines. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    ]
  },
  {
    slug: "anunay",
    name: "Anunay",
    role: "Founder and COO",
    image: "/anunay.jpeg",
    desc: "Anunay is the co-founder and the Chief Operating Officer of Zoid Technologies. He is the head AI Scientist and leverages his deep technical expertise to lead R&D projects in his domain. He is the back-bone of the company and is responsible for core-company functions including manufacturing, communications, business operations, People Management and Talent Acquisition.",
    bio: [
      "Anunay is the co-founder and the Chief Operating Officer of Zoid Technologies. He is the head AI Scientist and leverages his deep technical expertise to lead R&D projects in his domain.",
      "Prior to ZOID, His deep interest in AI and Robotics was driven by his time as the Software Head of UAS-DTU. Under his leadership were a group 20+ young researchers who worked upon the toughest research problems in Aerial Robotics, Navigation, Electronics and Artificial Intelligence. His R&D projects in AI are vast and wide, anywhere from Human Action Recognition systems for disaster management to Drone based visual targetting systems for Simulator Development Division, Indian Army. His AI systems are deployed in real-life, on low SWAP hardware in harsh operating conditions.",
      "He is the back-bone of the company and is responsible for core-company functions including manufacturing, communications, business operations, People Management and Talent Acquisition. His multi-faceted role ensures the smooth functioning of Zoid, from technical R&D to essential business operations.",
      "Anunay's leadership in AI and company operations has been a cornerstone of Zoid's growth and stability."
    ]
  }
];

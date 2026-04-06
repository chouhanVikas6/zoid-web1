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
      "Aman Virmani is the Founder and the Chief Executive Officer of Zoid Technologies where he drives the vision and strategic roadmap of the Deep-Tech Defense Technology products.",
      "He leverages his industry connect, and vast techno-commercial experience to drive the team towards excellence.",
      "With a strong background in strategic leadership and business development, Aman has been instrumental in positioning Zoid as a key player in the defense technology sector. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "His vision for the company is to create sovereign, battle-ready technology that addresses the specific needs of modern conflicts. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
    slug: "anunay-varshney",
    name: "Anunay Varshney",
    role: "Founder and COO",
    image: "/anunay.jpeg",
    desc: "Anunay Varshney is the co-founder and the Chief Operating Officer of Zoid Technologies. He is the head AI Scientist and leverages his deep technical expertise to lead R&D projects in his domain. He is the back-bone of the company and is responsible for core-company functions including manufacturing, communications, business operations, People Management and Talent Acquisition.",
    bio: [
      "Anunay Varshney is the co-founder and the Chief Operating Officer of Zoid Technologies. He is the head AI Scientist and leverages his deep technical expertise to lead R&D projects in his domain.",
      "He is the back-bone of the company and is responsible for core-company functions including manufacturing, communications, business operations, People Management and Talent Acquisition. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "His multi-faceted role ensures the smooth functioning of Zoid, from technical R&D to essential business operations. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Anunay's leadership in AI and company operations has been a cornerstone of Zoid's growth and stability. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    ]
  }
];

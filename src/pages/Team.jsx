import SEO from "../components/SEO";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

const teamMembers = [
  {
    name: "Muhammad Affan",
    role: "CEO & Founder | Full-Stack Developer",
    image: "/assets/Team-Member-images/AffanPic.jpeg",
    description:
      "Affan leads NexoVate.Co with technical mastery and vision. As a full-stack developer and creative strategist, he oversees all services — from web & app development to automation, AI, and business innovation.",
    portfolio: "https://affann-portfolio.vercel.app/",
  },
  {
    name: "Hafiz Mohsin Ali",
    role: "Frontend Developer | Web Development Specialist",
    image: "/assets/Team-Member-images/MohsinPic.png",
    description:
      "Mohsin brings designs to life with React, Angular, and TailwindCSS. He ensures smooth, fast, and responsive UI across all devices and manages frontend architecture for client projects.",
    portfolio: "https://example.com/mohsinali-portfolio",
  },
  {
    name: "Himesh Dua",
    role: "Backend Developer | Database & API Engineer",
    image: "/assets/Team-Member-images/HimeshPic.jpg",
    description:
      "Himesh builds reliable, secure, and scalable backend systems using Node.js, Laravel, and .NET Core. He manages APIs, databases, and integrations that power every digital solution.",
    portfolio: "https://himeshdua.vercel.app/",
  },
  {
    name: "Hashir",
    role: "UI/UX Designer | Product Experience Developer",
    image: "/assets/Team-Member-images/HashirPic.png",
    description:
      "Hashir designs user-focused experiences and clean visual systems. From wireframes to final product design, he ensures every app and website is intuitive, aesthetic, and engaging.",
    portfolio: "https://hashir03042122258.github.io/newportfolio/",
  },
  {
    name: "Muhammad Umer",
    role: "SEO & Digital Marketing Strategist",
    image: "/assets/Team-Member-images/UmerPic.png",
    description:
      "Umer handles SEO, digital marketing, and social campaigns for all NexoVate.Co clients. His strategies boost brand visibility, website performance, and global online reach.",
    portfolio: "https://example.com/umer-portfolio",
  },
  {
    name: "Bilal Khan",
    role: "Vector Designer | Creative Visual Artist",
    image: "/assets/Team-Member-images/BilalPic.png",
    description:
      "Bilal specializes in vector graphics and creative design. He transforms concepts into powerful visuals that define NexoVate’s unique digital identity across projects.",
    portfolio: "https://bilal-portfolio-gules.vercel.app/",
  },
  {
    name: "Shehzad bin Rehman",
    role: "Graphic Designer & Social Media Marketer",
    image: "/assets/Team-Member-images/ShehzadPic.jpeg",
    description:
      "Shehzad brings brands to life through impactful graphic design and engaging social media content. His marketing insights help businesses grow their online presence effectively.",
    portfolio: "https://shehzad-portfolio-tau.vercel.app/",
  },
  {
    name: "Muhammad Yasir",
    role: "Photo & Video Editor | Visual Storyteller",
    image: "/assets/Team-Member-images/YasirPic.png",
    description:
      "Yasir transforms raw visuals into cinematic art. From promotional videos to creative edits, he enhances every NexoVate.Co project with professional-grade photo and video editing.",
    portfolio: "https://example.com/yasir-portfolio",
  },
];

export default function Team() {
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the 8 core members behind NexoVate.Co — experts managing all our services from design to development, AI, and marketing."
        keywords="team, developers, designers, backend, frontend, marketing, SEO, NexoVate"
      />

      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>

        <div className="relative z-10">
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Meet Our Core Team
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  The powerhouse behind every NexoVate.Co project — a compact, all-rounder team handling every service from concept to deployment.
                </p>
              </div>

              {/* Team Grid */}
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {/* Circular Image with Moving Light Border */}
                    <div className="relative w-56 h-56 mb-5 rounded-full flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-800">
                      {/* Rotating Bright Border */}
                      <div className="absolute inset-0 rounded-full border-[3px] border-transparent animate-spin-slow bg-gradient-to-tr from-transparent via-blue-400 to-transparent blur-sm opacity-80"></div>

                      {/* Inner mask circle */}
                      <div className="absolute inset-[3px] rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
                        <motion.img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                          style={{ objectPosition: "center 30%" }}
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-nexovate-blue-600 dark:text-nexovate-blue-400">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                      {member.description}
                    </p>

                    <motion.a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="mt-5 inline-block rounded-full px-4 py-2 text-sm font-medium transition
                                 bg-nexovate-blue-600 text-white hover:bg-nexovate-blue-700
                                 dark:bg-nexovate-blue-500 dark:hover:bg-nexovate-blue-400 shadow-md"
                    >
                      View Portfolio
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation CSS */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </>
  );
}

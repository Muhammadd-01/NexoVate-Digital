import SEO from "../components/SEO"
import { motion } from "framer-motion"
import ParticleBackground from "../components/ParticleBackground"

const teamMembers = [
  {
    name: "Muhammad Affan",
    role: "CEO & Founder | Full-Stack Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description:
      "Affan leads NexoVate.Co with technical mastery and vision. As a full-stack developer and creative strategist, he oversees all services — from web & app development to automation, AI, and business innovation.",
    portfolio: "https://affann-portfolio.vercel.app/",
  },
  {
    name: "Haffiz Mohsin Ali",
    role: "Frontend Developer | Web Development Specialist",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description:
      "Mohsin brings designs to life with React, Angular, and TailwindCSS. He ensures smooth, fast, and responsive UI across all devices and manages frontend architecture for client projects.",
    portfolio: "https://example.com/mohsinali-portfolio",
  },
  {
    name: "Himesh Dua",
    role: "Backend Developer | Database & API Engineer",
    image:
      "assets/Team-Member-images/1760013021624.jpg",
    description:
      "Himesh builds reliable, secure, and scalable backend systems using Node.js, Laravel, and .NET Core. He manages APIs, databases, and integrations that power every digital solution.",
    portfolio: "https://himeshdua.vercel.app/",
  },
  {
    name: "Hashir",
    role: "UI/UX Designer | Product Experience Developer",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description:
      "Hashir designs user-focused experiences and clean visual systems. From wireframes to final product design, he ensures every app and website is intuitive, aesthetic, and engaging.",
    portfolio: "https://example.com/hashir-portfolio",
  },
  {
    name: "Muhammad Umer",
    role: "SEO & Digital Marketing Strategist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description:
      "Umer handles SEO, digital marketing, and social campaigns for all NexoVate.Co clients. His strategies boost brand visibility, website performance, and global online reach.",
    portfolio: "https://example.com/umer-portfolio",
  },
]

export default function Team() {
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the 5 core members behind NexoVate.Co — experts managing all our services from design to development, AI, and marketing."
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

              {/* ✅ Team Grid */}
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      className="w-40 h-40 rounded-full object-cover mb-4 border-2 border-nexovate-blue-500 shadow-lg"
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-sm text-nexovate-blue-600 dark:text-nexovate-blue-400">{member.role}</p>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{member.description}</p>

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
    </>
  )
}

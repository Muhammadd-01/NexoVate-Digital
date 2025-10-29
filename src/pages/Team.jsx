import SEO from "../components/SEO"
import { motion } from "framer-motion"
import ParticleBackground from "../components/ParticleBackground"

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "John has over 20 years of experience in software development and business leadership.",
    portfolio: "https://example.com/john-portfolio",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "Jane is a tech visionary with a passion for innovative solutions and emerging technologies.",
    portfolio: "https://example.com/jane-portfolio",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "Mike brings a wealth of experience in full-stack development and software architecture.",
    portfolio: "https://example.com/mike-portfolio",
  },
  {
    name: "Sarah Lee",
    role: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "Sarah is passionate about creating intuitive and beautiful user experiences.",
    portfolio: "https://example.com/sarah-portfolio",
  },
]

export default function Team() {
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the talented individuals behind NexoVate.Co's success"
        keywords="team, software development, tech experts"
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
                  Meet Our Team
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  The talented individuals driving innovation and excellence at NexoVate.Co
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <img
                      className="w-40 h-40 rounded-full object-cover mb-4"
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="text-sm text-nexovate-blue-600 dark:text-nexovate-blue-400">{member.role}</p>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">{member.description}</p>

                    {/* ✅ Added Portfolio Button */}
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

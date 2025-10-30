import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ParticleBackground from "../components/ParticleBackground"

const portfolioData = [
  {
    category: "Web Applications",
    description:
      "High-performance and secure web apps developed using React, Laravel, and .NET — tailored for global scale and seamless UX.",
    projects: [
      {
        title: "MediTrack - Healthcare Dashboard",
        image: "/portfolio/webapp1.jpg",
      },
      {
        title: "EduSmart LMS Platform",
        image: "/portfolio/webapp2.jpg",
      },
      {
        title: "SaaS Analytics Suite",
        image: "/portfolio/webapp3.jpg",
      },
    ],
  },
  {
    category: "Professional Websites",
    description:
      "Elegant, SEO-optimized websites designed for startups, brands, and agencies — built to attract, engage, and convert.",
    projects: [
      {
        title: "Nexovate Official Website",
        image: "/portfolio/website1.jpg",
      },
      {
        title: "Healthify Medical Portal",
        image: "/portfolio/website2.jpg",
      },
      {
        title: "TechLaunch Startup Site",
        image: "/portfolio/website3.jpg",
      },
    ],
  },
  {
    category: "Mobile Applications",
    description:
      "Native-like cross-platform apps using React Native & Flutter — built for performance, design, and real-world reliability.",
    projects: [
      {
        title: "FitMate Fitness Tracker",
        image: "/portfolio/mobile1.jpg",
      },
      {
        title: "QuickCart eCommerce App",
        image: "/portfolio/mobile2.jpg",
      },
      {
        title: "MindEase Meditation App",
        image: "/portfolio/mobile3.jpg",
      },
    ],
  },
  {
    category: "Graphic Design & Branding",
    description:
      "Visual storytelling that defines identity — from logos and posters to full-scale brand systems and digital assets.",
    projects: [
      {
        title: "Aura Cosmetics Brand Kit",
        image: "/portfolio/design1.jpg",
      },
      {
        title: "ByteWave Tech Identity",
        image: "/portfolio/design2.jpg",
      },
      {
        title: "Elite Gym Poster Series",
        image: "/portfolio/design3.jpg",
      },
    ],
  },
  {
    category: "SEO & Marketing Campaigns",
    description:
      "From keyword domination to content virality — our SEO & ad campaigns consistently drive measurable growth.",
    projects: [
      {
        title: "Digital Health SEO Campaign",
        image: "/portfolio/seo1.jpg",
      },
      {
        title: "TechLaunch Google Ads Series",
        image: "/portfolio/seo2.jpg",
      },
      {
        title: "EcoStore Organic Traffic Boost",
        image: "/portfolio/seo3.jpg",
      },
    ],
  },
  {
    category: "Photo & Video Editing",
    description:
      "Professional cinematic edits, reels, and ad-ready visuals — crafted to tell stories that convert attention into emotion.",
    projects: [
      {
        title: "Luxury Car Promo Edit",
        image: "/portfolio/video1.jpg",
      },
      {
        title: "Fashion Reel Series",
        image: "/portfolio/video2.jpg",
      },
      {
        title: "Corporate Product Shoot Edit",
        image: "/portfolio/video3.jpg",
      },
    ],
  },
]

export default function Portfolios() {
  return (
    <div className="relative min-h-screen">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        <SEO
          title="Our Creative Work"
          description="Explore Nexovate’s portfolio — from web apps and websites to branding, SEO, and cinematic video projects."
          keywords="portfolio, web apps, websites, branding, SEO, video editing, Nexovate digital agency"
        />

        <section className="text-gray-900 dark:text-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* HEADER */}
            <div className="mx-auto max-w-2xl text-center mb-20">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Creative Work
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Real-world projects that merge innovation, design, and results.
              </p>
            </div>

            {/* PORTFOLIO SECTIONS */}
            {portfolioData.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="mb-24"
              >
                <h3 className="text-2xl font-semibold mb-3 text-nexovate-blue-500">
                  {section.category}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
                  {section.description}
                </p>

                {/* PROJECT GRID */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {section.projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: projectIndex * 0.1 }}
                      className="bg-white dark:bg-[#0A2A43] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-5">
                        <h4 className="text-lg font-semibold mb-3">
                          {project.title}
                        </h4>

                        {/* Single Button */}
                        <motion.a
                          href="/projects"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="rounded-md bg-gray-700 dark:bg-gray-200 dark:text-gray-900 px-3.5 py-2 text-sm font-medium text-white hover:bg-gray-600 transition"
                        >
                          View Project
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <div className="mt-20 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Impressed by our projects? Let’s create your next digital success story.
              </p>
              <Link
                to="/contact"
                className="inline-block rounded-md bg-nexovate-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-nexovate-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nexovate-blue-600"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

import SEO from "../components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import TiltCard from "../components/TiltCard";
import {
  FadeInWhenVisible,
  StaggerContainer,
  StaggerItem,
  GradientText,
  MagneticButton,
} from "../components/Animations";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

const categoryIcons = {
  "Web Applications": CodeBracketIcon,
  "Professional Websites": GlobeAltIcon,
  "Mobile Applications": DevicePhoneMobileIcon,
  "Graphic Design & Branding": PaintBrushIcon,
  "SEO & Marketing Campaigns": MagnifyingGlassIcon,
  "Photo & Video Editing": VideoCameraIcon,
};

const categoryColors = {
  "Web Applications": "from-blue-500/20 to-cyan-500/20",
  "Professional Websites": "from-purple-500/20 to-pink-500/20",
  "Mobile Applications": "from-green-500/20 to-emerald-500/20",
  "Graphic Design & Branding": "from-orange-500/20 to-yellow-500/20",
  "SEO & Marketing Campaigns": "from-teal-500/20 to-cyan-500/20",
  "Photo & Video Editing": "from-red-500/20 to-rose-500/20",
};

const portfolioData = [
  {
    category: "Web Applications",
    description:
      "High-performance and secure web apps developed using React, Laravel, and .NET — tailored for global scale and seamless UX.",
    projects: [
      {
        title: "MediTrack - Healthcare Dashboard",
        image: "/portfolio/webapp1.jpg",
        tags: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "EduSmart LMS Platform",
        image: "/portfolio/webapp2.jpg",
        tags: ["Laravel", "Vue.js", "MySQL"],
      },
      {
        title: "SaaS Analytics Suite",
        image: "/portfolio/webapp3.jpg",
        tags: [".NET", "React", "PostgreSQL"],
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
        tags: ["React", "TailwindCSS"],
      },
      {
        title: "Healthify Medical Portal",
        image: "/portfolio/website2.jpg",
        tags: ["Next.js", "Strapi"],
      },
      {
        title: "TechLaunch Startup Site",
        image: "/portfolio/website3.jpg",
        tags: ["WordPress", "Elementor"],
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
        tags: ["Flutter", "Firebase"],
      },
      {
        title: "QuickCart eCommerce App",
        image: "/portfolio/mobile2.jpg",
        tags: ["React Native", "Node.js"],
      },
      {
        title: "MindEase Meditation App",
        image: "/portfolio/mobile3.jpg",
        tags: ["Flutter", "Supabase"],
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
        tags: ["Illustrator", "Photoshop"],
      },
      {
        title: "ByteWave Tech Identity",
        image: "/portfolio/design2.jpg",
        tags: ["Figma", "Brand Design"],
      },
      {
        title: "Elite Gym Poster Series",
        image: "/portfolio/design3.jpg",
        tags: ["Canva", "Print Design"],
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
        tags: ["On-Page SEO", "Analytics"],
      },
      {
        title: "TechLaunch Google Ads Series",
        image: "/portfolio/seo2.jpg",
        tags: ["Google Ads", "PPC"],
      },
      {
        title: "EcoStore Organic Traffic Boost",
        image: "/portfolio/seo3.jpg",
        tags: ["Content SEO", "Backlinks"],
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
        tags: ["Premiere Pro", "After Effects"],
      },
      {
        title: "Fashion Reel Series",
        image: "/portfolio/video2.jpg",
        tags: ["DaVinci Resolve", "Motion"],
      },
      {
        title: "Corporate Product Shoot Edit",
        image: "/portfolio/video3.jpg",
        tags: ["Lightroom", "Photoshop"],
      },
    ],
  },
];

export default function Portfolios() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = portfolioData.map((p) => p.category);

  const filteredData = activeCategory
    ? portfolioData.filter((p) => p.category === activeCategory)
    : portfolioData;

  return (
    <div className="relative min-h-screen">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        <SEO
          title="Our Creative Work"
          description="Explore Nexovate's portfolio — from web apps and websites to branding, SEO, and cinematic video projects."
          keywords="portfolio, web apps, websites, branding, SEO, video editing, Nexovate digital agency"
        />

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* HEADER */}
            <FadeInWhenVisible>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/20 mb-6"
                >
                  <SparklesIcon className="w-4 h-4 text-accent-purple" />
                  <span className="text-sm text-accent-purple font-medium">Our Portfolio</span>
                </motion.div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                  <GradientText>Our Creative Work</GradientText>
                </h1>
                <p className="text-lg leading-8 text-gray-400">
                  Real-world projects that merge innovation, design, and results.
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Category Filter Pills */}
            <FadeInWhenVisible delay={0.1}>
              <div className="flex flex-wrap justify-center gap-3 mb-16">
                <motion.button
                  onClick={() => setActiveCategory(null)}
                  className={`
                    px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                    ${!activeCategory
                      ? "bg-gradient-to-r from-nexovate-blue-600 to-accent-purple text-white shadow-glow"
                      : "glass border border-white/10 text-gray-300 hover:text-white hover:border-white/20"
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  All Projects
                </motion.button>
                {categories.map((category) => {
                  const Icon = categoryIcons[category];
                  return (
                    <motion.button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`
                        px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                        ${activeCategory === category
                          ? "bg-gradient-to-r from-nexovate-blue-600 to-accent-purple text-white shadow-glow"
                          : "glass border border-white/10 text-gray-300 hover:text-white hover:border-white/20"
                        }
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {category.split(" ")[0]}
                    </motion.button>
                  );
                })}
              </div>
            </FadeInWhenVisible>

            {/* PORTFOLIO SECTIONS */}
            <AnimatePresence mode="wait">
              {filteredData.map((section, sectionIndex) => {
                const CategoryIcon = categoryIcons[section.category];
                const gradientColor = categoryColors[section.category];

                return (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                    className="mb-24"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${gradientColor}`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        {CategoryIcon && <CategoryIcon className="w-6 h-6 text-white" />}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {section.category}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1 max-w-2xl">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    {/* PROJECT GRID */}
                    <StaggerContainer staggerDelay={0.1}>
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {section.projects.map((project, projectIndex) => (
                          <StaggerItem key={project.title}>
                            <TiltCard
                              tiltAmount={10}
                              scaleOnHover={1.03}
                              className="rounded-2xl overflow-hidden glass border border-white/10 group"
                              onMouseEnter={() => setHoveredProject(`${section.category}-${projectIndex}`)}
                              onMouseLeave={() => setHoveredProject(null)}
                            >
                              {/* Image Container */}
                              <div className="relative h-52 overflow-hidden">
                                <motion.img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                {/* Hover overlay with view button */}
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: hoveredProject === `${section.category}-${projectIndex}` ? 1 : 0
                                  }}
                                  className="absolute inset-0 bg-nexovate-blue-600/20 backdrop-blur-sm flex items-center justify-center"
                                >
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{
                                      scale: hoveredProject === `${section.category}-${projectIndex}` ? 1 : 0
                                    }}
                                    className="p-4 rounded-full bg-white/20 backdrop-blur-md"
                                  >
                                    <ArrowTopRightOnSquareIcon className="w-8 h-8 text-white" />
                                  </motion.div>
                                </motion.div>

                                {/* Tags */}
                                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                                  {project.tags?.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Content */}
                              <div className="p-5">
                                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-nexovate-blue-400 transition-colors">
                                  {project.title}
                                </h4>

                                {/* View Button */}
                                <motion.a
                                  href="/projects"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-nexovate-blue-600/80 to-accent-purple/80 text-sm font-medium text-white hover:from-nexovate-blue-500 hover:to-accent-purple transition-all duration-300"
                                >
                                  View Project
                                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                </motion.a>
                              </div>
                            </TiltCard>
                          </StaggerItem>
                        ))}
                      </div>
                    </StaggerContainer>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* CTA */}
            <FadeInWhenVisible>
              <div className="mt-12 text-center">
                <div className="inline-block glass rounded-3xl p-10 border border-white/10 max-w-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Impressed by our projects?
                  </h3>
                  <p className="text-gray-400 mb-8">
                    Let's create your next digital success story together.
                  </p>
                  <MagneticButton strength={0.15}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-nexovate-blue-600 to-accent-purple px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-300"
                    >
                      Start Your Project
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>
    </div>
  );
}

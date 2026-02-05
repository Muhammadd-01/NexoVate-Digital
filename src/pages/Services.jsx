import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CameraIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  SparklesIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import ParticleBackground from "../components/ParticleBackground";
import TiltCard from "../components/TiltCard";
import {
  FadeInWhenVisible,
  StaggerContainer,
  StaggerItem,
  GradientText,
  MagneticButton,
  SpotlightCard,
  FloatingElement,
  BlurReveal
} from "../components/Animations";

const services = [
  {
    name: "Software Development",
    description:
      "We build scalable and high-performance software systems using Laravel, .NET, Node.js, and Python — tailored for startups and enterprises at a fraction of global market rates. From dashboards to automation tools, we code reliable solutions that grow with your business.",
    icon: CodeBracketIcon,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Full-Stack Web Development",
    description:
      "NexoVate specializes in modern, responsive, and SEO-friendly websites using React, Next.js, Angular, and TailwindCSS. Whether it's a landing page or a full enterprise system — we deliver fast, secure, and futuristic digital platforms.",
    icon: GlobeAltIcon,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Mobile App Development (iOS & Android)",
    description:
      "We design and develop mobile apps using Flutter and React Native — with seamless UI, smooth performance, and cloud-powered backends.",
    icon: DevicePhoneMobileIcon,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Graphic & Vector Design",
    description:
      "From branding kits to vector illustrations, our designers craft visuals that define your brand identity.",
    icon: PaintBrushIcon,
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    name: "UI/UX Design",
    description:
      "We design sleek, user-friendly, and conversion-optimized interfaces backed by user research.",
    icon: SparklesIcon,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    name: "Photo Editing",
    description:
      "Professional retouching, lighting fixes, and color correction for clean & branded visuals.",
    icon: CameraIcon,
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
  {
    name: "Video Editing",
    description:
      "From social media clips to cinematic edits — smooth transitions, effects, and full production.",
    icon: CameraIcon,
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    name: "SEO Services",
    description:
      "Keyword research, backlinks, on-page optimization, and SEO strategies that deliver real ranking results.",
    icon: MagnifyingGlassIcon,
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    name: "Digital Marketing",
    description:
      "We handle social media growth, ad campaigns, content marketing, and brand management.",
    icon: GlobeAltIcon,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "Website Maintenance & Support",
    description:
      "Updates, security patches, and performance optimization to keep your site running smoothly.",
    icon: WrenchScrewdriverIcon,
    gradient: "from-slate-500/20 to-gray-500/20",
  },
  {
    name: "Shopify Store Development",
    description:
      "We build premium, high-converting Shopify stores — custom themes, product setup, payment integrations, Shopify apps, and full store automation.",
    icon: ShoppingBagIcon,
    gradient: "from-lime-500/20 to-green-500/20",
  },
];

const technologies = {
  frontend: ["HTML • CSS • JS", "React", "Next.js", "Angular", "TailwindCSS"],
  backend: ["Laravel", ".NET • C#", "Node.js", "Express.js", "Python"],
  fullstack: ["MERN Stack", "MEAN Stack"],
  mobile: ["Flutter", "React Native"],
  design: ["Canva", "Illustrator", "Photoshop"],
  video: ["Premiere Pro", "After Effects"],
};

export default function Services() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        <SEO
          title="Our Services"
          description="Explore Nexovate's global digital services — from full-stack web development to vector design, SEO, mobile apps, and marketing — all priced lower than global market rates."
          keywords="web development, software development, mobile apps, vector design, SEO, UI/UX, photo editing, video editing, digital marketing, affordable packages"
        />

        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* Header */}
            <FadeInWhenVisible>
              <div className="mx-auto max-w-2xl lg:text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nexovate-blue-500/10 border border-nexovate-blue-500/20 mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-nexovate-blue-400 animate-pulse" />
                  <span className="text-sm text-nexovate-blue-400 font-medium">Our Services</span>
                </motion.div>

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
                  <GradientText>Professional Digital Services</GradientText>
                  <br />
                  <span className="text-white">at Global Quality — Local Prices</span>
                </h1>
                <p className="text-lg leading-8 text-gray-400">
                  We provide all-in-one digital solutions — from development and design to SEO and marketing — at rates lower than global competitors.
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Services Grid */}
            <div className="mx-auto mt-20 max-w-2xl lg:mt-24 lg:max-w-none">
              <StaggerContainer staggerDelay={0.1}>
                <dl className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
                  {services.map((service, index) => (
                    <StaggerItem key={service.name}>
                      <TiltCard
                        tiltAmount={6}
                        className={`
                          p-6 rounded-2xl 
                          bg-gradient-to-br ${service.gradient}
                          backdrop-blur-xl border border-white/10
                          hover:border-white/20 transition-all duration-300
                          group cursor-default
                        `}
                      >
                        <dt className="flex items-center gap-x-4 text-lg font-semibold leading-7 text-white">
                          <motion.div
                            className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                          >
                            <service.icon
                              className="h-6 w-6 text-nexovate-blue-400 icon-glow"
                              aria-hidden="true"
                            />
                          </motion.div>
                          {service.name}
                        </dt>
                        <dd className="mt-4 text-base leading-7 text-gray-400">
                          {service.description}
                        </dd>
                      </TiltCard>
                    </StaggerItem>
                  ))}
                </dl>
              </StaggerContainer>
            </div>

            {/* Technologies Section */}
            <FadeInWhenVisible delay={0.2}>
              <div className="mt-32">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">
                    <GradientText>Technologies We Use</GradientText>
                  </h2>
                  <p className="text-gray-400">Cutting-edge tech stack for modern solutions</p>
                </div>

                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {/* Frontend */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-nexovate-blue-500" />
                      Frontend
                    </h3>
                    <div className="space-y-2">
                      {technologies.frontend.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-nexovate-blue-500/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-accent-purple" />
                      Backend
                    </h3>
                    <div className="space-y-2">
                      {technologies.backend.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-accent-purple/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Full Stack */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-accent-cyan" />
                      Full-Stack
                    </h3>
                    <div className="space-y-2">
                      {technologies.fullstack.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-accent-cyan/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
                  {/* Mobile */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-500" />
                      Mobile
                    </h3>
                    <div className="space-y-2">
                      {technologies.mobile.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-green-500/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Design */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-pink-500" />
                      Design
                    </h3>
                    <div className="space-y-2">
                      {technologies.design.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-pink-500/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Video */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-orange-500" />
                      Video & Motion
                    </h3>
                    <div className="space-y-2">
                      {technologies.video.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-orange-500/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>

            {/* CTA */}
            <FadeInWhenVisible delay={0.3}>
              <div className="mt-24 text-center">
                <div className="glass rounded-3xl p-12 max-w-3xl mx-auto border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Want a custom package?
                  </h3>
                  <p className="text-gray-400 mb-8">
                    Let's create your digital growth plan today.
                  </p>
                  <MagneticButton strength={0.15}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-nexovate-blue-600 to-accent-purple px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-300"
                    >
                      Get in Touch
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
        </div>
      </div>
    </div>
  );
}

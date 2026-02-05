import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";
import TiltCard from "../components/TiltCard";
import {
  FadeInWhenVisible,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  GradientText,
  MagneticButton,
  SpotlightCard,
  BlurReveal,
  FloatingElement
} from "../components/Animations";
import { CheckCircleIcon, SparklesIcon, HeartIcon, UsersIcon, LightBulbIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const expertise = [
  "Custom Software & Full-Stack Web Development",
  "Mobile App Development for iOS & Android",
  "Graphic Design, Vector Illustrations & Branding",
  "UI/UX Design & Interface Optimization",
  "Video & Photo Editing Services",
  "SEO, Digital Marketing & Online Growth Strategies",
  "Shopify & E-Commerce Store Development",
];

const values = [
  {
    icon: LightBulbIcon,
    title: "Innovation",
    description: "Pushing creative and technical boundaries to achieve better results.",
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
  },
  {
    icon: HeartIcon,
    title: "Integrity",
    description: "Transparent communication and ethical practices in every project.",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
  },
  {
    icon: SparklesIcon,
    title: "Excellence",
    description: "Delivering high-quality solutions that meet and exceed expectations.",
    color: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: UsersIcon,
    title: "Collaboration",
    description: "Building lasting partnerships with clients through teamwork.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Discover how NexoVate Digital empowers businesses with full-stack development, mobile apps, design, SEO, and digital marketing — all at global-quality standards."
        keywords="about us, web development, software development, mobile apps, UI/UX, SEO, video editing, photo editing, digital marketing"
      />
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>

        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nexovate-blue-500/10 border border-nexovate-blue-500/20 mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-nexovate-blue-400 animate-pulse" />
                  <span className="text-sm text-nexovate-blue-400 font-medium">About Us</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <GradientText>About NexoVate Digital</GradientText>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Empowering businesses through innovative digital solutions since 2025
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Our Story */}
              <SlideIn direction="left">
                <div className="glass rounded-2xl p-8 border border-white/10 h-full">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-nexovate-blue-500/20">
                      <SparklesIcon className="w-6 h-6 text-nexovate-blue-400" />
                    </span>
                    Our Story
                  </h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    NexoVate Digital started with a simple idea: to provide businesses with high-quality digital solutions at affordable rates. The concept was born in late 2024, and since January 2025, we've been turning that vision into reality.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Today, we deliver a wide range of services including full-stack web development, mobile apps, graphic and vector design, UI/UX, video and photo editing, SEO, and digital marketing. Our goal is to combine creativity, technology, and efficiency to help businesses grow and stand out online.
                  </p>
                </div>
              </SlideIn>

              {/* Our Expertise */}
              <SlideIn direction="right">
                <div className="glass rounded-2xl p-8 border border-white/10 h-full">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-accent-purple/20">
                      <CheckCircleIcon className="w-6 h-6 text-accent-purple" />
                    </span>
                    Our Expertise
                  </h2>
                  <StaggerContainer staggerDelay={0.08}>
                    <ul className="space-y-3">
                      {expertise.map((item, index) => (
                        <StaggerItem key={index}>
                          <motion.li
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            whileHover={{ x: 5 }}
                          >
                            <CheckCircleIcon className="w-5 h-5 text-nexovate-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                          </motion.li>
                        </StaggerItem>
                      ))}
                    </ul>
                  </StaggerContainer>
                </div>
              </SlideIn>
            </div>

            {/* Our Approach & Impact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <FadeInWhenVisible>
                <TiltCard tiltAmount={5} className="glass rounded-2xl p-8 border border-white/10 h-full">
                  <h2 className="text-2xl font-bold mb-4 text-white">Our Approach</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We believe in understanding our clients' unique challenges first. By combining strategy, technology, and design, we create solutions that solve real problems while enhancing brand identity and online presence. Every project is treated with care, ensuring functionality, aesthetics, and scalability.
                  </p>
                </TiltCard>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.1}>
                <TiltCard tiltAmount={5} className="glass rounded-2xl p-8 border border-white/10 h-full">
                  <h2 className="text-2xl font-bold mb-4 text-white">Our Impact</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We've helped businesses streamline operations, improve digital presence, and achieve measurable growth. From startups to established enterprises, our solutions are designed to scale and adapt to each client's needs.
                  </p>
                </TiltCard>
              </FadeInWhenVisible>
            </div>

            {/* Our Values */}
            <FadeInWhenVisible>
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">
                  <GradientText>Our Values</GradientText>
                </h2>
                <StaggerContainer staggerDelay={0.1}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                      <StaggerItem key={index}>
                        <TiltCard
                          tiltAmount={8}
                          className={`p-6 rounded-2xl bg-gradient-to-br ${value.color} backdrop-blur-xl border border-white/10 h-full text-center`}
                        >
                          <motion.div
                            className="inline-flex p-4 rounded-xl bg-white/10 mb-4"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                          >
                            <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                          </motion.div>
                          <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                          <p className="text-gray-400 text-sm">{value.description}</p>
                        </TiltCard>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </div>
            </FadeInWhenVisible>

            {/* Partner CTA */}
            <FadeInWhenVisible>
              <div className="text-center">
                <div className="inline-block glass rounded-3xl p-12 border border-white/10 max-w-2xl">
                  <h2 className="text-2xl font-bold text-white mb-4">Partner with Us</h2>
                  <p className="text-gray-400 mb-8">
                    Whether you need a complete website, a mobile app, or a full digital marketing plan, NexoVate Digital delivers practical, high-quality solutions tailored to your business goals.
                  </p>
                  <MagneticButton strength={0.15}>
                    <Link
                      to="/packages"
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
        </div>
      </div>
    </>
  );
};

export default About;

import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { FaProjectDiagram, FaUsers, FaUserTie, FaClock, FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiFlutter, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase, SiNextdotjs } from "react-icons/si";
import SEO from "../components/SEO";
import { motion, useScroll, useTransform } from "framer-motion";
import Slider from "../components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FadeInWhenVisible,
  SlideIn,
  GradientText,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  MagneticButton,
  HoverLiftCard,
  IconBounce
} from "../components/Animations";
import TiltCard from "../components/TiltCard";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";
import { Player } from "@lottiefiles/react-lottie-player";
import confetti from "canvas-confetti";
import { useQuery, gql } from "@apollo/client";

const GET_FEATURED_PROJECTS = gql`
  query GetFeaturedProjects {
    featuredProjects {
      id
      title
      description
      image
    }
  }
`;

const features = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development",
  "Cloud Solutions",
  "DevOps Services",
  "AI & Machine Learning",
];

const stats = [
  { id: 1, name: "Projects Completed", value: 500, suffix: "+", icon: FaProjectDiagram },
  { id: 2, name: "Satisfied Clients", value: 200, suffix: "+", icon: FaUsers },
  { id: 3, name: "Team Members", value: 50, suffix: "+", icon: FaUserTie },
  { id: 4, name: "Years of Experience", value: 10, suffix: "+", icon: FaClock },
];

const techStack = [
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: FaDocker, name: "Docker", color: "#2496ED" },
  { icon: FaAws, name: "AWS", color: "#FF9900" },
];

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote:
      "NexoVate Digital transformed our business with their innovative digital solutions. Their team's expertise and dedication are unmatched.",
  },
  {
    name: "Jane Smith",
    role: "CTO, InnovateTech",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote:
      "Working with NexoVate Digital was a game-changer for our startup. They delivered high-quality digital products that exceeded our expectations.",
  },
  {
    name: "Mike Johnson",
    role: "Founder, DataDrive",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote:
      "The AI-powered solutions provided by NexoVate Digital have significantly improved our data analysis capabilities. Highly recommended!",
  },
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with AI-powered recommendations",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Healthcare App",
    description: "Revolutionary healthcare management system",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "FinTech Solution",
    description: "Secure and scalable financial technology platform",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const slides = [
  {
    title: "Innovative Software Solutions",
    description: "Transforming ideas into powerful applications",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Cutting-edge Technologies",
    description: "Leveraging the latest in tech for your success",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Expert Team",
    description: "Dedicated professionals committed to your growth",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const { loading, error, data } = useQuery(GET_FEATURED_PROJECTS);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#0ea5e9', '#a855f7', '#22d3ee'],
    });
  };

  return (
    <>
      <SEO
        title="Home"
        description="NexoVate Digital - Your partner for innovative digital solutions"
        keywords="digital solutions, web development, mobile apps, cloud solutions"
      />

      <div className="relative aurora-bg">
        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingElement duration={8} distance={30} className="absolute top-20 left-[10%]">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-nexovate-blue-500/20 to-accent-purple/20 blur-3xl" />
          </FloatingElement>
          <FloatingElement duration={10} distance={40} className="absolute top-40 right-[15%]">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-accent-cyan/20 to-nexovate-blue-500/20 blur-3xl" />
          </FloatingElement>
          <FloatingElement duration={12} distance={25} className="absolute bottom-40 left-[20%]">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 blur-3xl" />
          </FloatingElement>
        </div>

        {/* Hero Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                {/* Main heading with gradient */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                >
                  <span className="gradient-text-animated">
                    <Typewriter
                      words={["Innovative", "Scalable", "Cutting-edge", "Premium"]}
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                  <br />
                  <span className="text-white text-glow">Software Solutions</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-8 text-lg sm:text-xl leading-8 text-gray-300 max-w-2xl mx-auto"
                >
                  At NexoVate Digital, we transform your ideas into powerful, scalable, and user-friendly digital
                  solutions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
                >
                  <MagneticButton strength={0.2}>
                    <Link
                      to="/contact"
                      className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-nexovate-blue-600 to-nexovate-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg overflow-hidden"
                      onClick={handleConfetti}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <span className="relative">Get Started</span>
                      <motion.span
                        className="relative"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </MagneticButton>

                  <Link
                    to="/services"
                    className="group text-base font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    Learn more
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Marquee */}
        <div className="py-12 border-y border-white/5">
          <div className="marquee">
            <div className="marquee-content">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 mx-8 text-gray-400 hover:text-white transition-colors group"
                >
                  <tech.icon
                    className="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]"
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-medium whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <Slider slides={slides} />

        {/* Stats Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <StaggerContainer staggerDelay={0.15}>
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <StaggerItem key={stat.id}>
                    <TiltCard
                      tiltAmount={8}
                      className="glass rounded-2xl p-8 text-center hover:shadow-glow transition-shadow duration-500"
                    >
                      <div className="flex flex-col items-center gap-4">
                        <motion.div
                          className="p-4 rounded-2xl bg-gradient-to-br from-nexovate-blue-500/20 to-accent-purple/20"
                          whileHover={{ scale: 1.1 }}
                        >
                          <stat.icon className="w-8 h-8 text-nexovate-blue-400 icon-glow" />
                        </motion.div>
                        <dd className="text-4xl sm:text-5xl font-bold gradient-text">
                          <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                        </dd>
                        <dt className="text-sm text-gray-400">{stat.name}</dt>
                      </div>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </dl>
            </StaggerContainer>
          </div>
        </div>

        {/* Features Section */}
        <SlideIn direction="left">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  <GradientText>Comprehensive Digital Solutions</GradientText>
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  From custom software development to cloud solutions, we offer a wide range of services to help your
                  business thrive in the digital world.
                </p>
                <StaggerContainer staggerDelay={0.1}>
                  <div className="grid grid-cols-1 gap-3">
                    {features.map((feature, index) => (
                      <StaggerItem key={feature}>
                        <HoverLiftCard className="flex items-center gap-4 glass rounded-xl p-4 cursor-default">
                          <div className="p-2 rounded-lg bg-nexovate-blue-500/20">
                            <CheckCircleIcon className="h-5 w-5 text-nexovate-blue-400" />
                          </div>
                          <span className="text-gray-200">{feature}</span>
                        </HoverLiftCard>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </div>

              <div className="relative">
                <motion.div style={{ scale }}>
                  <TiltCard tiltAmount={5} className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </TiltCard>
                </motion.div>
                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-nexovate-blue-500/20 to-accent-purple/20 rounded-3xl blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </SlideIn>

        {/* Project Showcase Slider */}
        <FadeInWhenVisible>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              <GradientText>Our Latest Projects</GradientText>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Explore our portfolio of innovative digital solutions
            </p>
            <Slider slides={projects} />
          </div>
        </FadeInWhenVisible>

        {/* Featured Projects Section */}
        <FadeInWhenVisible>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              <GradientText>Featured Projects</GradientText>
            </h2>
            <p className="text-center text-gray-400 mb-12">Showcasing our best work</p>

            {loading && (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-nexovate-blue-500"></div>
              </div>
            )}
            {error && <p className="text-center text-red-400">Error loading featured projects: {error.message}</p>}
            {data && (
              <StaggerContainer staggerDelay={0.15}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {data.featuredProjects.map((project) => (
                    <StaggerItem key={project.id}>
                      <TiltCard
                        tiltAmount={8}
                        className="glass rounded-2xl overflow-hidden group"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                          <p className="text-gray-400">{project.description}</p>
                        </div>
                      </TiltCard>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            )}
          </div>
        </FadeInWhenVisible>

        {/* Testimonials Section */}
        <FadeInWhenVisible>
          <div className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                <GradientText>What Our Clients Say</GradientText>
              </h2>
              <p className="text-center text-gray-400 mb-12">Trusted by businesses worldwide</p>
              <Slider
                slides={testimonials.map((t) => ({ ...t, image: t.image, title: t.name, description: t.quote }))}
              />
            </div>
          </div>
        </FadeInWhenVisible>

        {/* CTA Section */}
        <FadeInWhenVisible>
          <div className="relative py-24 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-nexovate-blue-600/90 to-accent-purple/80" />
            <div className="absolute inset-0 bg-mesh-gradient opacity-50" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Digitally Transform Your Business?
              </motion.h2>
              <motion.p
                className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Let's discuss how our innovative digital solutions can help your business grow and succeed in the digital
                era.
              </motion.p>
              <MagneticButton strength={0.15}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-nexovate-blue-600 shadow-xl hover:bg-gray-100 transition-all duration-300"
                  onClick={handleConfetti}
                >
                  Get Started Today
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

        {/* Lottie Animation */}
        <div className="py-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_iorpbol0.json"
              style={{ height: "300px", width: "300px" }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router-dom"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import { FaProjectDiagram, FaUsers, FaUserTie, FaClock } from "react-icons/fa"
import SEO from "../components/SEO"
import { motion, useScroll, useTransform } from "framer-motion"
import Slider from "../components/Slider"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FadeInWhenVisible, SlideIn, GradientText } from "../components/Animations"
import CountUp from "react-countup"
import { Typewriter } from "react-simple-typewriter"
import { Player } from "@lottiefiles/react-lottie-player"
import confetti from "canvas-confetti"
import { useQuery, gql } from "@apollo/client"

const GET_FEATURED_PROJECTS = gql`
  query GetFeaturedProjects {
    featuredProjects {
      id
      title
      description
      image
    }
  }
`

const features = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development",
  "Cloud Solutions",
  "DevOps Services",
  "AI & Machine Learning",
]

const stats = [
  { id: 1, name: "Projects Completed", value: 500, suffix: "+", icon: FaProjectDiagram },
  { id: 2, name: "Satisfied Clients", value: 200, suffix: "+", icon: FaUsers },
  { id: 3, name: "Team Members", value: 50, suffix: "+", icon: FaUserTie },
  { id: 4, name: "Years of Experience", value: 10, suffix: "+", icon: FaClock },
]

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
]

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
]

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
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])

  const { loading, error, data } = useQuery(GET_FEATURED_PROJECTS)

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }

  return (
    <>
      <SEO
        title="Home"
        description="NexoVate Digital - Your partner for innovative digital solutions"
        keywords="digital solutions, web development, mobile apps, cloud solutions"
      />
      <div className="relative">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-14"
        >
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl font-bold tracking-tight text-content sm:text-6xl"
                >
                  <GradientText>
                    <Typewriter
                      words={["Innovative", "Scalable", "Cutting-edge"]}
                      loop={0}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </GradientText>
                  <br />
                  Software Solutions
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 text-lg leading-8 text-content"
                >
                  At NexoVate Digital, we transform your ideas into powerful, scalable, and user-friendly digital
                  solutions.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
                >
                  <Link
                    to="/contact"
                    className="rounded-md bg-nexovate-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-nexovate-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nexovate-blue-600 transition-colors duration-200"
                    onClick={handleConfetti}
                  >
                    Get started
                  </Link>
                  <Link
                    to="/services"
                    className="text-sm font-semibold leading-6 text-content hover:text-nexovate-blue-400 transition-colors duration-200"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 flow-root sm:mt-24"
              >
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* Slider section */}
        <Slider slides={slides} />
        {/* Stats section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <dt className="text-base leading-7 text-content">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-content sm:text-5xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 mr-2 text-nexovate-blue-400" />
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
        {/* Features section */}
        <SlideIn>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-content">
                  Comprehensive Digital Solutions
                </h2>
                <p className="mt-6 text-lg text-content">
                  From custom software development to cloud solutions, we offer a wide range of services to help your
                  business thrive in the digital world.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-4">
                  {features.map((feature) => (
                    <motion.div key={feature} className="flex items-center gap-3" whileHover={{ x: 10 }}>
                      <CheckCircleIcon className="h-5 w-5 text-nexovate-blue-400" />
                      <span className="text-content">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <motion.div style={{ scale }}>
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration"
                    className="rounded-lg shadow-2xl"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-nexovate-blue-600/10 rounded-lg" />
              </div>
            </div>
          </div>
        </SlideIn>
        {/* Project Showcase Slider */}
        <FadeInWhenVisible>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-content text-center mb-12">
              Our Latest Projects
            </h2>
            <Slider slides={projects} />
          </div>
        </FadeInWhenVisible>
        {/* Featured Projects Section */}
        <FadeInWhenVisible>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-content text-center mb-12">
              Featured Projects
            </h2>
            {loading && <p className="text-center text-content">Loading featured projects...</p>}
            {error && <p className="text-center text-red-400">Error loading featured projects: {error.message}</p>}
            {data && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.featuredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-content">{project.title}</h3>
                      <p className="text-content">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </FadeInWhenVisible>
        {/* Testimonials section */}
        <FadeInWhenVisible>
          <div className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-content text-center mb-12">
                What Our Clients Say
              </h2>
              <Slider
                slides={testimonials.map((t) => ({ ...t, image: t.image, title: t.name, description: t.quote }))}
              />
            </div>
          </div>
        </FadeInWhenVisible>
        {/* CTA section */}
        <FadeInWhenVisible>
          <div className="bg-gradient-to-r from-nexovate-blue-600 to-nexovate-blue-700 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8">
                Ready to Digitally Transform Your Business?
              </h2>
              <p className="text-lg text-white/80 mb-12">
                Let's discuss how our innovative digital solutions can help your business grow and succeed in the
                digital era.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <Link
                  to="/contact"
                  className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-nexovate-blue-600 shadow-lg hover:bg-gray-100 transition-colors duration-200"
                  onClick={handleConfetti}
                >
                  Get Started Today
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeInWhenVisible>
        {/* Lottie Animation */}
        <div className="py-16">
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_iorpbol0.json"
            style={{ height: "300px", width: "300px" }}
          />
        </div>
      </div>
    </>
  )
}


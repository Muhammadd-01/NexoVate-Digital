import { Link } from "react-router-dom"
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FadeInWhenVisible, SlideIn, GradientText } from "../components/Animations"

const features = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development",
  "Cloud Solutions",
  "DevOps Services",
  "AI & Machine Learning",
]

const stats = [
  { id: 1, name: "Projects Completed", value: "500+" },
  { id: 2, name: "Satisfied Clients", value: "200+" },
  { id: 3, name: "Team Members", value: "50+" },
  { id: 4, name: "Years of Experience", value: "10+" },
]

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote:
      "GrowHub.Co transformed our business with their innovative software solutions. Their team's expertise and dedication are unmatched.",
  },
  {
    name: "Jane Smith",
    role: "CTO, InnovateTech",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote:
      "Working with GrowHub.Co was a game-changer for our startup. They delivered a high-quality product that exceeded our expectations.",
  },
  {
    name: "Mike Johnson",
    role: "Founder, DataDrive",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    quote:
      "The AI solutions provided by GrowHub.Co have significantly improved our data analysis capabilities. Highly recommended!",
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

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  const projectSliderSettings = {
    ...sliderSettings,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <>
      <SEO
        title="Home"
        description="GrowHub.Co - Your partner for innovative software solutions"
        keywords="software development, web applications, mobile apps, cloud solutions"
      />
      <div className="relative isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-growhub-red-600 to-white opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                >
                  <GradientText>Innovative Software Solutions</GradientText>
                  <br />
                  for Your Business Growth
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 text-lg leading-8 text-gray-600"
                >
                  At GrowHub.Co, we transform your ideas into powerful, scalable, and user-friendly software
                  applications.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-10 flex items-center justify-center gap-x-6"
                >
                  <Link
                    to="/contact"
                    className="rounded-md bg-growhub-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-growhub-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-growhub-red-600 transition-colors duration-200"
                  >
                    Get started
                  </Link>
                  <Link
                    to="/services"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-growhub-red-600 transition-colors duration-200"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Showcase Slider */}
        <FadeInWhenVisible>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">Our Latest Projects</h2>
            <Slider {...projectSliderSettings}>
              {projects.map((project, index) => (
                <div key={index} className="px-4">
                  <motion.div whileHover={{ y: -10 }} className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-white/80">{project.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </FadeInWhenVisible>

        {/* Features section */}
        <SlideIn>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Comprehensive Software Solutions</h2>
                <p className="mt-6 text-lg text-gray-600">
                  From custom software development to cloud solutions, we offer a wide range of services to help your
                  business thrive in the digital world.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-4">
                  {features.map((feature) => (
                    <motion.div key={feature} className="flex items-center gap-3" whileHover={{ x: 10 }}>
                      <CheckCircleIcon className="h-5 w-5 text-growhub-red-600" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-growhub-red-600/10 rounded-lg" />
              </div>
            </div>
          </div>
        </SlideIn>

        {/* Testimonials section */}
        <FadeInWhenVisible>
          <div className="bg-gradient-to-b from-white to-growhub-red-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
                What Our Clients Say
              </h2>
              <Slider {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="px-4">
                    <motion.div whileHover={{ y: -10 }} className="bg-white rounded-lg shadow-lg p-8 mx-4">
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Stats section */}
        <SlideIn direction="right">
          <div className="bg-gradient-to-b from-growhub-red-50 to-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat) => (
                  <motion.div key={stat.id} className="text-center" whileHover={{ scale: 1.05 }}>
                    <div className="text-4xl font-bold text-growhub-red-600">{stat.value}</div>
                    <div className="mt-2 text-sm text-gray-600">{stat.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SlideIn>

        {/* CTA section */}
        <FadeInWhenVisible>
          <div className="bg-gradient-to-r from-growhub-red-600 to-growhub-red-700 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-8">Ready to Transform Your Business?</h2>
              <p className="text-lg text-white/80 mb-12">
                Let's discuss how our innovative software solutions can help your business grow and succeed in the
                digital age.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <Link
                  to="/contact"
                  className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-growhub-red-600 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Get Started Today
                </Link>
              </motion.div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </>
  )
}


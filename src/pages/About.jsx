import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about Grow Hub Solutions and our mission to empower businesses with premium digital solutions"
        keywords="about us, digital solutions, graphic design, website development, social media services"
      />
      <div className="relative z-10 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            About Grow Hub Solutions
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <p className="mb-4">
                Grow Hub Solutions is dedicated to empowering businesses with premium graphic design, website
                development, and strategic social media services. With over 4 years of experience, we aim to help brands
                thrive in today's competitive digital space.
              </p>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="mb-4">To be a global leader in digital solutions for businesses.</p>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-4">Deliver creative strategies and designs that drive measurable results.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Let's build something amazing together!</h2>
              <p className="mb-4">Email us at contact@growhubsolutions.com</p>
              <Link
                to="/contact"
                className="inline-block rounded-md bg-growhub-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-growhub-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-growhub-red-600"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default About


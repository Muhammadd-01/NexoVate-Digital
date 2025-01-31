import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ParticleBackground from "../components/ParticleBackground"

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about Grow Hub Solutions and our mission to empower businesses with premium digital solutions"
        keywords="about us, digital solutions, graphic design, website development, social media services"
      />
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              About GrowHub Solutions
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="mb-4">
                  Founded in 2019, GrowHub Solutions emerged from a passion for empowering businesses through innovative
                  digital solutions. Our journey began with a small team of dedicated professionals who believed in the
                  power of technology to transform businesses.
                </p>
                <p className="mb-4">
                  Today, we've grown into a dynamic agency, serving clients across various industries. Our commitment to
                  excellence and customer satisfaction has been the driving force behind our success.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
                <ul className="list-disc pl-5 mb-4">
                  <li>Custom Website Development</li>
                  <li>E-commerce Solutions</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Graphic Design and Branding</li>
                  <li>Digital Marketing Strategies</li>
                  <li>Software Development</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <p className="mb-4">
                  At GrowHub Solutions, we believe in a collaborative approach. We work closely with our clients to
                  understand their unique needs and challenges. This allows us to deliver tailored solutions that drive
                  real results.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="list-disc pl-5 mb-4">
                  <li>Innovation: We stay at the forefront of technology trends.</li>
                  <li>Integrity: We build trust through honest and transparent practices.</li>
                  <li>Quality: We deliver excellence in every project we undertake.</li>
                  <li>Collaboration: We believe in the power of teamwork and partnership.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
                <p className="mb-4">
                  Over the years, we've helped numerous businesses increase their online visibility, streamline their
                  operations, and achieve significant growth. Our client success stories are a testament to our
                  commitment and expertise.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">Ready to grow with us?</h2>
              <p className="mb-4">Let's discuss how we can help your business thrive in the digital landscape.</p>
              <Link
                to="/contact"
                className="inline-block rounded-md bg-growhub-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-growhub-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-growhub-red-600"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About


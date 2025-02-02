import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ParticleBackground from "../components/ParticleBackground"

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about NexoVate Digital and our mission to empower businesses with innovative AI, IoT, and cloud solutions"
        keywords="about us, digital innovation, AI solutions, IoT integration, cloud technologies, digital transformation"
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
              About NexoVate Digital
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
                  Founded in 2020, NexoVate Digital emerged from a vision to revolutionize businesses through cutting-edge digital solutions. Our journey began with a team of tech enthusiasts who saw the transformative potential of AI, IoT, and cloud technologies.
                </p>
                <p className="mb-4">
                  Today, we've evolved into a dynamic innovation hub, serving clients across various industries. Our commitment to pushing the boundaries of technology and delivering measurable results has been the cornerstone of our success.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
                <ul className="list-disc pl-5 mb-4">
                  <li>Artificial Intelligence & Machine Learning</li>
                  <li>Internet of Things (IoT) Integration</li>
                  <li>Cloud Solutions & Architecture</li>
                  <li>Custom Software Development</li>
                  <li>Data Analytics & Visualization</li>
                  <li>Digital Transformation Strategies</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <p className="mb-4">
                  At NexoVate Digital, we believe in a forward-thinking, collaborative approach. We work closely with our clients to understand their unique challenges and envision future possibilities. This allows us to deliver innovative solutions that not only solve current problems but also pave the way for future growth and innovation.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="list-disc pl-5 mb-4">
                  <li>Innovation: We constantly push the boundaries of what's possible in digital technology.</li>
                  <li>Integrity: We uphold the highest standards of ethical conduct in all our dealings.</li>
                  <li>Excellence: We strive for excellence in every solution we deliver.</li>
                  <li>Collaboration: We believe in the power of teamwork and partnership with our clients.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
                <p className="mb-4">
                  Since our inception, we've helped numerous businesses undergo digital transformations, optimize their operations, and achieve unprecedented growth. Our success stories span various sectors, from healthcare and finance to manufacturing and retail, showcasing the versatility and effectiveness of our innovative solutions.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">Ready to innovate with us?</h2>
              <p className="mb-4">Let's explore how our cutting-edge solutions can transform your business and drive growth.</p>
              <Link
                to="/contact"
                className="inline-block rounded-md bg-nexovate-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-nexovate-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nexovate-purple-600"
              >
                Start Your Digital Journey
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
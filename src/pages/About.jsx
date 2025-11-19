import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import ParticleBackground from "../components/ParticleBackground"

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
                  NexoVate Digital started with a simple idea: to provide businesses with high-quality digital solutions at affordable rates. The concept was born in late 2024, and since January 2025, we've been turning that vision into reality. 
                </p>
                <p className="mb-4">
                  Today, we deliver a wide range of services including full-stack web development, mobile apps, graphic and vector design, UI/UX, video and photo editing, SEO, and digital marketing. Our goal is to combine creativity, technology, and efficiency to help businesses grow and stand out online.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
                <ul className="list-disc pl-5 mb-4">
                  <li>Custom Software & Full-Stack Web Development</li>
                  <li>Mobile App Development for iOS & Android</li>
                  <li>Graphic Design, Vector Illustrations & Branding</li>
                  <li>UI/UX Design & Interface Optimization</li>
                  <li>Video & Photo Editing Services</li>
                  <li>SEO, Digital Marketing & Online Growth Strategies</li>
                  <li>Shopify & E-Commerce Store Development</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                <p className="mb-4">
                  We believe in understanding our clients’ unique challenges first. By combining strategy, technology, and design, we create solutions that solve real problems while enhancing brand identity and online presence. Every project is treated with care, ensuring functionality, aesthetics, and scalability.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="list-disc pl-5 mb-4">
                  <li>Innovation: Pushing creative and technical boundaries to achieve better results.</li>
                  <li>Integrity: Transparent communication and ethical practices in every project.</li>
                  <li>Excellence: Delivering high-quality solutions that meet and exceed expectations.</li>
                  <li>Collaboration: Building lasting partnerships with clients through teamwork.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
                <p className="mb-4">
                  We’ve helped businesses streamline operations, improve digital presence, and achieve measurable growth. From startups to established enterprises, our solutions are designed to scale and adapt to each client’s needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">Partner with Us</h2>
              <p className="mb-4">
                Whether you need a complete website, a mobile app, or a full digital marketing plan, NexoVate Digital delivers practical, high-quality solutions tailored to your business goals.
              </p>
              <Link
                to="/packages"
                className="inline-block rounded-md bg-nexovate-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-nexovate-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nexovate-blue-600"
              >
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;

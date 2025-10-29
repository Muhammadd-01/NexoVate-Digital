import { Link } from "react-router-dom"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-nexovate-gradient/80 backdrop-blur-sm shadow-md mt-auto relative z-40"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="col-span-1">
            <Link to="/">
              <motion.img
                whileHover={{ scale: 1.05 }}
                className="h-14 w-auto rounded-xl shadow-md"
                src="src/assets/nexovate-logo.png"
                alt="NexoVate Digital"
              />
            </Link>
            <p className="mt-3 text-sm text-gray-200/90">
              Empowering businesses through innovative digital solutions.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-3 space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white">Connect</h3>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href="https://twitter.com"
                  className="flex items-center text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="flex items-center text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="flex items-center text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-gray-300/90">
            &copy; {new Date().getFullYear()} NexoVate Digital. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

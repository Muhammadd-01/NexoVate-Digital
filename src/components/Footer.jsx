import { Link } from "react-router-dom"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-growhub-red-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-md mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/">
              <img
                className="h-12 w-auto"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20png%20-FIY3oXNxi02MktABHYNa4FW1a6ZyOe.png"
                alt="GrowHub.Co"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Empowering businesses through innovative software solutions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-growhub-red-600 dark:hover:text-growhub-red-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-growhub-red-600 dark:hover:text-growhub-red-400"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-growhub-red-600 dark:hover:text-growhub-red-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-growhub-red-600 dark:hover:text-growhub-red-400"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-growhub-red-600 dark:hover:text-growhub-red-400"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-growhub-red-600 dark:hover:text-growhub-red-400"
                >
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://twitter.com"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-growhub-red-600 dark:hover:text-growhub-red-400 flex items-center"
                >
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-growhub-red-600 dark:hover:text-growhub-red-400 flex items-center"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-growhub-red-600 dark:hover:text-growhub-red-400 flex items-center"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} GrowHub.Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


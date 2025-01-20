import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-growhub-red-50 to-white shadow-md mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/">
              <img
                className="h-12 w-auto"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-09%20at%2011.09.49-jEPFeODsDv0Nb0UoZKqk2l6MtN29JS.jpeg"
                alt="GrowHub.Co"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600">Empowering businesses through innovative software solutions.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-growhub-red-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-sm text-gray-600 hover:text-growhub-red-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-growhub-red-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-growhub-red-600">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-growhub-red-600">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-growhub-red-600">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://twitter.com" className="text-sm text-gray-600 hover:text-growhub-red-600">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="text-sm text-gray-600 hover:text-growhub-red-600">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" className="text-sm text-gray-600 hover:text-growhub-red-600">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} GrowHub.Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


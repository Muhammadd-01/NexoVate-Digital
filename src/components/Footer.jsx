import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram, } from "react-icons/fa";
import { SiX } from "react-icons/si"; 
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const fullText = "Empowering businesses through innovative digital solutions.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

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
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto rounded-2xl shadow-lg"
                src="/assets/website-logo.png"
                alt="NexoVate Digital"
              />
            </Link>
            <p className="mt-3 text-sm text-gray-200/90">
              {displayText}
              <span className="blinking-cursor">|</span>
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition">
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
                <Link to="/services" className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-200 hover:text-nexovate-blue-300 transition">
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
                  href="https://www.instagram.com/nexovate_digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
                <li>
                <a
                  href="https://x.com/NexovateDigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  < SiX className="mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61577364006295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-200 hover:text-nexovate-blue-300 transition"
                >
                  <FaFacebook className="mr-2" /> Facebook
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

      {/* Blinking Cursor Animation */}
      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1em;
          color: white;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </motion.footer>
  );
}

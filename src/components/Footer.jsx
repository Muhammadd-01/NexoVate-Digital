import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconBounce } from "./Animations";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nexovate_digital/",
    icon: FaInstagram,
    color: "#E4405F"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
    color: "#0A66C2"
  },
  {
    name: "X",
    href: "https://x.com/NexovateDigital",
    icon: SiX,
    color: "#ffffff"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61577364006295",
    icon: FaFacebook,
    color: "#1877F2"
  },
];

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "Cloud Solutions", href: "/services" },
  ],
};

export default function Footer() {
  const fullText = "Empowering businesses through innovative digital solutions.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative mt-auto overflow-hidden"
    >
      {/* Gradient border at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-nexovate-blue-500 to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 backdrop-blur-xl -z-10" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 -z-10" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="group inline-block">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-nexovate-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  className="relative h-14 w-auto rounded-2xl shadow-lg"
                  src="/assets/website-logo.png"
                  alt="NexoVate Digital"
                />
              </motion.div>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed min-h-[60px]">
              {displayText}
              <motion.span
                className="inline-block w-[2px] h-4 ml-1 bg-nexovate-blue-400"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--hover-color': social.color }}
                >
                  <social.icon
                    className="w-5 h-5 text-gray-400 transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                  />
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"
                    style={{ backgroundColor: `${social.color}30` }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-nexovate-blue-500" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-nexovate-blue-400 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-purple" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-accent-purple transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              Get in Touch
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Have a project in mind? Let's create something amazing together.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-nexovate-blue-600/80 to-accent-purple/80 text-sm font-medium text-white hover:from-nexovate-blue-500 hover:to-accent-purple transition-all duration-300"
            >
              Contact Us
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} NexoVate Digital. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Crafted with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>in Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

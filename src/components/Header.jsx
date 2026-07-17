import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../contexts/ThemeContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Packages", href: "/packages" },
  { name: "Services", href: "/services" },
  { name: "Portfolios", href: "/portfolios" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -40, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`
        fixed top-2 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-full
        ${scrolled
          ? "bg-black/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border border-white/10 py-1"
          : "bg-black/20 backdrop-blur-md border border-white/5 py-3"
        }
      `}
    >
      {/* Curved gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-nexovate-blue-500 to-transparent opacity-50" />

      <nav
        className="relative mx-auto flex w-full items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo (Left) */}
        <div className="flex flex-1 justify-start">
          <Link to="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">NexoVate Digital</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex items-center"
            >
              {/* Logo glow effect */}
              <div className="absolute -inset-2 bg-nexovate-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                className="relative h-12 sm:h-14 md:h-16 lg:h-18 w-auto rounded-2xl shadow-lg"
                src="/assets/website-logo.png"
                alt="NexoVate Digital"
              />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Nav (Centered) */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-x-1">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className="relative px-4 py-2 group"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
                className={`
                  text-sm font-medium transition-colors duration-300
                  ${location.pathname === item.href
                    ? "text-nexovate-blue-400"
                    : "text-gray-300 group-hover:text-white"
                  }
                `}
              >
                {item.name}
              </motion.span>

              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-nexovate-blue-400 via-accent-cyan to-accent-purple rounded-full"
                initial={{ width: 0, x: "-50%" }}
                animate={{
                  width: location.pathname === item.href ? "60%" : 0,
                  x: "-50%"
                }}
                whileHover={{ width: "60%", x: "-50%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Hover glow */}
              <div className="absolute inset-0 -z-10 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* Right Section: Theme Toggle & Mobile Menu */}
        <div className="flex flex-1 justify-end items-center gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleTheme}
            className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 group overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SunIcon className="w-5 h-5 text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MoonIcon className="w-5 h-5 text-nexovate-blue-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <motion.button
              type="button"
              className="relative -m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-white overflow-hidden group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Toggle menu</span>
              {/* Button background */}
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="h-6 w-6 relative z-10" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="h-6 w-6 relative z-10" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden mt-4 rounded-3xl mx-2 border border-white/10 shadow-2xl relative"
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl -z-10" />

            <motion.div
              className="space-y-1 px-4 pb-4 pt-2"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                },
                closed: {}
              }}
            >
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                >
                  <Link
                    to={item.href}
                    className={`
                      block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300
                      ${location.pathname === item.href
                        ? "bg-gradient-to-r from-nexovate-blue-600/30 to-accent-purple/20 text-nexovate-blue-400 border border-nexovate-blue-500/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }
                    `}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center gap-3">
                      {/* Active indicator dot */}
                      {location.pathname === item.href && (
                        <motion.span
                          className="w-2 h-2 rounded-full bg-nexovate-blue-400"
                          layoutId="activeIndicator"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

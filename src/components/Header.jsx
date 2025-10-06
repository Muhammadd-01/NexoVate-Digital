import { Link, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../contexts/ThemeContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Packages", href: "/packages" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Team", href: "/team" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSettingsOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl shadow-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-2 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img
            src="src/assets/nexovate-logo.png"
            alt="NexoVate Digital"
            className="h-12 w-auto rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-6 mx-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold transition-colors duration-200 px-3 py-2 rounded-xl backdrop-blur-md bg-white/10 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30 ${
                location.pathname === item.href
                  ? "text-nexovate-blue-400"
                  : "text-white/90"
              }`}
            >
              <motion.span whileHover={{ scale: 1.05 }}>{item.name}</motion.span>
            </Link>
          ))}
        </div>

        {/* Right side icons: Profile + Settings */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          {/* Profile Icon */}
          <Link
            to="/profile"
            className="rounded-full p-2 backdrop-blur-md bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30 transition"
          >
            <UserCircleIcon className="h-6 w-6 text-nexovate-blue-700" />
          </Link>

          {/* Settings Wheel */}
          <div className="relative">
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="rounded-full p-2 backdrop-blur-md bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30 transition transform hover:rotate-12"
            >
              <Cog6ToothIcon className="h-6 w-6 text-nexovate-blue-700" />
            </button>
<AnimatePresence>
  {settingsOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.25 }}
      className="absolute right-0 mt-2 w-44 bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl rounded-2xl shadow-lg flex flex-col gap-2 p-3 z-50"
    >
      <Link
        to="/login"
        onClick={() => setSettingsOpen(false)}
        className={`px-3 py-2 rounded-xl backdrop-blur-md bg-nexovate-blue-600/70 hover:bg-nexovate-blue-500 font-semibold text-center transition ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Login
      </Link>
      <Link
        to="/register"
        onClick={() => setSettingsOpen(false)}
        className={`px-3 py-2 rounded-xl backdrop-blur-md bg-nexovate-blue-400/70 hover:bg-nexovate-blue-300 font-semibold text-center transition ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Register
      </Link>
      <button
        onClick={() => {
          toggleTheme();
          setSettingsOpen(false);
        }}
        className={`px-3 py-2 rounded-xl backdrop-blur-md bg-white/20 dark:bg-gray-800/20 hover:bg-white/40 dark:hover:bg-gray-700/30 font-semibold text-center transition ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </motion.div>
  )}
</AnimatePresence>


          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full p-2 backdrop-blur-md bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30 transition"
          >
            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl"
          >
            <div className="space-y-1 px-4 py-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-xl px-3 py-2 text-base font-medium ${
                    location.pathname === item.href
                      ? "bg-nexovate-blue-700 text-white"
                      : "text-white hover:bg-nexovate-blue-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

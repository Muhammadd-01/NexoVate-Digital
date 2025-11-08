import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Packages", href: "/packages" },
  { name: "Services", href: "/services" },
  { name: "Portfolios", href: "/portfolios" },
  // { name: "Testimonials", href: "/testimonials" },
  // { name: "Blog", href: "/blog" },
  { name: "Team", href: "/team" },
  // { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-nexovate-gradient shadow-md sticky top-0 z-50 backdrop-blur-sm"
    >
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-6"
        aria-label="Global"
      >
        {/* Logo (Left) */}
        <div className="flex flex-1 justify-start">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">NexoVate Digital</span>
            <motion.div whileHover={{ scale: 1.08 }} className="relative flex items-center">
              <img
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto rounded-2xl shadow-lg"
                src="/assets/nexovate-logo.jpg"
                alt="NexoVate Digital"
              />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Nav (Centered) */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 transition-colors duration-200 text-white ${
                location.pathname === item.href
                  ? "text-nexovate-blue-300"
                  : "hover:bg-nexovate-gradient hover:text-white"
              }`}
            >
              <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
                {item.name}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Right) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-nexovate-blue-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    location.pathname === item.href
                      ? "bg-nexovate-blue-800 text-white"
                      : "text-white hover:bg-nexovate-blue-700"
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

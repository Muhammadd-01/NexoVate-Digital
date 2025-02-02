import { Link, useLocation } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeContext } from "../contexts/ThemeContext"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Packages", href: "/packages" },
  { name: "Services", href: "/services" },
  { name: "Portfolios", href: "/portfolios" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Team", href: "/team" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-black shadow-md sticky top-0 z-50 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">NexoVate Digital</span>
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <img
                className="h-20 w-auto sm:h-24 rounded-2xl shadow-lg"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20png%20-FIY3oXNxi02MktABHYNa4FW1a6ZyOe.png"
                alt="NexoVate Digital"
              />
            </motion.div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-nexovate-blue-700 dark:text-nexovate-blue-200"
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 transition-colors duration-200 text-content ${
                location.pathname === item.href
                  ? "text-nexovate-purple-600 dark:text-nexovate-purple-400"
                  : "hover:text-nexovate-purple-600 dark:hover:text-nexovate-purple-400"
              }`}
            >
              <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
                {item.name}
              </motion.span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 bg-nexovate-blue-100 dark:bg-nexovate-blue-700 text-nexovate-blue-800 dark:text-nexovate-blue-200"
          >
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>
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
                      ? "bg-growhub-red-50 text-growhub-red-600 dark:bg-growhub-red-900 dark:text-growhub-red-400"
                      : "text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleTheme()
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}


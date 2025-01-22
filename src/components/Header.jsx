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
  }, [location])

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-white to-growhub-red-50 dark:from-gray-900 dark:to-gray-800 shadow-md sticky top-0 z-50 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">GrowHub.Co</span>
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <img
                className="h-12 w-auto sm:h-16 rounded-2xl shadow-lg"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20png%20-FIY3oXNxi02MktABHYNa4FW1a6ZyOe.png"
                alt="GrowHub.Co"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-growhub-red-600/20 to-transparent" />
            </motion.div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
                location.pathname === item.href
                  ? "text-growhub-red-600 dark:text-growhub-red-400"
                  : "text-gray-900 dark:text-gray-200 hover:text-growhub-red-600 dark:hover:text-growhub-red-400"
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
            className="rounded-full p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">GrowHub.Co</span>
                <img
                  className="h-8 w-auto"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20png%20-FIY3oXNxi02MktABHYNa4FW1a6ZyOe.png"
                  alt="GrowHub.Co"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 ${
                        location.pathname === item.href
                          ? "text-growhub-red-600 dark:text-growhub-red-400 bg-growhub-red-50 dark:bg-growhub-red-900/20"
                          : "text-gray-900 dark:text-gray-200 hover:bg-growhub-red-50 dark:hover:bg-growhub-red-900/20"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <button
                    onClick={toggleTheme}
                    className="rounded-full p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}


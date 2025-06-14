import { useLocation } from "react-router-dom"; // Add this

// Inside App function:


import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Chatbot from "./components/Chatbot"
import WhatsAppButton from "./components/WhatsAppButton"
import ParticleBackground from "./components/ParticleBackground"
import AnimatedBackground from "./components/AnimatedBackground"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import About from "./pages/About"
import Packages from "./pages/Packages"
import Services from "./pages/Services"
import Portfolios from "./pages/Portfolios"
import Testimonials from "./pages/Testimonials"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import Team from "./pages/Team"
import React, { useContext } from "react"
import { ThemeContext } from "./contexts/ThemeContext"

function App() {
  const [error, setError] = React.useState(null)
  const { theme } = useContext(ThemeContext)
const location = useLocation();

  React.useEffect(() => {
    const handleError = (error) => {
      console.error("Error caught by error boundary:", error)
      setError(error)
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [])

  if (error) {
    return <div className="p-4 text-red-600">An error occurred: {error.message}</div>
  }

  return (
    <div className={`flex flex-col min-h-screen ${theme === "dark" ? "dark" : ""}`}>
   {location.pathname === "/" && (
  <AnimatedBackground>
    <ParticleBackground key={location.pathname} />
  </AnimatedBackground>
)}


      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          className="flex-grow relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end space-y-4"
         style={{ position: "fixed", bottom: "1rem", right: "1rem", width: "auto" }}
         >
        <Chatbot />
        <WhatsAppButton />
        <ScrollToTop />
      </div>
      <Toaster position="top-right" />
      
    </div>
  )
}

export default App


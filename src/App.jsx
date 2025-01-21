import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Chatbot from "./components/Chatbot"
import WhatsAppButton from "./components/WhatsAppButton"
import ParticleBackground from "./components/ParticleBackground"; // Import the particle background
import Home from "./pages/Home"
import Packages from "./pages/Packages"
import Services from "./pages/Services"
import Portfolios from "./pages/Portfolios"
import Testimonials from "./pages/Testimonials"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Career from "./pages/Career"
import Contact from "./pages/Contact"
import Team from "./pages/Team"
import React from "react"

function App() {
  const [error, setError] = React.useState(null)

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
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
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
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-4">
        <Chatbot />
        <WhatsAppButton />
      </div>
      <Toaster position="top-right" />
    </div>
  )
}

export default App


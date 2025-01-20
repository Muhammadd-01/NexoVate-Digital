import React, { Suspense, lazy } from "react"; // Import Suspense from React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax"
import { Toaster } from "react-hot-toast"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Chatbot from "./components/Chatbot"
import WhatsAppButton from "./components/WhatsAppButton"
import BackgroundAnimation from "./components/BackgroundAnimation"
import LoadingSpinner from "./components/LoadingSpinner"

// Lazy load pages
const Home = lazy(() => import("./pages/Home"))
const Packages = lazy(() => import("./pages/Packages"))
const Services = lazy(() => import("./pages/Services"))
const Portfolios = lazy(() => import("./pages/Portfolios"))
const Testimonials = lazy(() => import("./pages/Testimonials"))
const Blog = lazy(() => import("./pages/Blog"))
const BlogPost = lazy(() => import("./pages/BlogPost"))
const Career = lazy(() => import("./pages/Career"))
const Contact = lazy(() => import("./pages/Contact"))

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gradient-radial from-growhub-white via-growhub-red-50 to-growhub-red-100">
          <BackgroundAnimation />
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
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
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-4">
            <Chatbot />
            <WhatsAppButton />
          </div>
          <Toaster position="top-right" />
        </div>
      </Router>
    </ParallaxProvider>
  )
}

export default App


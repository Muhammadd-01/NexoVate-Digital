import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import WhatsAppButton from "./components/WhatsAppButton";
import ParticleBackground from "./components/ParticleBackground";
import AnimatedBackground from "./components/AnimatedBackground";
import AutoScrollToTop from "./components/AutoScrollToTop";
import { ScrollToTop } from "./components/CustomCursor";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Services from "./pages/Services";
import Portfolios from "./pages/Portfolios";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// New pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const [error, setError] = React.useState(null);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleError = (error) => {
      console.error("Error caught by error boundary:", error);
      setError(error);
    };
    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (error) {
    return <div className="p-4 text-red-600">An error occurred: {error.message}</div>;
  }

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>


      <div className="flex flex-col min-h-screen">
        {location.pathname === "/" && (
          <AnimatedBackground>
            <ParticleBackground key={location.pathname} />
          </AnimatedBackground>
        )}

        <Header />

        <div className="overflow-x-hidden flex-grow">
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
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />

                {/* Login/Register/Profile routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
        </div>

        <Footer />


        {/* Fixed action buttons on Left */}
        <div className="fixed bottom-4 left-4 z-40">
          <AutoScrollToTop />
        </div>

        {/* Floating Actions on Right */}
        <div
          className="fixed right-8 z-40 flex flex-col items-center space-y-4 transition-all duration-500 ease-in-out"
          style={{
            bottom: isScrolled ? "104px" : "32px"
          }}
        >
          <div className="relative group">
            <Chatbot />
          </div>
          <div
            className="transition-all duration-500 ease-in-out"
          >
            <WhatsAppButton />
          </div>
        </div>

        {/* Smooth scroll to top - now with progress ring */}
        <ScrollToTop />

        <Toaster position="top-right" />
      </div>
    </div>
  );
}

export default App;

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
import AutoScrollToTop from "./components/AutoScrollToTop";
import { ScrollToTop } from "./components/CustomCursor";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
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

import { servicesData } from "./data/servicesData";

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

  const getDynamicBackground = () => {
    const path = location.pathname;
    
    // Check if it's a specific service page
    if (path.startsWith("/services/")) {
      const serviceId = path.split("/")[2];
      const service = servicesData.find(s => s.id === serviceId);
      if (service && service.bgImage) {
        return { type: "image", url: service.bgImage };
      }
    }
    
    // Map other routes to specific themes
    if (path === "/portfolios") {
      return { type: "image", url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" };
    } else if (path === "/about") {
      return { type: "image", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" };
    } else if (path === "/contact") {
      return { type: "image", url: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop" };
    } else if (path === "/packages") {
      return { type: "image", url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop" };
    } else if (path === "/team") {
      return { type: "image", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" };
    } else if (path === "/services") {
      return { type: "image", url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" };
    }
    
    // Default video for Home and others
    return { type: "video", url: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-background-27218-large.mp4" };
  };

  const background = getDynamicBackground();

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>


      <div className="flex flex-col min-h-screen">
        {/* Global Spatial Background */}
        <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
          {/* Dynamic Background Layer */}
          <AnimatePresence mode="wait">
            {background.type === "video" ? (
              <motion.video 
                key={background.url}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={background.url} type="video/mp4" />
              </motion.video>
            ) : (
              <motion.div
                key={background.url}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover bg-center bg-cover"
                style={{ backgroundImage: `url(${background.url})` }}
              />
            )}
          </AnimatePresence>

          {/* Animated Spatial Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-nexovate-blue-600/20 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-purple/20 blur-[150px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-teal-500/10 blur-[100px]"
          />

          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
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
                <Route path="/services/:id" element={<ServiceDetail />} />
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

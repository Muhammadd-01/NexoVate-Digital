import React, { Suspense, lazy } from "react"; // Import Suspense from React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import WhatsAppButton from "./components/WhatsAppButton";
import BackgroundAnimation from "./components/BackgroundAnimation";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Packages = lazy(() => import("./pages/Packages"));
const Services = lazy(() => import("./pages/Services"));
const Portfolios = lazy(() => import("./pages/Portfolios"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Background Animation */}
        <BackgroundAnimation />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
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

        {/* Footer */}
        <Footer />

        {/* Chatbot */}
        <Chatbot />

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

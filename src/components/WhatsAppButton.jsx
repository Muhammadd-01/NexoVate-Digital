import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
  const phoneNumber = "03128538773";
  const location = useLocation();
  const pathname = location.pathname;

  const getSectionName = (path) => {
    const map = {
      "/": "Home",
      "/about": "About",
      "/services": "Services",
      "/packages": "Packages",
      "/portfolios": "Portfolios",
      "/testimonials": "Testimonials",
      "/blog": "Blog",
      "/career": "Career",
      "/contact": "Contact",
      "/team": "Team",
    };

    if (path.startsWith("/blog/")) return "Blog Post";

    return map[path] || "Website";
  };

  const section = getSectionName(pathname);
  const message = `Hello,👋 I was exploring the "${section}" section on the NexoVate Digital and I’d like to know more.`;

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="text-2xl" />
    </motion.button>
  );
};

export default WhatsAppButton;

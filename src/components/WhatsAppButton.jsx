import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  const phoneNumber = "03128538773"
  const message = "Hello, I would like to know more about GrowHub Solutions."

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <motion.button
      onClick={handleClick}
      className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="text-2xl" />
    </motion.button>
  )
}

export default WhatsAppButton


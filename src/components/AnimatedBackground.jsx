import React from "react"
import { motion } from "framer-motion"
import ParticleBackground from "./ParticleBackground"

const AnimatedBackground = ({ children }) => {
  return (
    <motion.div
      className="absolute inset-0 z-[-1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParticleBackground />
      {children}
    </motion.div>
  )
}

export default AnimatedBackground


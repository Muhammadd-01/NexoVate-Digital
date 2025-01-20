import { motion } from "framer-motion"

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="relative w-16 h-16"
      >
        <div className="absolute w-full h-full border-4 border-growhub-red-200 rounded-full"></div>
        <div className="absolute w-full h-full border-4 border-growhub-red-600 rounded-full border-t-transparent animate-spin"></div>
      </motion.div>
    </div>
  )
}

export default LoadingSpinner


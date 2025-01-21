import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-64 sm:h-96 overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          variants={{
            enter: (direction) => ({
              x: direction > 0 ? 1000 : -1000,
              opacity: 0,
            }),
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1,
            },
            exit: (direction) => ({
              zIndex: 0,
              x: direction < 0 ? 1000 : -1000,
              opacity: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-full h-full"
        >
          <img
            src={slides[currentIndex].image || "/placeholder.svg"}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center px-4">
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">{slides[currentIndex].title}</h2>
              <p className="text-sm sm:text-xl text-white">{slides[currentIndex].description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 sm:p-2 focus:outline-none"
        onClick={prevSlide}
      >
        <ChevronLeftIcon className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
      </button>
      <button
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 sm:p-2 focus:outline-none"
        onClick={nextSlide}
      >
        <ChevronRightIcon className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
      </button>
    </div>
  )
}

export default Slider


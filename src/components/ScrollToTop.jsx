import { useState, useEffect } from "react"
import { ChevronUpIcon } from "@heroicons/react/24/solid"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 p-2 bg-growhub-red-600 text-white rounded-full cursor-pointer hover:bg-growhub-red-700 transition-colors duration-300"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </div>
      )}
    </>
  )
}

export default ScrollToTop


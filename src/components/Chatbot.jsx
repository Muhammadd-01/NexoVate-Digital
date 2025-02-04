import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaComments, FaTimes } from "react-icons/fa"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const botResponses = {
    greeting: ["Hello! How can I assist you today?", "Welcome to NexoVate Digital! What can I help you with?"],
    services: [
      "We offer a wide range of services including web development, mobile app development, and cloud solutions. Would you like more details on any specific service?",
    ],
    pricing: [
      "Our pricing varies depending on the project scope. For a custom quote, please fill out our contact form or speak with one of our representatives.",
    ],
    contact: [
      "You can reach us through our contact form on the website, or call us at (123) 456-7890. Would you like me to direct you to our contact page?",
    ],
    default: [
      "I'm not sure I understand. Could you please rephrase that?",
      "I'm still learning! For more complex queries, it might be best to speak with one of our representatives.",
    ],
  }

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)]
    } else if (lowerMessage.includes("service")) {
      return botResponses.services[0]
    } else if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return botResponses.pricing[0]
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("reach")) {
      return botResponses.contact[0]
    } else {
      return botResponses.default[Math.floor(Math.random() * botResponses.default.length)]
    }
  }

  const handleSend = () => {
    if (input.trim() === "") return

    setMessages([...messages, { text: input, sender: "user" }])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse = getBotResponse(input)
      setMessages((messages) => [...messages, { text: botResponse, sender: "bot" }])
      setIsTyping(false)
    }, 1000)
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true)
      setTimeout(() => {
        setMessages([{ text: botResponses.greeting[0], sender: "bot" }])
        setIsTyping(false)
      }, 1000)
    }
  }, [isOpen])

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-nexovate-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-nexovate-blue-500 transition-colors duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaComments className="text-2xl" />}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl w-80 overflow-hidden"
          >
            <div className="bg-nexovate-blue-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">Chat with us</h3>
            </div>
            <div className="h-80 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.sender === "user" ? "bg-nexovate-blue-600 text-white" : "bg-gray-200"
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="text-left">
                  <span className="inline-block p-2 rounded-lg bg-gray-200">Typing...</span>
                </div>
              )}
            </div>
            <div className="p-4 border-t">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-nexovate-blue-600"
                  placeholder="Type a message..."
                />
                <button
                  onClick={handleSend}
                  className="bg-nexovate-blue-600 text-white p-2 rounded-r-lg hover:bg-nexovate-blue-500 transition-colors duration-300"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Chatbot


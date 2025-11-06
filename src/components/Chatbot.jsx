import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaComments, FaTimes } from "react-icons/fa"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  // 🔹 NexoVate info
  const siteInfo = {
    email: "contactnexovate@gmail.com",
    phone: "+92 345 6789101",
    address: "Lahore, Pakistan",
    website: "https://nexovate.vercel.app",
  }

  // 🔹 Predefined responses
  const botResponses = {
    greeting: [
      "Hello 👋 Welcome to NexoVate Digital! How can I help you today?",
      "Hi there! 😊 I’m your virtual assistant from NexoVate Digital.",
    ],

    team: [
      "Our team consists of expert full-stack developers, designers, and strategists passionate about building next-gen digital products. 💻✨",
      "We have a creative team focused on web, app, and AI solutions. Would you like to see more details about each member?",
    ],

    services: [
      `Here’s what we offer at NexoVate 💼:
      • Web Development (React, Angular, Laravel, .NET)
      • Mobile App Development
      • UI/UX Design
      • Cloud Integration & AI Solutions
      • Branding & Digital Marketing`,
    ],

    packages: [
      `💡 Our packages include:
      • Basic – Portfolio or small business site
      • Standard – Company website or eCommerce
      • Premium – Custom scalable solutions with cloud & AI integration
      Want me to send you pricing or project consultation details?`,
    ],

    contact: [
      `📞 You can contact us:
      • Email: <a href="mailto:${siteInfo.email}" class="text-blue-600 underline">${siteInfo.email}</a>
      • Phone: <a href="tel:${siteInfo.phone}" class="text-blue-600 underline">${siteInfo.phone}</a>
      • Address: ${siteInfo.address}
      • Website: <a href="${siteInfo.website}" target="_blank" class="text-blue-600 underline">${siteInfo.website}</a>`,
    ],

    thanks: ["You're welcome! 😊", "Happy to help! Let me know if you need anything else 💬"],

    default: [
      "Hmm, I didn’t quite get that 🤔. Try asking about our *services*, *team*, *packages*, or *contact*.",
      "I'm still learning! Please ask something like 'Tell me about your services' or 'How can I contact you?'",
    ],
  }

  // 🔹 Bot logic
  const getBotResponse = (message) => {
    const lower = message.toLowerCase()

    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)]
    } else if (lower.includes("team")) {
      return botResponses.team[Math.floor(Math.random() * botResponses.team.length)]
    } else if (lower.includes("service")) {
      return botResponses.services[Math.floor(Math.random() * botResponses.services.length)]
    } else if (lower.includes("package") || lower.includes("plan")) {
      return botResponses.packages[Math.floor(Math.random() * botResponses.packages.length)]
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone")) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)]
    } else if (lower.includes("thanks") || lower.includes("thank you")) {
      return botResponses.thanks[Math.floor(Math.random() * botResponses.thanks.length)]
    } else {
      return botResponses.default[Math.floor(Math.random() * botResponses.default.length)]
    }
  }

  // 🔹 Handle message send
  const handleSend = () => {
    if (input.trim() === "") return

    setMessages([...messages, { text: input, sender: "user" }])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse = getBotResponse(input)
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }])
      setIsTyping(false)
    }, 1000)
  }

  // 🔹 Initial greeting
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
            className="absolute bottom-16 right-0 bg-white text-black rounded-lg shadow-xl w-80 overflow-hidden"
          >
            <div className="bg-nexovate-blue-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">Chat with us</h3>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-2 text-black">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${message.sender === "user" ? "text-right" : "text-left"}`}
                  dangerouslySetInnerHTML={{
                    __html: `<span class="inline-block p-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-gray-100 text-black border border-gray-300"
                        : "bg-gray-200 text-black"
                    }">${message.text}</span>`,
                  }}
                />
              ))}
              {isTyping && (
                <div className="text-left text-black">
                  <span className="inline-block p-2 rounded-lg bg-gray-200">Typing...</span>
                </div>
              )}
            </div>

            <div className="p-4 border-t text-black">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-nexovate-blue-600 text-black"
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

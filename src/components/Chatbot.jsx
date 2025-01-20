import { useState, useEffect } from "react"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const botResponses = {
    greeting: ["Hello! How can I assist you today?", "Welcome to GrowHub Solutions! What can I help you with?"],
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
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80">
          <div className="bg-growhub-red text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Chat with us</h3>
            <button onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          <div className="h-80 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${message.sender === "user" ? "bg-growhub-red text-white" : "bg-gray-200"}`}
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
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="w-full p-2 border rounded-lg"
              placeholder="Type a message..."
            />
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-growhub-red text-white p-4 rounded-full shadow-lg">
          Chat
        </button>
      )}
    </div>
  )
}

export default Chatbot


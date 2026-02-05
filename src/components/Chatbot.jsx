import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane, FaTrash } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // NexoVate info
  const siteInfo = {
    email: "contactnexovate@gmail.com",
    phone: "+92 312 8538773",
    address: "Karachi, Pakistan",
    website: "https://nexovate.vercel.app",
  };

  // Predefined responses
  const botResponses = {
    greeting: [
      "Hello 👋 Welcome to NexoVate Digital! How can I help you today?",
      "Hi there! 😊 I'm your virtual assistant from NexoVate Digital.",
      "Assalamualaikum! 👋 How can NexoVate assist you today?",
    ],
    company: [
      "NexoVate Digital is a modern software house focused on innovation, quality, and real-world digital solutions 🚀",
      "We're a digital agency providing full-stack, AI, and branding solutions globally 🌍",
    ],
    mission: [
      "Our mission is to empower brands and individuals through intelligent design and technology 💡",
    ],
    founder: [
      "NexoVate was founded by passionate developers and designers from Pakistan 🇵🇰 — dedicated to helping businesses grow through technology.",
    ],
    team: [
      "Our team consists of expert full-stack developers, designers, and strategists passionate about building next-gen digital products. 💻✨",
    ],
    services: [
      `Here's what we offer at NexoVate 💼:\n• Web Development (React, Angular, Laravel, .NET)\n• Mobile App Development\n• UI/UX Design\n• Cloud Integration & AI Solutions\n• Branding & Digital Marketing`,
    ],
    technologies: [
      "We use modern technologies like React, Next.js, Angular, Laravel, Node.js, TailwindCSS, Python, and .NET ⚙️",
    ],
    projects: [
      "We've worked on web apps, eCommerce platforms, AI tools, and digital business solutions 🧠💻",
    ],
    packages: [
      `💡 Our packages include:\n• Basic – Portfolio or small business site\n• Standard – Company website or eCommerce\n• Premium – Custom scalable solutions with cloud & AI integration`,
    ],
    hiring: [
      "We're always open to creative and technical talent! 💼 You can email your CV to contactnexovate@gmail.com",
    ],
    contact: [
      `📞 You can contact us:\n• Email: ${siteInfo.email}\n• Phone: ${siteInfo.phone}\n• Address: ${siteInfo.address}`,
    ],
    location: [
      "We're based in Karachi, Pakistan 🇵🇰, but we work with global clients online 🌎",
    ],
    timing: [
      "Our team is active Monday to Saturday, 10 AM – 8 PM (PKT) ⏰",
    ],
    thanks: [
      "You're welcome! 😊",
      "Happy to help! Let me know if you need anything else 💬",
    ],
    default: [
      "Hmm, I didn't quite get that 🤔. Try asking about *services*, *team*, *projects*, *technologies*, or *contact*.",
      "I'm still learning! Please ask something like 'Tell me about your services' or 'Do you offer internships?'",
    ],
  };

  // Bot logic
  const getBotResponse = (message) => {
    const lower = message.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey") || lower.includes("salam"))
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    else if (lower.includes("nexovate") || lower.includes("who are you") || lower.includes("company"))
      return botResponses.company[Math.floor(Math.random() * botResponses.company.length)];
    else if (lower.includes("mission") || lower.includes("vision") || lower.includes("goal"))
      return botResponses.mission[0];
    else if (lower.includes("founder") || lower.includes("ceo") || lower.includes("owner"))
      return botResponses.founder[0];
    else if (lower.includes("team"))
      return botResponses.team[0];
    else if (lower.includes("service"))
      return botResponses.services[0];
    else if (lower.includes("tech") || lower.includes("stack") || lower.includes("language"))
      return botResponses.technologies[0];
    else if (lower.includes("project") || lower.includes("portfolio"))
      return botResponses.projects[0];
    else if (lower.includes("package") || lower.includes("plan") || lower.includes("pricing"))
      return botResponses.packages[0];
    else if (lower.includes("hire") || lower.includes("intern") || lower.includes("job"))
      return botResponses.hiring[0];
    else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone"))
      return botResponses.contact[0];
    else if (lower.includes("where") || lower.includes("location") || lower.includes("address"))
      return botResponses.location[0];
    else if (lower.includes("time") || lower.includes("open") || lower.includes("hours") || lower.includes("available"))
      return botResponses.timing[0];
    else if (lower.includes("thanks") || lower.includes("thank you"))
      return botResponses.thanks[Math.floor(Math.random() * botResponses.thanks.length)];
    else
      return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  // Handle message send
  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
      setIsTyping(false);
    }, 1000);
  };

  // Clear conversation
  const handleClear = () => {
    setMessages([]);
  };

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([{ text: botResponses.greeting[0], sender: "bot" }]);
        setIsTyping(false);
      }, 800);
    }
  }, [isOpen]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-gradient-to-r from-nexovate-blue-600 to-accent-purple text-white p-4 rounded-full shadow-lg flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Pulse ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-nexovate-blue-500"
            animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="text-xl relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaComments className="text-xl relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{ maxHeight: "500px" }}
          >
            {/* Glass background */}
            <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-xl -z-10" />

            {/* Header */}
            <div className="bg-gradient-to-r from-nexovate-blue-600 to-accent-purple p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FaComments className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">NexoVate Assistant</h3>
                  <p className="text-xs text-white/70">Usually replies instantly</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: 'thin' }}>
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`
                        max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap
                        ${message.sender === "user"
                          ? "bg-gradient-to-r from-nexovate-blue-600 to-accent-purple text-white rounded-br-md"
                          : "bg-white/10 text-white rounded-bl-md"
                        }
                      `}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 p-3 rounded-2xl rounded-bl-md flex items-center gap-1">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-nexovate-blue-400"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                    />
                    <motion.span
                      className="w-2 h-2 rounded-full bg-accent-purple"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
                    />
                    <motion.span
                      className="w-2 h-2 rounded-full bg-accent-cyan"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
                    />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-grow p-3 rounded-xl bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500/30 transition-all text-sm"
                  placeholder="Type a message..."
                />
                <motion.button
                  onClick={handleSend}
                  className="p-3 rounded-xl bg-gradient-to-r from-nexovate-blue-600 to-accent-purple text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPaperPlane />
                </motion.button>
              </div>

              <motion.button
                onClick={handleClear}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 border border-white/5"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <FaTrash className="text-xs" />
                Clear Conversation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;

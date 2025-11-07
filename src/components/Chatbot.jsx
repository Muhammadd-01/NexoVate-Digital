import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // 🔹 NexoVate info
  const siteInfo = {
    email: "contactnexovate@gmail.com",
    phone: "+92 312 8538773",
    address: "Karachi, Pakistan",
    website: "https://nexovate.vercel.app",
  };

  // 🔹 Predefined responses
  const botResponses = {
    greeting: [
      "Hello 👋 Welcome to NexoVate Digital! How can I help you today?",
      "Hi there! 😊 I’m your virtual assistant from NexoVate Digital.",
      "Assalamualaikum! 👋 How can NexoVate assist you today?",
    ],
    company: [
      "NexoVate Digital is a modern software house focused on innovation, quality, and real-world digital solutions 🚀",
      "We’re a digital agency providing full-stack, AI, and branding solutions globally 🌍",
      "Our goal at NexoVate is to build scalable, elegant, and impactful digital products 💻✨",
    ],
    mission: [
      "Our mission is to empower brands and individuals through intelligent design and technology 💡",
      "We aim to combine creativity, modern development, and automation for long-term digital growth ⚙️",
    ],
    founder: [
      "NexoVate was founded by passionate developers and designers from Pakistan 🇵🇰 — dedicated to helping businesses grow through technology.",
      "Our founder believes in combining creativity, strategy, and technology for real-world impact 💼",
    ],
    team: [
      "Our team consists of expert full-stack developers, designers, and strategists passionate about building next-gen digital products. 💻✨",
      "We have creative professionals specializing in web, app, and AI-based solutions.",
    ],
    services: [
      `Here’s what we offer at NexoVate 💼:
      • Web Development (React, Angular, Laravel, .NET)
      • Mobile App Development
      • UI/UX Design
      • Cloud Integration & AI Solutions
      • Branding & Digital Marketing`,
    ],
    technologies: [
      "We use modern technologies like React, Next.js, Angular, Laravel, Node.js, TailwindCSS, Python, and .NET ⚙️",
      "Our tech stack includes front-end frameworks, backend APIs, databases, and AI integrations 🔥",
    ],
    projects: [
      "We’ve worked on web apps, eCommerce platforms, AI tools, and digital business solutions 🧠💻",
      "Our portfolio includes scalable, secure, and visually stunning applications. Would you like me to share the site link?",
    ],
    packages: [
      `💡 Our packages include:
      • Basic – Portfolio or small business site
      • Standard – Company website or eCommerce
      • Premium – Custom scalable solutions with cloud & AI integration
      Want me to send you pricing or consultation details?`,
    ],
    hiring: [
      "We’re always open to creative and technical talent! 💼 You can email your CV to contactnexovate@gmail.com",
      "Yes, NexoVate offers internship and collaboration opportunities. Send your resume to our email 📧",
    ],
    contact: [
      `📞 You can contact us:
      • Email: <a href="mailto:${siteInfo.email}" class="text-blue-600 underline">${siteInfo.email}</a>
      • Phone: <a href="tel:${siteInfo.phone}" class="text-blue-600 underline">${siteInfo.phone}</a>
      • Address: ${siteInfo.address}
      • Website: <a href="${siteInfo.website}" target="_blank" class="text-blue-600 underline">${siteInfo.website}</a>`,
    ],
    location: [
      "We’re based in Karachi, Pakistan 🇵🇰, but we work with global clients online 🌎",
      "Our HQ is in Karachi — but our team operates remotely across Pakistan.",
    ],
    timing: [
      "Our team is active Monday to Saturday, 10 AM – 8 PM (PKT) ⏰",
      "You can reach us anytime — we usually respond within 24 hours.",
    ],
    thanks: [
      "You're welcome! 😊",
      "Happy to help! Let me know if you need anything else 💬",
      "No problem! Always here to assist you 🤝",
    ],
    default: [
      "Hmm, I didn’t quite get that 🤔. Try asking about *services*, *team*, *projects*, *technologies*, or *contact*.",
      "I’m still learning! Please ask something like 'Tell me about your services' or 'Do you offer internships?'",
      "That’s interesting! Could you rephrase your question a bit more clearly?",
      "Sorry, I couldn’t catch that 😅. You can ask me about pricing, projects, team, or contact info.",
    ],
  };

  // 🔹 Bot logic
  const getBotResponse = (message) => {
    const lower = message.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey") || lower.includes("salam"))
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    else if (lower.includes("nexovate") || lower.includes("who are you") || lower.includes("company"))
      return botResponses.company[Math.floor(Math.random() * botResponses.company.length)];
    else if (lower.includes("mission") || lower.includes("vision") || lower.includes("goal"))
      return botResponses.mission[Math.floor(Math.random() * botResponses.mission.length)];
    else if (lower.includes("founder") || lower.includes("ceo") || lower.includes("owner"))
      return botResponses.founder[Math.floor(Math.random() * botResponses.founder.length)];
    else if (lower.includes("team"))
      return botResponses.team[Math.floor(Math.random() * botResponses.team.length)];
    else if (lower.includes("service"))
      return botResponses.services[Math.floor(Math.random() * botResponses.services.length)];
    else if (lower.includes("tech") || lower.includes("stack") || lower.includes("language"))
      return botResponses.technologies[Math.floor(Math.random() * botResponses.technologies.length)];
    else if (lower.includes("project") || lower.includes("portfolio"))
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    else if (lower.includes("package") || lower.includes("plan") || lower.includes("pricing"))
      return botResponses.packages[Math.floor(Math.random() * botResponses.packages.length)];
    else if (lower.includes("hire") || lower.includes("intern") || lower.includes("job"))
      return botResponses.hiring[Math.floor(Math.random() * botResponses.hiring.length)];
    else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone"))
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    else if (lower.includes("where") || lower.includes("location") || lower.includes("address"))
      return botResponses.location[Math.floor(Math.random() * botResponses.location.length)];
    else if (lower.includes("time") || lower.includes("open") || lower.includes("hours") || lower.includes("available"))
      return botResponses.timing[Math.floor(Math.random() * botResponses.timing.length)];
    else if (lower.includes("thanks") || lower.includes("thank you"))
      return botResponses.thanks[Math.floor(Math.random() * botResponses.thanks.length)];
    else
      return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  // 🔹 Handle message send
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

  // 🔹 Clear conversation
  const handleClear = () => {
    setMessages([]);
  };

  // 🔹 Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([{ text: botResponses.greeting[0], sender: "bot" }]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-nexovate-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-nexovate-blue-500 transition-colors duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaComments className="text-2xl" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl w-80 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-nexovate-blue-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">Chat with us</h3>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${message.sender === "user" ? "text-right" : "text-left"}`}
                  dangerouslySetInnerHTML={{
                    __html: `<span class="inline-block p-2 rounded-lg text-white bg-nexovate-blue-600">
                      ${message.text}
                    </span>`,
                  }}
                />
              ))}
              {isTyping && (
                <div className="text-left">
                  <span className="inline-block p-2 rounded-lg bg-nexovate-blue-600 text-white">
                    Typing...
                  </span>
                </div>
              )}
            </div>

            {/* Input + Clear */}
            <div className="p-4 border-t">
              <div className="flex mb-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-grow p-2 border rounded-l-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nexovate-blue-600"
                  placeholder="Type a message..."
                />
                <button
                  onClick={handleSend}
                  className="bg-nexovate-blue-600 text-white p-2 rounded-r-lg hover:bg-nexovate-blue-500 transition-colors duration-300"
                >
                  Send
                </button>
              </div>

              <button
                onClick={handleClear}
                className="w-full bg-nexovate-blue-600 hover:bg-nexovate-blue-500 text-white py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Clear Conversation 🧹
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;

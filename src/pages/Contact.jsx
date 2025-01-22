import { useState } from "react"
import emailjs from "emailjs-com"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import toast from "react-hot-toast"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import ParticleBackground from "../components/ParticleBackground"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit us",
    details: ["123 Business Avenue", "Tech District", "Silicon Valley, CA 94000"],
  },
  {
    icon: Phone,
    title: "Call us",
    details: ["+1 (123) 456-7890", "+1 (123) 456-7891"],
  },
  {
    icon: Mail,
    title: "Email us",
    details: ["info@growhub.co", "support@growhub.co"],
  },
  {
    icon: Clock,
    title: "Working hours",
    details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM"],
  },
]

const mapContainerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: 37.7749,
  lng: -122.4194,
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    }
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with GrowHub.Co for innovative software solutions"
        keywords="contact, software development, tech support"
      />
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="bg-gradient-to-b from-growhub-red-600 to-growhub-red-700 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold text-white sm:text-5xl md:text-6xl"
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-xl text-white/80"
              >
                Let's discuss how we can help your business grow
              </motion.p>
            </div>
          </div>

          {/* Contact Info & Form Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h2>
                <div className="grid gap-8">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="flex items-start gap-4"
                    >
                      <div className="p-3 bg-growhub-red-100 dark:bg-growhub-red-900 rounded-lg">
                        <item.icon className="w-6 h-6 text-growhub-red-600 dark:text-growhub-red-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-growhub-red-500 focus:ring-growhub-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-growhub-red-500 focus:ring-growhub-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-growhub-red-500 focus:ring-growhub-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-growhub-red-500 focus:ring-growhub-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-growhub-red-600 text-white py-3 px-6 rounded-md hover:bg-growhub-red-700 transition-colors duration-200"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full mt-16">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </>
  )
}


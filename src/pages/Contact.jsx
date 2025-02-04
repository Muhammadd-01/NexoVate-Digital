import { useState } from "react"
import emailjs from "emailjs-com"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import toast from "react-hot-toast"
import { MapPin, Phone, Mail } from "lucide-react"
import ParticleBackground from "../components/ParticleBackground"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["NexoVate Digital", "Your City, Your Country"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 315 1177817"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contactnexovate@gmail.com"],
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    }
  }

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <SEO
            title="Get in Touch"
            description="Contact NexoVate Digital for innovative digital solutions and collaborations"
            keywords="contact, digital solutions, collaboration, get in touch"
          />
          <div className="text-gray-900 dark:text-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  We're excited to collaborate with you! Reach out through the form or contact us directly.
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Contact Information
                  </h3>
                  <dl className="mt-8 space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex gap-x-4"
                      >
                        <dt>
                          <item.icon
                            className="h-7 w-6 text-nexovate-blue-600 dark:text-nexovate-blue-400"
                            aria-hidden="true"
                          />
                        </dt>
                        <dd>
                          <h4 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="mt-1 text-base leading-7 text-gray-600 dark:text-gray-300">
                              {detail}
                            </p>
                          ))}
                        </dd>
                      </motion.div>
                    ))}
                  </dl>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
                    Send us a Message
                  </h3>
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
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nexovate-blue-500 focus:ring-nexovate-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nexovate-blue-500 focus:ring-nexovate-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nexovate-blue-500 focus:ring-nexovate-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-nexovate-blue-600 text-white py-3 px-6 rounded-md hover:bg-nexovate-blue-700 transition-colors duration-200"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              </div>
              <div className="mt-16 text-center">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  Let's create something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


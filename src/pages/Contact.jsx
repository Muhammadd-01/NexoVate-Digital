import { useState } from "react"
import emailjs from "emailjs-com"
import SEO from "../components/SEO"
import Map from "react-map-gl"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_USER_ID",
      )
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setStatus("error")
    }
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with GrowHub Solutions for any inquiries or support."
        keywords="contact us, software development inquiries, support"
      />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center"
            >
              Get in touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 text-lg leading-8 text-gray-600 text-center"
            >
              We'd love to hear from you. Please fill out this form or use our contact information below.
            </motion.p>

            <div className="mt-16 flex flex-col lg:flex-row gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="lg:w-1/2"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-growhub-red-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-growhub-red-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-growhub-red-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="block w-full rounded-md bg-growhub-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-growhub-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-growhub-red-600 disabled:opacity-50"
                    >
                      {status === "sending" ? "Sending..." : "Send message"}
                    </button>
                  </div>
                  {status === "success" && (
                    <p className="mt-4 text-sm text-green-600">Your message has been sent successfully!</p>
                  )}
                  {status === "error" && (
                    <p className="mt-4 text-sm text-red-600">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="lg:w-1/2 space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Office</h3>
                  <p className="mt-2 text-base text-gray-600">
                    123 Tech Street
                    <br />
                    Silicon Valley, CA 94000
                    <br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Email: info@growhubsolutions.com
                    <br />
                    Phone: +1 (123) 456-7890
                  </p>
                </div>
                <div className="h-64 w-full">
                  <Map
                    initialViewState={{
                      latitude: 37.7749,
                      longitude: -122.4194,
                      zoom: 12,
                    }}
                    style={{ width: "100%", height: "100%" }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


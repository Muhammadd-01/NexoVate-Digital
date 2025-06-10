import { useState } from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["NexoVate Digital", "Karachi, Pakistan"],
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
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xwplpald", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!");

        // Reset form fields
        setFormData({ name: "", email: "", message: "" });

        // Hide message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
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
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                Contact Us
              </h2>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                Let's build something amazing together!
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
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
                        <item.icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                      </dt>
                      <dd>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>

              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md text-center shadow-md hover:blur-sm hover:opacity-0 transition-opacity duration-1000"
                  >
                    ✅ Message sent successfully!
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="Write your message..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all duration-200 shadow-lg"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

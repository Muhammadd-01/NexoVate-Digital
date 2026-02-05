import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";
import TiltCard from "../components/TiltCard";
import {
  FadeInWhenVisible,
  StaggerContainer,
  StaggerItem,
  GradientText,
  MagneticButton,
  SpotlightCard,
  FloatingElement
} from "../components/Animations";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["NexoVate Digital", "Karachi, Pakistan"],
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 312 858773"],
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contactnexovate@gmail.com"],
    href: "mailto:contactnexovate@gmail.com",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
];

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-fill message if redirected from Packages
  useEffect(() => {
    if (location.state && location.state.packageDetails) {
      const { name, price, category } = location.state.packageDetails;
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in the ${name} package (${category}) priced at ${price}. Please contact me with more details.`,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address!", {
        style: { background: "#1a1a2e", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwplpald", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! 🎉", {
          style: {
            background: "linear-gradient(135deg, #0ea5e9, #a855f7)",
            color: "#fff",
            borderRadius: "12px",
          },
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.", {
          style: { background: "#1a1a2e", color: "#fff" },
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Try again later.", {
        style: { background: "#1a1a2e", color: "#fff" },
      });
    } finally {
      setIsSubmitting(false);
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

        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <FadeInWhenVisible>
              <div className="mx-auto max-w-2xl text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  <span className="text-sm text-accent-cyan font-medium">Let's Connect</span>
                </motion.div>

                <h1 className="text-4xl font-bold sm:text-5xl mb-4">
                  <GradientText>Contact Us</GradientText>
                </h1>
                <p className="text-lg text-gray-400">
                  Let's build something amazing together!
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Grid */}
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <FadeInWhenVisible delay={0.1}>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-8">
                    Contact Information
                  </h3>

                  <StaggerContainer staggerDelay={0.1}>
                    <div className="space-y-4">
                      {contactInfo.map((item, index) => (
                        <StaggerItem key={index}>
                          <TiltCard
                            tiltAmount={5}
                            className={`p-5 rounded-xl bg-gradient-to-br ${item.color} backdrop-blur-xl border border-white/10 group`}
                          >
                            <div className="flex gap-x-4 items-start">
                              <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                                <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                              </div>
                              <div>
                                <h4 className="text-lg font-medium text-white">
                                  {item.title}
                                </h4>
                                {item.details.map((detail, idx) => (
                                  item.href ? (
                                    <a
                                      key={idx}
                                      href={item.href}
                                      className="block text-gray-400 hover:text-white transition-colors"
                                    >
                                      {detail}
                                    </a>
                                  ) : (
                                    <p key={idx} className="text-gray-400">
                                      {detail}
                                    </p>
                                  )
                                ))}
                              </div>
                            </div>
                          </TiltCard>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>

                  {/* Map or additional info */}
                  <motion.div
                    className="mt-8 p-6 rounded-xl glass border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-lg font-medium text-white mb-2">Working Hours</h4>
                    <p className="text-gray-400">Monday - Saturday: 10 AM - 8 PM (PKT)</p>
                    <p className="text-gray-400 mt-1 text-sm">We typically respond within 24 hours</p>
                  </motion.div>
                </div>
              </FadeInWhenVisible>

              {/* Contact Form */}
              <FadeInWhenVisible delay={0.2}>
                <div className="glass rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Send className="w-6 h-6 text-nexovate-blue-400" />
                    Send a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:border-nexovate-blue-500 focus:ring-2 focus:ring-nexovate-blue-500/30 transition-all duration-300 placeholder-gray-500"
                        placeholder="Enter your name"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:border-nexovate-blue-500 focus:ring-2 focus:ring-nexovate-blue-500/30 transition-all duration-300 placeholder-gray-500"
                        placeholder="Enter your email"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <motion.textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:border-nexovate-blue-500 focus:ring-2 focus:ring-nexovate-blue-500/30 transition-all duration-300 placeholder-gray-500 resize-none"
                        placeholder="Write your message..."
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    {/* Submit Button */}
                    <MagneticButton strength={0.1} className="w-full">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-nexovate-blue-600 to-accent-purple text-white font-semibold shadow-lg hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    </MagneticButton>
                  </form>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

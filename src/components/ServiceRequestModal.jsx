import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function ServiceRequestModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirements: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Service Request: ${selectedService}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0ARequirements:%0D%0A${formData.requirements}`;
    
    // Using a mailto link as a standalone solution without backend
    window.location.href = `mailto:contact@nexovate.digital?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="pointer-events-auto relative w-full max-w-lg overflow-hidden rounded-2xl liquid-glass-strong p-6 shadow-2xl spatial-layer-2 border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Request Service
                </h2>
                <p className="text-sm text-gray-400">
                  You are requesting: <span className="text-nexovate-blue-400 font-semibold">{selectedService}</span>
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-300 mb-1">
                    Specific Requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    required
                    rows={4}
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-nexovate-blue-500 focus:ring-1 focus:ring-nexovate-blue-500 transition-all outline-none resize-none"
                    placeholder="Tell us what you need in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-nexovate-blue-600 to-nexovate-blue-500 text-white font-semibold hover:from-nexovate-blue-500 hover:to-nexovate-blue-400 transition-all shadow-lg hover:shadow-glow-sm mt-6"
                >
                  <PaperAirplaneIcon className="w-5 h-5" />
                  Send Request
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

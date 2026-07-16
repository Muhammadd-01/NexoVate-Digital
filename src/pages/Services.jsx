import React, { useState } from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TiltCard from "../components/TiltCard";
import PageHero from "../components/PageHero";
import { servicesData as services } from "../data/servicesData";
import {
  FadeInWhenVisible,
  StaggerContainer,
  StaggerItem,
  GradientText,
  MagneticButton,
  SpotlightCard,
  FloatingElement,
  BlurReveal
} from "../components/Animations";


const technologies = {
  frontend: ["HTML • CSS • JS", "React", "Next.js", "Angular", "TailwindCSS"],
  backend: ["Laravel", ".NET • C#", "Node.js", "Express.js", "Python"],
  fullstack: ["MERN Stack", "MEAN Stack"],
  mobile: ["Flutter", "React Native"],
  design: ["Canva", "Illustrator", "Photoshop"],
  video: ["Premiere Pro", "After Effects"],
};

export default function Services() {
  return (
    <div className="relative min-h-screen">
      <SEO
        title="Our Services"
        description="Explore Nexovate's global digital services — from full-stack web development to vector design, SEO, mobile apps, and marketing — all priced lower than global market rates."
        keywords="web development, software development, mobile apps, vector design, SEO, UI/UX, photo editing, video editing, digital marketing, affordable packages"
      />

      <PageHero 
        title="Professional Digital Services" 
        description="We provide all-in-one digital solutions — from development and design to SEO and marketing — at rates lower than global competitors."
      />

      <div className="relative z-10 -mt-12">
        <div className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Services Grid */}
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <StaggerContainer staggerDelay={0.1}>
                <dl className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
                  {services.map((service, index) => (
                    <StaggerItem key={service.id}>
                      <Link to={`/services/${service.id}`} className="block h-full">
                        <TiltCard
                          tiltAmount={6}
                          className={`
                            p-6 rounded-2xl h-full
                            bg-gradient-to-br ${service.gradient}
                            backdrop-blur-xl border border-white/10
                            hover:border-white/30 transition-all duration-300
                            group flex flex-col hover:shadow-glow-sm
                          `}
                        >
                          <dt className="flex items-center gap-x-4 text-lg font-semibold leading-7 text-white">
                            <motion.div
                              className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors"
                              whileHover={{ rotate: 5, scale: 1.1 }}
                            >
                              <service.icon
                                className="h-6 w-6 text-nexovate-blue-400 icon-glow"
                                aria-hidden="true"
                              />
                            </motion.div>
                            {service.name}
                          </dt>
                          <dd className="mt-4 text-base leading-7 text-gray-400 flex-grow">
                            {service.description}
                          </dd>
                          <div className="mt-6 flex items-center text-nexovate-blue-400 font-medium group-hover:text-nexovate-blue-300 transition-colors">
                            View Details
                            <motion.span 
                              className="ml-2"
                              animate={{ x: [0, 5, 0] }} 
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.span>
                          </div>
                        </TiltCard>
                      </Link>
                    </StaggerItem>
                  ))}
                </dl>
              </StaggerContainer>
            </div>

            {/* Technologies Section */}
            <FadeInWhenVisible delay={0.2}>
              <div className="mt-32">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">
                    <GradientText>Technologies We Use</GradientText>
                  </h2>
                  <p className="text-gray-400">Cutting-edge tech stack for modern solutions</p>
                </div>

                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {/* Frontend */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-nexovate-blue-500" />
                      Frontend
                    </h3>
                    <div className="space-y-2">
                      {technologies.frontend.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-nexovate-blue-500/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-accent-purple" />
                      Backend
                    </h3>
                    <div className="space-y-2">
                      {technologies.backend.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-accent-purple/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Full Stack */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-accent-cyan" />
                      Full-Stack
                    </h3>
                    <div className="space-y-2">
                      {technologies.fullstack.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-accent-cyan/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
                  {/* Mobile */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-500" />
                      Mobile
                    </h3>
                    <div className="space-y-2">
                      {technologies.mobile.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-green-500/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Design */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-pink-500" />
                      Design
                    </h3>
                    <div className="space-y-2">
                      {technologies.design.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-pink-500/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Video */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-orange-500" />
                      Video & Motion
                    </h3>
                    <div className="space-y-2">
                      {technologies.video.map((item) => (
                        <motion.div
                          key={item}
                          className="p-3 rounded-xl glass border border-white/10 font-medium text-gray-300 hover:text-white hover:border-orange-500/50 transition-all duration-300 cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>

            {/* CTA */}
            <FadeInWhenVisible delay={0.3}>
              <div className="mt-24 text-center">
                <div className="glass rounded-3xl p-12 max-w-3xl mx-auto border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Want a custom package?
                  </h3>
                  <p className="text-gray-400 mb-8">
                    Let's create your digital growth plan today.
                  </p>
                  <MagneticButton strength={0.15}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-nexovate-blue-600 to-accent-purple px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-glow transition-all duration-300"
                    >
                      Get in Touch
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </FadeInWhenVisible>

          </div>
        </div>
      </div>
    </div>
  );
}

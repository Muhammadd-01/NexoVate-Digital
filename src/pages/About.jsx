import React from "react"
import SEO from "../components/SEO"
import { motion } from "framer-motion"

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about GrowHub.Co and our mission to provide innovative software solutions"
        keywords="about us, software development, company mission, team"
      />
      <div className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            About GrowHub.Co
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-4">
                At GrowHub.Co, our mission is to empower businesses through innovative software solutions. We strive to
                deliver cutting-edge technology that drives growth, efficiency, and success for our clients.
              </p>
              <p>
                With a team of passionate experts and a commitment to excellence, we're dedicated to transforming ideas
                into powerful, scalable applications that make a real difference in the digital landscape.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Client-Centric Focus</li>
                <li>Innovative Problem Solving</li>
                <li>Agile Development Methodology</li>
                <li>Continuous Learning and Improvement</li>
                <li>Quality-Driven Results</li>
                <li>Collaborative Partnerships</li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
            <p className="mb-4">
              With years of experience in the software development industry, we specialize in a wide range of
              technologies and services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 columns-2 sm:columns-3">
              <li>Custom Software Development</li>
              <li>Web Application Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Solutions</li>
              <li>DevOps Services</li>
              <li>AI & Machine Learning</li>
              <li>IoT Solutions</li>
              <li>Blockchain Development</li>
              <li>Data Analytics</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default About


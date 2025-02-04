import { useState } from "react"
import SEO from "../components/SEO"
import ParticleBackground from "../components/ParticleBackground"
import { motion } from "framer-motion"

const positions = [
  {
    id: 1,
    title: "Full-stack Developer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    closeDate: "2023-07-01",
    closeDateFull: "July 1, 2023",
  },
  {
    id: 2,
    title: "UX Designer",
    type: "Full-time",
    location: "New York, NY",
    department: "Design",
    closeDate: "2023-07-15",
    closeDateFull: "July 15, 2023",
  },
  {
    id: 3,
    title: "Marketing Manager",
    type: "Full-time",
    location: "San Francisco, CA",
    department: "Marketing",
    closeDate: "2023-06-30",
    closeDateFull: "June 30, 2023",
  },
  {
    id: 4,
    title: "SEO Specialist",
    type: "Full-time",
    location: "Remote",
    department: "Digital Marketing",
    closeDate: "2023-07-30",
    closeDateFull: "July 30, 2023",
  },
  {
    id: 5,
    title: "Video Editor",
    type: "Contract",
    location: "Los Angeles, CA",
    department: "Content Production",
    closeDate: "2023-08-15",
    closeDateFull: "August 15, 2023",
  },
]

const benefits = [
  "Competitive salary and performance bonuses",
  "Flexible work hours and remote work options",
  "Comprehensive health, dental, and vision insurance",
  "401(k) retirement plan with company match",
  "Professional development and learning opportunities",
  "Regular team building events and activities",
]

export default function Career() {
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setApplicationData({ ...applicationData, [name]: value })
  }

  const handleFileChange = (e) => {
    setApplicationData({ ...applicationData, resume: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Application submitted:", { ...applicationData, position: selectedPosition.title })
    alert("Application submitted successfully!")
    setSelectedPosition(null)
    setApplicationData({ name: "", email: "", resume: null, coverLetter: "" })
  }

  return (
    <>
      <SEO
        title="Careers"
        description="Join our team at NexoVate Digital and be part of innovative software development projects."
        keywords="software development jobs, tech careers, job openings"
      />
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              >
                Join the NexoVate Digital Team
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                Be part of a dynamic team shaping the future of software development and digital marketing.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Why Work With Us?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At NexoVate Digital, we're passionate about innovation, collaboration, and personal growth. Join us to
                work on cutting-edge projects, learn from industry experts, and make a real impact in the world of
                technology.
              </p>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Benefits and Perks</h4>
              <ul className="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-300">
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {positions.map((position, index) => (
                <motion.article
                  key={position.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex max-w-xl flex-col items-start justify-between bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={position.closeDate} className="text-gray-500 dark:text-gray-400">
                      {position.closeDateFull}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-700 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600">
                      {position.type}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      <button onClick={() => setSelectedPosition(position)}>
                        <span className="absolute inset-0" />
                        {position.title}
                      </button>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {position.department} · {position.location}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <button
                      onClick={() => setSelectedPosition(position)}
                      className="text-sm font-semibold leading-6 text-nexovate-blue-600 dark:text-nexovate-blue-400"
                    >
                      Apply now <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {selectedPosition && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Apply for {selectedPosition.title}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={applicationData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nexovate-blue-500 focus:ring-nexovate-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nexovate-blue-500 focus:ring-nexovate-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    required
                    className="mt-1 block w-full text-sm text-gray-500 dark:text-gray-300
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-nexovate-blue-600 file:text-white
                      hover:file:bg-red-600
                      dark:file:bg-nexovate-blue-400 dark:file:text-gray-800
                      dark:hover:file:bg-red-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-nexovate-blue-500 focus:ring-nexovate-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setSelectedPosition(null)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nexovate-blue-500 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-nexovate-blue-600 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nexovate-blue-500 dark:bg-nexovate-blue-400 dark:text-gray-800 dark:hover:bg-red-500"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}


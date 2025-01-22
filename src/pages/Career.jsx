import { useState } from "react"
import SEO from "../components/SEO"
import { Link } from "react-router-dom"

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
    // Here you would typically send the application data to your backend
    console.log("Application submitted:", { ...applicationData, position: selectedPosition.title })
    alert("Application submitted successfully!")
    setSelectedPosition(null)
    setApplicationData({ name: "", email: "", resume: null, coverLetter: "" })
  }

  return (
    <>
      <SEO
        title="Careers"
        description="Join our team at GrowHub Solutions and be part of innovative software development projects."
        keywords="software development jobs, tech careers, job openings"
      />
      <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Open positions
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Join our team and help shape the future of software development.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {positions.map((position) => (
              <article key={position.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={position.closeDate} className="text-gray-500">
                    {position.closeDateFull}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
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
                    className="text-sm font-semibold leading-6 text-growhub-red-600 dark:text-growhub-red-400"
                  >
                    Apply now <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-growhub-red-500 focus:ring-growhub-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-growhub-red-500 focus:ring-growhub-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
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
                    file:bg-growhub-red-600 file:text-white
                    hover:file:bg-red-600
                    dark:file:bg-growhub-red-400 dark:file:text-gray-800
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-growhub-red-500 focus:ring-growhub-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setSelectedPosition(null)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-growhub-red-500 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-growhub-red-600 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-growhub-red-500 dark:bg-growhub-red-400 dark:text-gray-800 dark:hover:bg-red-500"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}


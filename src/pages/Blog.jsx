import SEO from "../components/SEO"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ParticleBackground from "../components/ParticleBackground"

const posts = [
  {
    id: 1,
    title: "AI-Driven Business Transformation: A 2023 Guide",
    href: "/blog/1",
    description:
      "Explore how artificial intelligence is revolutionizing businesses across industries and learn strategies for successful AI integration.",
    date: "Mar 16, 2023",
    category: { title: "Artificial Intelligence", href: "#" },
  },
  {
    id: 2,
    title: "IoT Trends Shaping the Future of Industry",
    href: "/blog/2",
    description: "Discover the latest Internet of Things trends and their potential to transform manufacturing, healthcare, and smart cities.",
    date: "Apr 5, 2023",
    category: { title: "Internet of Things", href: "#" },
  },
  {
    id: 3,
    title: "Cloud Computing: Strategies for Scalable Growth",
    href: "/blog/3",
    description:
      "Learn how cloud technologies are enabling businesses to scale rapidly, improve efficiency, and drive innovation.",
    date: "May 12, 2023",
    category: { title: "Cloud Computing", href: "#" },
  },
  {
    id: 4,
    title: "Digital Transformation Case Study: Manufacturing Success Story",
    href: "/blog/4",
    description:
      "Explore how we helped a manufacturing client increase productivity by 150% through strategic implementation of AI and IoT solutions.",
    date: "Jun 20, 2023",
    category: { title: "Digital Transformation", href: "#" },
  },
]

export default function Blog() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <SEO
            title="Insights & Innovations"
            description="Stay updated with the latest trends and insights in AI, IoT, cloud computing, and digital transformation strategies."
            keywords="artificial intelligence, Internet of Things, cloud computing, digital transformation, technology trends"
          />
          <div className="text-gray-900 dark:text-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Insights & Innovations
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Explore cutting-edge technologies and success stories in AI, IoT, and cloud computing.
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-start justify-between"
                  >
                    <div className="relative w-full">
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt=""
                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                          {post.date}
                        </time>
                        <Link
                          to={post.category.href}
                          className="relative z-10 rounded-full bg-nexovate-blue-100 dark:bg-nexovate-blue-900 px-3 py-1.5 font-medium text-nexovate-blue-600 dark:text-nexovate-blue-300 hover:bg-nexovate-blue-200 dark:hover:bg-nexovate-blue-800"
                        >
                          {post.category.title}
                        </Link>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-nexovate-purple-600 dark:group-hover:text-nexovate-purple-400">
                          <Link to={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </Link>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
              <div className="mt-16 text-center">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  Have questions? Email us at info@nexovatedigital.com
                </p>
                <Link
                  to="/contact"
                  className="inline-block rounded-md bg-nexovate-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-nexovate-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nexovate-purple-600"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
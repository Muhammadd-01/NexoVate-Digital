import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const portfolioCategories = [
  {
    name: "Social Media Campaigns",
    description: "Engaging and effective social media campaigns for various brands.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Social media campaign showcase",
  },
  {
    name: "Graphic Designs",
    description: "Creative and impactful graphic designs for diverse clients.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Graphic design portfolio",
  },
  {
    name: "Shopify Stores",
    description: "Custom-built Shopify stores with seamless user experiences.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Shopify store example",
  },
  {
    name: "Websites and SEO Projects",
    description: "Optimized websites with improved search engine rankings.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Website and SEO project showcase",
  },
]

export default function Portfolios() {
  return (
    <>
      <SEO
        title="Our Creative Work"
        description="Explore our portfolio of successful digital projects including social media campaigns, graphic designs, Shopify stores, and SEO-optimized websites."
        keywords="portfolio, social media campaigns, graphic design, Shopify stores, SEO, websites"
      />
      <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Creative Work
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Showcasing our expertise in digital solutions
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {portfolioCategories.map((category, index) => (
              <motion.article
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <img
                    src={category.imageSrc || "/placeholder.svg"}
                    alt={category.imageAlt}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500 dark:text-gray-400">
                      Portfolio
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      <span className="absolute inset-0" />
                      {category.name}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Like what you see? Let's work together! Contact us at contact@growhubsolutions.com
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-md bg-growhub-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-growhub-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-growhub-red-600"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


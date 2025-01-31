import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CodeBracketIcon, MagnifyingGlassIcon, PaintBrushIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"

const services = [
  {
    name: "Website Development",
    description:
      "Custom website design and development tailored to your business needs. Responsive, fast, and user-friendly websites.",
    icon: CodeBracketIcon,
  },
  {
    name: "SEO (Search Engine Optimization)",
    description:
      "On-page and off-page SEO to improve search engine rankings. Keyword research, website audits, and performance tracking.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Graphic Designing",
    description: "Social media posts, stories, and reels. Logo design, branding, and promotional materials.",
    icon: PaintBrushIcon,
  },
  {
    name: "Shopify Store Creation",
    description:
      "Custom Shopify store setup and design. Product listings, payment integrations, and store management support.",
    icon: ShoppingCartIcon,
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore our range of digital services including website development, SEO, graphic design, and Shopify store creation."
        keywords="website development, SEO, graphic design, Shopify store, digital services"
      />
      <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-growhub-red-600 dark:text-growhub-red-400">
              Our Services
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Comprehensive Digital Solutions for Your Business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              At Grow Hub Solutions, we offer a wide range of digital services to help your business thrive in the
              online world.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <service.icon
                      className="h-5 w-5 flex-none text-growhub-red-600 dark:text-growhub-red-400"
                      aria-hidden="true"
                    />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Let's bring your vision to life! Contact us at contact@growhubsolutions.com
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


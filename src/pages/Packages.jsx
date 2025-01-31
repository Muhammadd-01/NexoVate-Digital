import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { CheckIcon } from "@heroicons/react/24/outline"
import ParticleBackground from "../components/ParticleBackground"
import { FadeInWhenVisible } from "../components/Animations"

const packageCategories = [
  {
    title: "Software Development",
    packages: [
      {
        name: "Basic",
        price: "$2,999",
        features: ["Simple web application", "Up to 5 pages", "Basic functionality", "1 month of support"],
        cta: "Get Started",
      },
      {
        name: "Premium",
        price: "$7,999",
        features: [
          "Advanced web application",
          "Up to 15 pages",
          "Complex functionality",
          "Database integration",
          "3 months of support",
        ],
        cta: "Go Premium",
        popular: true,
      },
      {
        name: "Custom",
        price: "Custom Quote",
        features: [
          "Tailored solution",
          "Unlimited pages",
          "Advanced features",
          "API integrations",
          "6 months of support",
        ],
        cta: "Contact Us",
      },
    ],
  },
  {
    title: "Graphic Design",
    packages: [
      {
        name: "Basic",
        price: "$499/month",
        features: ["5 design requests", "Logo design", "Social media graphics", "3 revisions per design"],
        cta: "Start Designing",
      },
      {
        name: "Premium",
        price: "$999/month",
        features: [
          "10 design requests",
          "Logo design",
          "Social media graphics",
          "Marketing materials",
          "Unlimited revisions",
        ],
        cta: "Enhance Your Brand",
        popular: true,
      },
      {
        name: "Custom",
        price: "Custom Quote",
        features: [
          "Unlimited design requests",
          "Full brand identity",
          "Print and digital designs",
          "Dedicated designer",
          "24/7 support",
        ],
        cta: "Contact Us",
      },
    ],
  },
  {
    title: "SEO Services",
    packages: [
      {
        name: "Basic",
        price: "$799/month",
        features: ["Keyword research", "On-page optimization", "Monthly reporting", "Local SEO"],
        cta: "Boost Rankings",
      },
      {
        name: "Premium",
        price: "$1,599/month",
        features: [
          "Advanced keyword research",
          "On-page and off-page optimization",
          "Content strategy",
          "Link building",
          "Weekly reporting",
        ],
        cta: "Dominate Search",
        popular: true,
      },
      {
        name: "Custom",
        price: "Custom Quote",
        features: [
          "Enterprise-level SEO",
          "International SEO",
          "Advanced analytics",
          "Competitor analysis",
          "Dedicated SEO team",
        ],
        cta: "Contact Us",
      },
    ],
  },
  {
    title: "Digital Marketing",
    packages: [
      {
        name: "Basic",
        price: "$1,299/month",
        features: ["Social media management", "Email marketing", "Basic PPC campaigns", "Monthly reporting"],
        cta: "Start Marketing",
      },
      {
        name: "Premium",
        price: "$2,499/month",
        features: [
          "Social media management",
          "Email marketing",
          "Advanced PPC campaigns",
          "Content marketing",
          "Influencer outreach",
        ],
        cta: "Grow Your Reach",
        popular: true,
      },
      {
        name: "Custom",
        price: "Custom Quote",
        features: [
          "Full-service digital marketing",
          "Multi-channel campaigns",
          "Marketing automation",
          "Conversion rate optimization",
          "Dedicated marketing team",
        ],
        cta: "Contact Us",
      },
    ],
  },
]

export default function Packages() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div className="relative z-10">
        <SEO
          title="Packages"
          description="Explore our range of software solution packages tailored to your business needs."
          keywords="software packages, business solutions, pricing plans"
        />
        <div className="text-gray-900 dark:text-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                Our Service Packages
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Choose the right package for your business needs. We offer a range of services to help you grow and
                succeed.
              </p>
            </div>
            {packageCategories.map((category, categoryIndex) => (
              <FadeInWhenVisible key={category.title}>
                <div className="mt-24">
                  <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white sm:text-3xl mb-12 text-center">
                    {category.title}
                  </h3>
                  <div className="mx-auto grid max-w-lg gap-8 grid-cols-1 items-center lg:max-w-none lg:grid-cols-3">
                    {category.packages.map((pkg, index) => (
                      <motion.div
                        key={`${category.title}-${pkg.name}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-xl ring-1 ring-gray-900/10 dark:ring-gray-100/10 sm:p-10 ${
                          pkg.popular ? "relative z-10 scale-105" : ""
                        }`}
                      >
                        {pkg.popular && (
                          <div className="absolute -top-4 right-8 rounded-full bg-growhub-red-600 px-4 py-1 text-xs font-semibold text-white">
                            Popular
                          </div>
                        )}
                        <div>
                          <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white">{pkg.name}</h3>
                          <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-black dark:text-white">
                            {pkg.price}
                          </div>
                          <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-black dark:text-white">
                            {pkg.features.map((feature) => (
                              <li key={feature} className="flex gap-x-3">
                                <CheckIcon className="h-6 w-5 flex-none text-growhub-red-600" aria-hidden="true" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href="#"
                          className={`mt-8 block w-full rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                            pkg.popular
                              ? "bg-growhub-red-600 text-white hover:bg-growhub-red-500 focus-visible:outline-growhub-red-600"
                              : "bg-gray-50 text-gray-900 hover:bg-gray-100 focus-visible:outline-gray-600"
                          } dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600`}
                        >
                          {pkg.cta}
                        </motion.a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}

            <div className="mt-32">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl text-center mb-16">
                Why Choose GrowHub Solutions?
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Expertise</h3>
                  <p className="text-black dark:text-white">
                    Our team of skilled professionals brings years of experience and cutting-edge knowledge to every
                    project.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Customization</h3>
                  <p className="text-black dark:text-white">
                    We tailor our solutions to fit your unique business needs, ensuring maximum impact and efficiency.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Support</h3>
                  <p className="text-black dark:text-white">
                    We provide ongoing support and maintenance to ensure your digital solutions continue to perform at
                    their best.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


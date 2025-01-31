import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { CheckIcon } from "@heroicons/react/24/outline"
import ParticleBackground from "../components/ParticleBackground"
import { FadeInWhenVisible } from "../components/Animations"

const packages = [
  {
    name: "Starter",
    price: "$99/month",
    features: ["Basic website", "5 pages", "Contact form", "Mobile responsive"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$199/month",
    features: ["Dynamic website", "10 pages", "CMS integration", "SEO optimization", "E-commerce functionality"],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Full-scale web application",
      "Unlimited pages",
      "Custom features",
      "24/7 support",
      "Dedicated project manager",
    ],
    cta: "Contact Us",
    popular: false,
  },
]

export default function Packages() {
  return (
    <>
      <SEO
        title="Packages"
        description="Explore our range of software solution packages tailored to your business needs."
        keywords="software packages, business solutions, pricing plans"
      />
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Choose the right package for your business
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  We offer a range of packages to suit businesses of all sizes. Whether you're just starting out or
                  looking to scale, we have a solution for you.
                </p>
              </div>
              <FadeInWhenVisible>
                <div className="mx-auto mt-16 grid max-w-lg gap-8 grid-cols-1 items-center sm:mt-20 lg:max-w-4xl lg:grid-cols-3">
                  {packages.map((pkg, index) => (
                    <motion.div
                      key={pkg.name}
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
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pkg.name}</h3>
                        <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {pkg.price}
                        </div>
                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
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
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


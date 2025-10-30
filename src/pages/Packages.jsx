import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { CheckIcon, CodeBracketIcon } from "@heroicons/react/24/outline"
import ParticleBackground from "../components/ParticleBackground"
import { FadeInWhenVisible } from "../components/Animations"

const packageCategories = [
  {
    title: "Software Development",
    packages: [
      {
        name: "Basic",
        price: "$1,499",
        features: ["Simple web application", "Up to 5 pages", "Basic functionality", "1 month of support"],
        cta: "Get Started",
      },
      {
        name: "Premium",
        price: "$3,499",
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
          "Tailored enterprise solution",
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
    title: "Website Packages",
    packages: [
      {
        name: "Starter",
        price: "$499",
        features: [
          "Modern 5-page website",
          "Responsive design (mobile-friendly)",
          "Basic SEO setup",
          "1 month of support",
        ],
        cta: "Get Started",
      },
      {
        name: "Business",
        price: "$999",
        features: [
          "Up to 10 pages",
          "Custom UI/UX design",
          "Speed optimization",
          "Basic content upload",
          "3 months of support",
        ],
        cta: "Upgrade Plan",
        popular: true,
      },
      {
        name: "E-Commerce",
        price: "$1,499",
        features: [
          "Full online store setup",
          "Payment gateway integration",
          "Product management panel",
          "Inventory & order tracking",
          "6 months of support",
        ],
        cta: "Launch Store",
      },
    ],
  },
  {
    title: "Mobile App Packages (iOS & Android)",
    packages: [
      {
        name: "Basic App",
        price: "$1,299",
        features: [
          "Hybrid mobile app (React Native / Flutter)",
          "Up to 5 screens",
          "Basic backend setup",
          "1 month of support",
        ],
        cta: "Get Started",
      },
      {
        name: "Business App",
        price: "$2,499",
        features: [
          "iOS & Android build",
          "Custom UI design",
          "Firebase / API integration",
          "Push notifications",
          "3 months of support",
        ],
        cta: "Build My App",
        popular: true,
      },
      {
        name: "Advanced / Enterprise",
        price: "$3,999",
        features: [
          "Fully custom app (Native / Cross-platform)",
          "Database & cloud integration",
          "Admin panel & analytics",
          "User authentication & roles",
          "6 months of premium support",
        ],
        cta: "Get a Quote",
      },
    ],
  },
  {
    title: "Graphic Design",
    packages: [
      {
        name: "Basic",
        price: "$299/month",
        features: ["5 design requests", "Logo design", "Social media graphics", "3 revisions per design"],
        cta: "Start Designing",
      },
      {
        name: "Premium",
        price: "$599/month",
        features: [
          "10 design requests",
          "Logo + branding",
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
          "Full brand identity suite",
          "Print & digital designs",
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
        price: "$499/month",
        features: ["Keyword research", "On-page optimization", "Monthly reporting", "Local SEO"],
        cta: "Boost Rankings",
      },
      {
        name: "Premium",
        price: "$899/month",
        features: [
          "Advanced keyword research",
          "On + Off-page SEO",
          "Content strategy",
          "Backlink building",
          "Weekly reporting",
        ],
        cta: "Dominate Search",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        features: [
          "International SEO",
          "Advanced analytics",
          "Competitor analysis",
          "Dedicated SEO team",
          "Ongoing optimization",
        ],
        cta: "Contact Us",
      },
    ],
  },
  {
    title: "Digital Marketing",
    packages: [
      {
        name: "Starter",
        price: "$699/month",
        features: ["Social media management", "Email marketing", "Basic PPC", "Monthly report"],
        cta: "Start Marketing",
      },
      {
        name: "Growth",
        price: "$1,299/month",
        features: [
          "Multi-platform ads",
          "Email automation",
          "Influencer outreach",
          "Content creation",
          "Weekly insights",
        ],
        cta: "Grow Your Reach",
        popular: true,
      },
      {
        name: "Pro / Custom",
        price: "Custom Quote",
        features: [
          "Full-service marketing strategy",
          "Conversion rate optimization",
          "Analytics dashboard",
          "Dedicated marketing expert",
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
          description="Explore Nexovate’s affordable software, website, and app development packages designed to help your business grow."
          keywords="web development, mobile apps, SEO, branding, software packages"
        />

        <div className="text-gray-900 dark:text-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header Section */}
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                Our Service Packages
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                High-quality digital solutions at realistic prices. Choose what fits your vision — from websites to
                apps, branding to SEO.
              </p>
            </div>

            {/* Technologies Section */}
            <FadeInWhenVisible>
              <div className="mt-20 text-center">
                <div className="inline-flex items-center justify-center mb-4">
                  <CodeBracketIcon className="h-8 w-8 text-nexovate-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-2xl font-semibold text-black dark:text-white">Technologies We Use</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                  We build websites and web applications using modern, scalable, and industry-leading technologies.
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript (ES6+)",
                    "React.js",
                    "Full-Stack MERN (MongoDB, Express, React, Node)",
                    "Laravel (PHP)",
                    "C# .NET (ASP.NET MVC / Core)",
                  ].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded-full shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>

            {/* Packages Loop */}
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
                          <div className="absolute -top-4 right-8 rounded-full bg-nexovate-blue-600 px-4 py-1 text-xs font-semibold text-white">
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
                                <CheckIcon className="h-6 w-5 flex-none text-nexovate-blue-600" aria-hidden="true" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href="/contact"
                          className={`mt-8 block w-full rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                            pkg.popular
                              ? "bg-nexovate-blue-600 text-white hover:bg-nexovate-blue-500 focus-visible:outline-nexovate-blue-600"
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

            {/* Why Choose Section */}
            <div className="mt-32">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl text-center mb-16">
                Why Choose Nexovate?
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Expertise",
                    text: "Our experienced developers, designers, and marketers deliver professional quality at budget-friendly rates.",
                  },
                  {
                    title: "Customization",
                    text: "Every project is uniquely tailored — from web apps to mobile experiences — for your business goals.",
                  },
                  {
                    title: "Support",
                    text: "Our post-launch support ensures your website or app keeps running smoothly — long after delivery.",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">{card.title}</h3>
                    <p className="text-black dark:text-white">{card.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

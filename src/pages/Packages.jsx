import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import ParticleBackground from "../components/ParticleBackground";
import { FadeInWhenVisible } from "../components/Animations";
import { useNavigate } from "react-router-dom";

const packageCategories = [
  {
    title: "Software Development",
    packages: [
      {
        name: "Basic",
        price: "$499",
        features: ["Simple web application", "Up to 5 pages", "Basic functionality", "1 month support"],
        cta: "Get Started",
      },
      {
        name: "Premium",
        price: "$1,199",
        features: [
          "Advanced web application",
          "Up to 12 pages",
          "Database integration",
          "Custom functionality",
          "3 months support",
        ],
        cta: "Go Premium",
        popular: true,
      },
      {
        name: "Custom",
        price: "Custom Quote",
        features: [
          "Tailored enterprise solution",
          "Unlimited pages & features",
          "API integrations",
          "Advanced backend & security",
          "6 months premium support",
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
        price: "$199",
        features: ["5-page responsive website", "Basic SEO", "Contact form", "1 month support"],
        cta: "Get Started",
      },
      {
        name: "Business",
        price: "$399",
        features: ["Up to 10 pages", "Custom UI/UX design", "Speed optimization", "3 months support"],
        cta: "Upgrade Plan",
        popular: true,
      },
      {
        name: "E-Commerce",
        price: "$699",
        features: ["Online store setup", "Payment gateway integration", "Product & order management", "6 months support"],
        cta: "Launch Store",
      },
    ],
  },
  {
    title: "WordPress Development",
    packages: [
      {
        name: "Basic WP Site",
        price: "$149",
        features: ["5-page WordPress site", "Free premium theme", "Basic SEO", "1 month support"],
        cta: "Start Now",
      },
      {
        name: "Business WP",
        price: "$299",
        features: ["10 pages", "Custom UI", "Speed optimization", "Security setup", "3 months support"],
        cta: "Upgrade",
        popular: true,
      },
      {
        name: "WP E-Commerce",
        price: "$449",
        features: ["WooCommerce setup", "Payment integration", "Product upload & inventory system"],
        cta: "Build Store",
      },
    ],
  },
  {
    title: "Shopify Store Development",
    packages: [
      {
        name: "Basic Store",
        price: "$199",
        features: ["Theme setup", "Home + 3 inner pages", "Basic SEO", "Payment setup"],
        cta: "Start Store",
      },
      {
        name: "Professional Store",
        price: "$349",
        features: ["Custom UI sections", "Product pages", "App integrations", "3 months support"],
        cta: "Go Pro",
        popular: true,
      },
      {
        name: "Advanced Shopify",
        price: "$499",
        features: ["Full custom Shopify store", "Automation setup", "Inventory & shipping", "Premium support"],
        cta: "Build Premium Store",
      },
    ],
  },
  {
    title: "Mobile App Packages (iOS & Android)",
    packages: [
      {
        name: "Basic App",
        price: "$499",
        features: ["Hybrid app (React Native / Flutter)", "Up to 5 screens", "Basic backend setup", "1 month support"],
        cta: "Get Started",
      },
      {
        name: "Business App",
        price: "$999",
        features: ["iOS & Android build", "Custom UI", "Firebase / API integration", "Push notifications", "3 months support"],
        cta: "Build My App",
        popular: true,
      },
      {
        name: "Advanced / Enterprise",
        price: "$1,899",
        features: ["Fully custom app", "Database & cloud integration", "Admin panel & analytics", "User roles & authentication", "6 months premium support"],
        cta: "Get a Quote",
      },
    ],
  },
  {
    title: "Graphic Design",
    packages: [
      {
        name: "Basic",
        price: "$99/month",
        features: ["5 design requests", "Logo & social media graphics", "3 revisions per design"],
        cta: "Start Designing",
      },
      {
        name: "Premium",
        price: "$199/month",
        features: ["10 design requests", "Logo + branding", "Marketing materials", "Unlimited revisions"],
        cta: "Enhance Your Brand",
        popular: true,
      },
      {
        name: "Custom",
        price: "Custom Quote",
        features: ["Unlimited requests", "Full brand identity", "Print & digital designs", "Dedicated designer support"],
        cta: "Contact Us",
      },
    ],
  },
  {
    title: "Vector Design",
    packages: [
      {
        name: "Basic",
        price: "$79",
        features: ["1 vector illustration", "SVG / AI / PNG formats", "1 revision included"],
        cta: "Start Now",
      },
      {
        name: "Professional",
        price: "$149",
        features: ["3 vector artworks", "Full color palette", "Brand-based style", "Unlimited revisions"],
        cta: "Get Professional",
        popular: true,
      },
      {
        name: "Custom / Bulk",
        price: "Custom Quote",
        features: ["Full brand vector set", "Complex illustrations", "3D vector optional", "Dedicated designer support"],
        cta: "Contact Us",
      },
    ],
  },
  {
    title: "Video Editing Packages",
    packages: [
      {
        name: "Basic",
        price: "$149/month",
        features: ["Up to 5 short videos (≤1 min)", "Basic cuts & color correction", "2 revisions", "1080p output"],
        cta: "Start Editing",
      },
      {
        name: "Pro",
        price: "$299/month",
        features: ["Up to 10 short or 5 long videos", "Advanced effects & color grading", "Social media optimized", "Unlimited revisions"],
        cta: "Go Pro",
        popular: true,
      },
      {
        name: "Cinematic / Custom",
        price: "Custom Quote",
        features: ["Cinematic editing", "Motion graphics & VFX", "Multi-cam & voiceover sync", "Dedicated editor"],
        cta: "Contact Us",
      },
    ],
  },
  {
    title: "Photo Editing Packages",
    packages: [
      {
        name: "Basic",
        price: "$79/month",
        features: ["Up to 20 photos", "Color correction & cropping", "2 revisions"],
        cta: "Start Editing",
      },
      {
        name: "Premium",
        price: "$149/month",
        features: ["Up to 50 photos", "Retouching & enhancements", "Background cleanup", "Unlimited revisions"],
        cta: "Upgrade Plan",
        popular: true,
      },
      {
        name: "Commercial / Custom",
        price: "Custom Quote",
        features: ["Full catalog editing", "Model retouching", "Brand consistency", "Dedicated editor"],
        cta: "Contact Us",
      },
    ],
  },
  {
    title: "SEO Services",
    packages: [
      {
        name: "Basic",
        price: "$149/month",
        features: ["Keyword research", "On-page optimization", "Monthly reporting", "Local SEO"],
        cta: "Boost Rankings",
      },
      {
        name: "Premium",
        price: "$299/month",
        features: ["Advanced keyword research", "On+Off-page SEO", "Content strategy", "Backlink building", "Weekly reports"],
        cta: "Dominate Search",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom Quote",
        features: ["International SEO", "Advanced analytics", "Competitor analysis", "Dedicated SEO team"],
        cta: "Contact Us",
      },
    ],
  },
  {
    title: "Digital Marketing",
    packages: [
      {
        name: "Starter",
        price: "$199/month",
        features: ["Social media management", "Email marketing", "Basic PPC", "Monthly report"],
        cta: "Start Marketing",
      },
      {
        name: "Growth",
        price: "$399/month",
        features: ["Multi-platform ads", "Email automation", "Influencer outreach", "Content creation", "Weekly insights"],
        cta: "Grow Your Reach",
        popular: true,
      },
      {
        name: "Pro / Custom",
        price: "Custom Quote",
        features: ["Full-service marketing", "Conversion optimization", "Analytics dashboard", "Dedicated expert"],
        cta: "Contact Us",
      },
    ],
  },
];

export default function Packages() {
  const navigate = useNavigate();

  const handleContactClick = (pkg, category) => {
    const packageDetails = {
      name: pkg.name,
      price: pkg.price,
      category: category.title,
    };
    navigate("/contact", { state: { packageDetails } });
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        <SEO
          title="Packages"
          description="Explore Nexovate’s mid-range affordable packages — from software and apps to vector design, video editing, branding, and SEO — all realistic and achievable globally."
          keywords="vector design, web development, mobile apps, SEO, video editing, photo editing, branding, software packages"
        />

        <div className="text-gray-900 dark:text-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                Our Affordable Service Packages
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                We provide premium services at mid-range prices — realistic, high-quality, and globally accessible.
              </p>
            </div>

            {/* Packages Loop */}
            {packageCategories.map((category) => (
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
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleContactClick(pkg, category)}
                          className={`mt-8 block w-full rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                            pkg.popular
                              ? "bg-nexovate-blue-600 text-white hover:bg-nexovate-blue-500 focus-visible:outline-nexovate-blue-600"
                              : "bg-gray-50 text-gray-900 hover:bg-gray-100 focus-visible:outline-gray-600"
                          } dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600`}
                        >
                          {pkg.cta}
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

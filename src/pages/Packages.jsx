import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { CheckIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import ParticleBackground from "../components/ParticleBackground";
import { FadeInWhenVisible } from "../components/Animations";
import { useNavigate } from "react-router-dom";

const packageCategories = [
  {
    title: "Software Development",
    packages: [
      {
        name: "Basic",
        price: "$699",
        features: ["Simple web application", "Up to 5 pages", "Basic functionality", "1 month of support"],
        cta: "Get Started",
      },
      {
        name: "Premium",
        price: "$1,699",
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
        price: "$249",
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
        price: "$499",
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
        price: "$799",
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
        price: "$699",
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
        price: "$1,299",
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
        price: "$2,199",
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
        price: "$149/month",
        features: ["5 design requests", "Logo design", "Social media graphics", "3 revisions per design"],
        cta: "Start Designing",
      },
      {
        name: "Premium",
        price: "$299/month",
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
    title: "Vector Design",
    packages: [
      {
        name: "Basic",
        price: "$99",
        features: [
          "1 detailed vector illustration",
          "SVG / AI / PNG formats",
          "Commercial license",
          "1 revision included",
        ],
        cta: "Start Now",
      },
      {
        name: "Professional",
        price: "$199",
        features: [
          "3 high-quality vector artworks",
          "Brand-based design style",
          "Full color palette",
          "Unlimited revisions",
        ],
        cta: "Get Professional",
        popular: true,
      },
      {
        name: "Custom / Bulk",
        price: "Custom Quote",
        features: [
          "Full brand vector set",
          "Complex illustrations / Mascots",
          "3D vector style (optional)",
          "Dedicated designer support",
        ],
        cta: "Contact Us",
      },
    ],
  },
  {
    title: "Video Editing Packages",
    packages: [
      {
        name: "Basic",
        price: "$199/month",
        features: [
          "Up to 5 short videos (≤1 min each)",
          "Basic cuts, transitions & color correction",
          "1080p output",
          "2 revisions per video",
        ],
        cta: "Start Editing",
      },
      {
        name: "Pro",
        price: "$399/month",
        features: [
          "Up to 10 short or 5 long-form videos",
          "Advanced transitions & effects",
          "Color grading + sound enhancement",
          "Social media optimization",
          "Unlimited revisions",
        ],
        cta: "Go Pro",
        popular: true,
      },
      {
        name: "Cinematic / Custom",
        price: "Custom Quote",
        features: [
          "Cinematic video editing",
          "Multi-cam & voiceover sync",
          "Motion graphics & VFX",
          "Dedicated editor",
          "Priority delivery",
        ],
        cta: "Contact Us",
      },
    ],
  },
  {
    title: "Photo Editing Packages",
    packages: [
      {
        name: "Basic",
        price: "$99/month",
        features: [
          "Up to 20 photos",
          "Color correction & cropping",
          "Lighting adjustments",
          "2 revisions",
        ],
        cta: "Start Editing",
      },
      {
        name: "Premium",
        price: "$199/month",
        features: [
          "Up to 50 photos",
          "Retouching & enhancements",
          "Background cleanup / blur",
          "Product or portrait focus",
          "Unlimited revisions",
        ],
        cta: "Upgrade Plan",
        popular: true,
      },
      {
        name: "Commercial / Custom",
        price: "Custom Quote",
        features: [
          "Studio-level photo editing",
          "Full product catalog editing",
          "Model retouching",
          "Branding & color consistency",
          "Dedicated editor",
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
        price: "$249/month",
        features: ["Keyword research", "On-page optimization", "Monthly reporting", "Local SEO"],
        cta: "Boost Rankings",
      },
      {
        name: "Premium",
        price: "$499/month",
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
        price: "$349/month",
        features: ["Social media management", "Email marketing", "Basic PPC", "Monthly report"],
        cta: "Start Marketing",
      },
      {
        name: "Growth",
        price: "$699/month",
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
          description="Explore Nexovate’s affordable digital packages — from software and apps to vector design, video editing, branding, and SEO — all crafted below global market prices."
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
                We offer professional services below global market prices — ensuring premium quality and real-world scalability for every business.
              </p>
            </div>

            {/* Technologies */}
            <FadeInWhenVisible>
              <div className="mt-20 text-center">
                <div className="inline-flex items-center justify-center mb-4">
                  <CodeBracketIcon className="h-8 w-8 text-nexovate-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-2xl font-semibold text-black dark:text-white">Technologies We Use</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                  Our team builds using React, Angular, Laravel, .NET, Flutter, Tailwind, and modern cloud tools to deliver world-class digital experiences.
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Packages Loop */}
            {packageCategories.map((category, i) => (
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

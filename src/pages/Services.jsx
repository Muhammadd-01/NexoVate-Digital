import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CameraIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  SparklesIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import ParticleBackground from "../components/ParticleBackground";

const services = [
  {
    name: "Software Development",
    description:
      "We build scalable and high-performance software systems using Laravel, .NET, Node.js, and Python — tailored for startups and enterprises at a fraction of global market rates. From dashboards to automation tools, we code reliable solutions that grow with your business.",
    icon: CodeBracketIcon,
  },
  {
    name: "Full-Stack Web Development",
    description:
      "NexoVate specializes in modern, responsive, and SEO-friendly websites using React, Next.js, Angular, and TailwindCSS. Whether it's a landing page or a full enterprise system — we deliver fast, secure, and futuristic digital platforms.",
    icon: GlobeAltIcon,
  },
  {
    name: "Mobile App Development (iOS & Android)",
    description:
      "We design and develop mobile apps using Flutter and React Native — with seamless UI, smooth performance, and cloud-powered backends.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Graphic & Vector Design",
    description:
      "From branding kits to vector illustrations, our designers craft visuals that define your brand identity.",
    icon: PaintBrushIcon,
  },
  {
    name: "UI/UX Design",
    description:
      "We design sleek, user-friendly, and conversion-optimized interfaces backed by user research.",
    icon: SparklesIcon,
  },
  {
    name: "Photo Editing",
    description:
      "Professional retouching, lighting fixes, and color correction for clean & branded visuals.",
    icon: CameraIcon,
  },
  {
    name: "Video Editing",
    description:
      "From social media clips to cinematic edits — smooth transitions, effects, and full production.",
    icon: CameraIcon,
  },
  {
    name: "SEO Services",
    description:
      "Keyword research, backlinks, on-page optimization, and SEO strategies that deliver real ranking results.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Digital Marketing",
    description:
      "We handle social media growth, ad campaigns, content marketing, and brand management.",
    icon: GlobeAltIcon,
  },
  {
    name: "Website Maintenance & Support",
    description:
      "Updates, security patches, and performance optimization to keep your site running smoothly.",
    icon: WrenchScrewdriverIcon,
  },
    {
    name: "Shopify Store Development",
    description:
      "We build premium, high-converting Shopify stores — custom themes, product setup, payment integrations, Shopify apps, and full store automation.",
    icon: ShoppingBagIcon,
  },
];

export default function Services() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        <SEO
          title="Our Services"
          description="Explore Nexovate's global digital services — from full-stack web development to vector design, SEO, mobile apps, and marketing — all priced lower than global market rates."
          keywords="web development, software development, mobile apps, vector design, SEO, UI/UX, photo editing, video editing, digital marketing, affordable packages"
        />

        <div className="text-gray-900 dark:text-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            {/* Header */}
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-nexovate-blue-600 dark:text-nexovate-blue-400">
                Our Services
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Professional Digital Services at Global Quality — Local Prices
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                We provide all-in-one digital solutions — from development and design to SEO and marketing — at rates lower than global competitors.
              </p>
            </div>

            {/* Services Grid */}
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {services.map((service) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col"
                  >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <service.icon
                        className="h-6 w-6 flex-none text-nexovate-blue-600 dark:text-nexovate-blue-400"
                        aria-hidden="true"
                      />
                      {service.name}
                    </dt>
                    <dd className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {service.description}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>

            {/* ------------------------- */}
            {/* TECHNOLOGIES SECTION */}
            {/* ------------------------- */}

            <div className="mt-28">
              <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-10">
                Technologies We Use
              </h2>

              {/* FIRST ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                {/* Frontend */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Frontend</h3>
                  <div className="space-y-3">
                    {["HTML • CSS • JS", "React", "Next.js", "Angular", "TailwindCSS"].map((item) => (
                      <div
                        key={item}
                        className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 font-semibold
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                        hover:bg-nexovate-blue-600 hover:text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Backend</h3>
                  <div className="space-y-3">
                    {["Laravel", ".NET • C#", "Node.js", "Express.js", "Python"].map((item) => (
                      <div
                        key={item}
                        className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 font-semibold
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                        hover:bg-nexovate-blue-600 hover:text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Stack */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Full-Stack</h3>
                  <div className="space-y-3">
                    {["MERN Stack", "MEAN Stack"].map((item) => (
                      <div
                        key={item}
                        className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 font-semibold
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                        hover:bg-nexovate-blue-600 hover:text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* SECOND ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-14">

                {/* Mobile */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Mobile</h3>
                  <div className="space-y-3">
                    {["Flutter", "React Native"].map((item) => (
                      <div
                        key={item}
                        className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 font-semibold
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                        hover:bg-nexovate-blue-600 hover:text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Design</h3>
                  <div className="space-y-3">
                    {["Canva", "Illustrator", "Photoshop"].map((item) => (
                      <div
                        key={item}
                        className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 font-semibold
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                        hover:bg-nexovate-blue-600 hover:text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video */}
                <div>
                  <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Video & Motion</h3>
                  <div className="space-y-3">
                    {["Premiere Pro", "After Effects"].map((item) => (
                      <div
                        key={item}
                        className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 font-semibold
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                        hover:bg-nexovate-blue-600 hover:text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Want a custom package or combination of services? Let’s create your digital growth plan today.
              </p>
              <Link
                to="/contact"
                className="inline-block rounded-md bg-nexovate-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-nexovate-blue-500"
              >
                Get in Touch
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

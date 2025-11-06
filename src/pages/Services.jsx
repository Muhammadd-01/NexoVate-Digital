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
} from "@heroicons/react/24/outline";
import ParticleBackground from "../components/ParticleBackground";

const services = [
  // 💻 Software Development
  {
    name: "Software Development",
    description:
      "We build scalable and high-performance software systems using Laravel, .NET, Node.js, and Python — tailored for startups and enterprises at a fraction of global market rates. From dashboards to automation tools, we code reliable solutions that grow with your business.",
    icon: CodeBracketIcon,
  },

  // 🌐 Web Development
  {
    name: "Full-Stack Web Development",
    description:
      "NexoVate specializes in modern, responsive, and SEO-friendly websites using React, Next.js, Angular, and TailwindCSS. Whether it's a landing page or a full enterprise system — we deliver fast, secure, and futuristic digital platforms.",
    icon: GlobeAltIcon,
  },

  // 📱 Mobile Apps
  {
    name: "Mobile App Development (iOS & Android)",
    description:
      "We design and develop mobile apps using Flutter and React Native — with seamless UI, smooth performance, and cloud-powered backends. From business tools to social apps, we turn your ideas into mobile reality.",
    icon: DevicePhoneMobileIcon,
  },

  // 🎨 Graphic & Vector Design
  {
    name: "Graphic & Vector Design",
    description:
      "From branding kits to vector illustrations, our designers craft visuals that define your brand identity. We create posters, social media designs, and scalable vector graphics that stand out — all at rates below global market standards.",
    icon: PaintBrushIcon,
  },

  // 🧠 UI/UX Design
  {
    name: "UI/UX Design",
    description:
      "We design sleek, user-friendly, and conversion-optimized interfaces. Each design is backed by research and crafted for real users — ensuring both beauty and usability.",
    icon: SparklesIcon,
  },

  // ✂️ Photo Editing
  {
    name: "Photo Editing",
    description:
      "Professional retouching, color correction, lighting adjustments, and background enhancement — we make every photo look clean, sharp, and ready for branding or marketing.",
    icon: CameraIcon,
  },

  // 🎬 Video Editing
  {
    name: "Video Editing",
    description:
      "From short social media clips to cinematic edits, we provide high-quality video production, transitions, and effects — perfect for brands, influencers, and agencies.",
    icon: CameraIcon,
  },

  // 🚀 SEO
  {
    name: "SEO Services",
    description:
      "We deliver affordable SEO with global-level performance — including keyword research, on-page optimization, backlinks, and content strategy. Get real growth without overpaying.",
    icon: MagnifyingGlassIcon,
  },

  // 📈 Digital Marketing
  {
    name: "Digital Marketing",
    description:
      "We handle social media growth, content marketing, and ad campaigns across all major platforms — Facebook, Instagram, Google, and TikTok. You focus on your business, we grow your brand.",
    icon: GlobeAltIcon,
  },

  // 🔧 Website Maintenance
  {
    name: "Website Maintenance & Support",
    description:
      "We provide updates, security patches, and performance optimization to ensure your site always runs smoothly — so you never worry about downtime again.",
    icon: WrenchScrewdriverIcon,
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
                We provide all-in-one digital solutions — from development and design to SEO and marketing — at rates lower than global competitors, with the same world-class quality.
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
                    transition={{ duration: 0.5 }}
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

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Want a custom package or combination of services? Let’s create your digital growth plan today.
              </p>
              <Link
                to="/contact"
                className="inline-block rounded-md bg-nexovate-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-nexovate-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nexovate-blue-600"
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

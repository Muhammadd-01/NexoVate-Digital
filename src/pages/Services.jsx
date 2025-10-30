import SEO from "../components/SEO"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  CodeBracketIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CameraIcon,
} from "@heroicons/react/24/outline"
import ParticleBackground from "../components/ParticleBackground"

const services = [
  {
    name: "Full-Stack Web Development",
    description:
      "We build powerful, scalable, and high-performing websites using React, Next.js, Angular, Laravel, .NET, PHP, TailwindCSS, and TypeScript. From sleek landing pages to enterprise-grade platforms — we deliver digital experiences that attract and convert audiences worldwide.",
    icon: CodeBracketIcon,
  },
  {
    name: "UI/UX Design",
    description:
      "Our creative design team focuses on building modern, engaging, and conversion-driven interfaces. Every pixel, layout, and motion effect is crafted to create an intuitive experience that users love to interact with.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "SEO & Digital Marketing",
    description:
      "Rank higher and grow faster. We implement advanced on-page, off-page, and technical SEO strategies with data-backed marketing campaigns — boosting visibility, leads, and global recognition across all major platforms.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Branding & Graphic Design",
    description:
      "We help brands find their voice through creative design and storytelling. From logos and brand kits to social media visuals — we design identities that inspire trust and make your brand unforgettable.",
    icon: PaintBrushIcon,
  },
  {
    name: "Photo & Video Editing",
    description:
      "Our media team specializes in cinematic video editing, promotional content, reels, and corporate branding visuals. Whether it’s a business campaign or personal brand storytelling — we turn raw visuals into emotionally powerful digital art that connects with audiences.",
    icon: CameraIcon,
  },
  {
    name: "Website Maintenance & Support",
    description:
      "Your website deserves consistent care. We handle updates, backups, performance monitoring, and security — ensuring your site stays fast, safe, and always online so you can focus on growing your business.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Global Business Solutions",
    description:
      "We empower startups and enterprises to scale beyond borders with automation, cloud integration, and smart digital solutions. Nexovate helps businesses go from local to global — efficiently and strategically.",
    icon: GlobeAltIcon,
  },
]

export default function Services() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div className="relative z-10">
        <SEO
          title="Our Services"
          description="Discover Nexovate’s global digital services including web development, SEO, UI/UX design, branding, photo and video editing, and business automation solutions."
          keywords="web development, SEO, branding, UI/UX design, photo editing, video editing, digital marketing, global IT services, full-stack development"
        />
        <div className="text-gray-900 dark:text-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-nexovate-blue-600 dark:text-nexovate-blue-400">
                Our Services
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Transforming Ideas Into Digital Powerhouses
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                At Nexovate, we combine technology, creativity, and strategy to help businesses thrive in the digital world. From web solutions to marketing and media — we deliver excellence that speaks results.
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
                        className="h-5 w-5 flex-none text-nexovate-blue-600 dark:text-nexovate-blue-400"
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
                Ready to bring your vision to life? Let’s collaborate and build something that sets your brand apart globally.
              </p>
              <Link
                to="/contact"
                className="inline-block rounded-md bg-nexovate-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-nexovate-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nexovate-blue-600"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

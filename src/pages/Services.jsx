import SEO from "../components/SEO"
import ParticleBackground from "../components/ParticleBackground"
import {
  CodeBracketIcon,
  CpuChipIcon,
  CursorArrowRaysIcon,
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline"

const services = [
  {
    name: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your specific business needs. Our team of expert developers creates scalable, efficient, and user-friendly applications that streamline your operations and drive growth.",
    icon: CodeBracketIcon,
  },
  {
    name: "Web Application Development",
    description:
      "Powerful and scalable web applications built with cutting-edge technologies. We specialize in creating responsive, high-performance web apps that provide seamless user experiences across all devices.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android devices. Our mobile solutions combine intuitive design with robust functionality to engage users and drive business results.",
    icon: CpuChipIcon,
  },
  {
    name: "Cloud Solutions",
    description:
      "Secure and scalable cloud infrastructure and migration services. We help businesses leverage the power of cloud computing to improve flexibility, reduce costs, and enhance collaboration.",
    icon: CloudIcon,
  },
  {
    name: "DevOps Services",
    description:
      "Streamline your development and operations with our DevOps services. We implement continuous integration and delivery pipelines, automate processes, and optimize your infrastructure for maximum efficiency.",
    icon: ServerIcon,
  },
  {
    name: "Cybersecurity Solutions",
    description:
      "Protect your digital assets with our comprehensive cybersecurity services. We offer threat assessment, security audits, and implement robust security measures to safeguard your business against cyber threats.",
    icon: ShieldCheckIcon,
  },
]

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore our range of software development services tailored to your business needs."
        keywords="software development, web applications, mobile apps, cloud solutions, DevOps, cybersecurity"
      />
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <div className="bg-white/95 dark:bg-black/95 text-gray-900 dark:text-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-growhub-red-600 dark:text-growhub-red-400">
                  Our Services
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Comprehensive Software Solutions for Your Business
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  At GrowHub Solutions, we offer a wide range of software development services to help your business
                  thrive in the digital world. Our expert team is committed to delivering high-quality, innovative
                  solutions tailored to your specific needs.
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                  {services.map((service) => (
                    <div key={service.name} className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                        <service.icon
                          className="h-5 w-5 flex-none text-growhub-red-600 dark:text-growhub-red-400"
                          aria-hidden="true"
                        />
                        {service.name}
                      </dt>
                      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                        <p className="flex-auto">{service.description}</p>
                        <p className="mt-6">
                          <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-growhub-red-600 dark:text-growhub-red-400"
                          >
                            Learn more <span aria-hidden="true">→</span>
                          </a>
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


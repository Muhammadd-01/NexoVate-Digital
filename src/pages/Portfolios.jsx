import SEO from "../components/SEO"

const projects = [
  {
    name: "E-commerce Platform",
    description: "A fully-featured e-commerce platform with inventory management and payment integration.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "E-commerce platform dashboard",
  },
  {
    name: "Healthcare Management System",
    description: "A comprehensive healthcare management system for hospitals and clinics.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Healthcare management system interface",
  },
  {
    name: "Real Estate Listing App",
    description: "A mobile app for real estate listings with virtual tour capabilities.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Real estate listing app screenshot",
  },
  // Add more projects as needed
]

export default function Portfolios() {
  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore our portfolio of successful software projects and solutions."
        keywords="software portfolio, case studies, project showcase"
      />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Portfolio</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Discover some of our most impactful projects and how we've helped businesses grow.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={project.imageSrc || "/placeholder.svg"}
                    alt={project.imageAlt}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      Case Study
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {project.name}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}


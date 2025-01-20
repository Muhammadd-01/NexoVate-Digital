import SEO from "../components/SEO"

const packages = [
  {
    name: "Starter",
    price: "$99/month",
    features: ["Basic website", "5 pages", "Contact form", "Mobile responsive"],
  },
  {
    name: "Professional",
    price: "$199/month",
    features: ["Dynamic website", "10 pages", "CMS integration", "SEO optimization", "E-commerce functionality"],
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
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose the right package for your business
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a range of packages to suit businesses of all sizes. Whether you're just starting out or looking
              to scale, we have a solution for you.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`p-8 ${index === 1 ? "bg-gray-50" : ""} ${index === 0 ? "rounded-l-3xl" : ""} ${index === packages.length - 1 ? "rounded-r-3xl" : ""}`}
              >
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">{pkg.name}</h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{pkg.price}</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-growhub-red"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-8 block rounded-md bg-growhub-red px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-growhub-red"
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}


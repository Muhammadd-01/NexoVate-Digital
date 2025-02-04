import SEO from "../components/SEO"
import ParticleBackground from "../components/ParticleBackground"

const testimonials = [
  {
    body: "NexoVate Digital transformed our business with their innovative software. Their team's expertise and dedication are unmatched.",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Working with NexoVate was a game-changer for our startup. They delivered a high-quality product that exceeded our expectations.",
    author: {
      name: "Michael Foster",
      handle: "michaelfoster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // Add more testimonials as needed
]

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="Read what our clients say about NexoVate Digital and our software development services."
        keywords="client testimonials, customer reviews, software development feedback"
      />
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10">
          <div className="text-gray-900 dark:text-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-nexovate-blue-600 dark:text-nexovate-blue-400">
                  Testimonials
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  We have worked with thousands of amazing people
                </p>
              </div>
              <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                      <figure className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 text-sm leading-6">
                        <blockquote className="text-gray-900 dark:text-gray-100">
                          <p>{`"${testimonial.body}"`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <img
                            className="h-10 w-10 rounded-full bg-gray-50 dark:bg-gray-800"
                            src={testimonial.author.imageUrl || "/placeholder.svg"}
                            alt=""
                          />
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                            <div className="text-gray-600 dark:text-gray-400">{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


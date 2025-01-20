import { useParams } from "react-router-dom"
import SEO from "../components/SEO"

const blogPosts = {
  1: {
    title: "Boost your conversion rate",
    content: `
      <p>Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</p>
      <p>Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</p>
      <p>Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</p>
    `,
    author: "Michael Foster",
    date: "Mar 16, 2020",
  },
  2: {
    title: "How to use search engine optimization to drive sales",
    content: `
      <p>Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.</p>
      <p>Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.</p>
      <p>Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.</p>
    `,
    author: "Lindsay Walton",
    date: "Mar 10, 2020",
  },
}

export default function BlogPost() {
  const { id } = useParams()
  const post = blogPosts[id]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <>
      <SEO
        title={post.title}
        description={`Read our blog post: ${post.title}`}
        keywords={`blog, ${post.title.toLowerCase()}, software development`}
      />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              By {post.author} on {post.date}
            </p>
            <div className="mt-10 space-y-8 text-gray-600" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    </>
  )
}


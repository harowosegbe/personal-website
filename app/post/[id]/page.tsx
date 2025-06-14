import { notFound } from 'next/navigation'
import Image from 'next/image'
import posts from '@/app/data/posts.json'

interface Post {
  id: string
  date: string
  title: string
  summary: string
  description: string
  technologies: string[]
  duration: string
  image?: string
  video?: string
  youtube?: string
  gallery?: string[]
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric',
    month: 'long'
  });
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.posts.find((p: Post) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-mono">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.duration}</span>
        </div>
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-4 mb-6 font-mono">{post.summary}</p>
        <div className="flex flex-wrap gap-2">
          {post.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {post.youtube ? (
        <div className="relative w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
          <iframe
            src={post.youtube}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : post.video ? (
        <div className="relative w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
          <video
            src={post.video}
            className="w-full h-full object-contain"
            poster={post.image}
            muted
            autoPlay
            loop
          >
            Your browser does not support the video tag.
          </video>
        </div>
      ) : post.image ? (
        <div className="relative w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain"
            priority
          />
        </div>
      ) : null}

      <br/>

      <div className="prose prose-lg dark:prose-invert max-w-none font-mono">
        <p className="text-base text-gray-700 dark:text-gray-300">{post.description}</p>
      </div>

      {post.gallery && post.gallery.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-mono">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {post.gallery.map((image, index) => (
              <div key={index} className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                <Image
                  src={image}
                  alt={`${post.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
} 
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Basketball Technology",
    excerpt: "Exploring how modern technology is revolutionizing the game of basketball, from smart balls to AI-powered training systems.",
    category: "Innovation",
    date: "March 15, 2024",
    image: "/5.jpg",
    slug: "evolution-of-basketball-technology"
  },
  {
    id: 2,
    title: "Sustainability in Sports Manufacturing",
    excerpt: "Our commitment to environmental responsibility in basketball production and how we're reducing our carbon footprint.",
    category: "Sustainability",
    date: "March 10, 2024",
    image: "/6.jpg",
    slug: "sustainability-in-sports-manufacturing"
  },
  {
    id: 3,
    title: "The Science of Bounce: Material Innovations",
    excerpt: "Delving into the latest advancements in basketball materials that enhance performance and durability.",
    category: "Research",
    date: "March 5, 2024",
    image: "/7.jpg",
    slug: "science-of-bounce-material-innovations"
  },
  {
    id: 4,
    title: "From Court to Lab: Our R&D Process",
    excerpt: "An inside look at how we develop and test new basketball technologies to meet professional standards.",
    category: "Behind the Scenes",
    date: "February 28, 2024",
    image: "/8.jpg",
    slug: "from-court-to-lab-rd-process"
  },
  {
    id: 5,
    title: "The Global Impact of Basketball Technology",
    excerpt: "How our innovations are changing the game at all levels, from street courts to international arenas.",
    category: "Industry Trends",
    date: "February 20, 2024",
    image: "/9.jpg",
    slug: "global-impact-basketball-technology"
  },
  {
    id: 6,
    title: "Customization: The Future of Basketball Equipment",
    excerpt: "Exploring how personalized gear is revolutionizing player performance and comfort on the court.",
    category: "Innovation",
    date: "February 15, 2024",
    image: "/10.jpg",
    slug: "customization-future-basketball-equipment"
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-16">Latest News & Updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group relative overflow-hidden rounded-2xl bg-[#0F0F13] transition-transform hover:scale-[1.02]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                height={400}
                width={600}
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="relative p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-[#cc73f8]">{post.category}</span>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <h2 className="mb-3 text-2xl font-bold">{post.title}</h2>
              <p className="mb-4 text-gray-400 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center text-[#cc73f8]">
                Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}


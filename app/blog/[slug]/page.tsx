import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'

const blogPosts = {
  "evolution-of-basketball-technology": {
    title: "The Evolution of Basketball Technology",
    date: "March 15, 2024",
    author: {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      avatar: "/ceo.jpg"
    },
    category: "Innovation",
    readTime: "8 min read",
    content: [
      {
        heading: "The Digital Revolution",
        text: "Modern basketball production incorporates advanced sensors and testing equipment to ensure perfect sphericity and consistent bounce characteristics. Computer-aided design (CAD) allows us to optimize groove patterns for superior grip and control. These technological advancements have revolutionized how we approach basketball manufacturing, enabling us to create products that meet the exacting standards of professional players."
      },
      {
        heading: "Material Innovation",
        text: "Today's professional basketballs utilize composite materials that maintain their grip and shape throughout intense gameplay. Our research and development team continually explores new materials and manufacturing techniques to enhance performance. From moisture-wicking surfaces to impact-resistant cores, every component of our basketballs is engineered for peak performance."
      },
      {
        heading: "Smart Basketballs",
        text: "The latest frontier in basketball technology is the integration of smart features. Embedded sensors can now track a ball's movement, spin rate, and even shooting accuracy. This data can be transmitted in real-time to mobile apps, providing players and coaches with invaluable insights for training and performance analysis."
      },
      {
        heading: "Future Prospects",
        text: "Looking ahead, we're exploring exciting possibilities such as adaptive grip technology that responds to playing conditions and biodegradable materials for eco-friendly recreational balls. The future of basketball technology is bright, and we're committed to leading the charge in innovation."
      }
    ],
    coverImage: "/5.jpg"
  },
  "sustainability-in-sports-manufacturing": {
    title: "Sustainability in Sports Manufacturing",
    date: "March 10, 2024",
    author: {
      name: "Emma Green",
      role: "Sustainability Officer",
      avatar: "/chris.png"
    },
    category: "Sustainability",
    readTime: "6 min read",
    content: [
      {
        heading: "Eco-Friendly Materials",
        text: "We're committed to using sustainable materials in our manufacturing process, reducing our environmental impact while maintaining product quality. Our latest line of basketballs incorporates recycled rubber and eco-friendly dyes, setting a new standard for sustainability in sports equipment."
      },
      {
        heading: "Renewable Energy",
        text: "Our production facilities are powered by 100% renewable energy, marking a significant step towards our carbon-neutral goals. We've installed solar panels and wind turbines at our main manufacturing sites, drastically reducing our carbon footprint and setting an example for the industry."
      },
      {
        heading: "Waste Reduction Initiatives",
        text: "We've implemented comprehensive waste reduction programs across all our facilities. From recycling production scraps to optimizing packaging, every aspect of our manufacturing process is designed to minimize waste and maximize resource efficiency."
      },
      {
        heading: "Water Conservation",
        text: "Water usage in our manufacturing processes has been significantly reduced through innovative technologies and water recycling systems. We're proud to say that our water consumption per unit produced has decreased by 50% over the last five years."
      }
    ],
    coverImage: "/6.jpg"
  },
  "science-of-bounce-material-innovations": {
    title: "The Science of Bounce: Material Innovations",
    date: "March 5, 2024",
    author: {
      name: "Dr. Alex Johnson",
      role: "Head of Material Science",
      avatar: "/steve.jpg"
    },
    category: "Research",
    readTime: "7 min read",
    content: [
      {
        heading: "Composite Materials Revolution",
        text: "Our latest research has led to the development of advanced composite materials that offer unprecedented bounce consistency and durability. These new materials combine synthetic polymers with natural rubber in a way that optimizes energy return while maintaining the tactile feel players expect."
      },
      {
        heading: "Nanotechnology in Basketball Manufacturing",
        text: "We're harnessing the power of nanotechnology to enhance the surface properties of our basketballs. Nanoparticle coatings provide improved grip, moisture-wicking capabilities, and even self-cleaning properties, elevating the performance of our products to new heights."
      },
      {
        heading: "Biomimicry in Design",
        text: "Nature has always been a great source of inspiration. Our newest ball designs incorporate principles of biomimicry, mimicking the texture of certain plant leaves to create a surface that offers optimal grip in various playing conditions."
      },
      {
        heading: "Future of Materials",
        text: "Looking ahead, we're exploring shape-memory alloys and smart materials that could revolutionize how basketballs respond to different temperatures and impacts. These innovations could lead to balls that maintain consistent performance across a wide range of environmental conditions."
      }
    ],
    coverImage: "/7.jpg"
  },
  "from-court-to-lab-rd-process": {
    title: "From Court to Lab: Our R&D Process",
    date: "February 28, 2024",
    author: {
      name: "Dr. Maria Rodriguez",
      role: "Director of Research & Development",
      avatar: "/ceo.jpg"
    },
    category: "Behind the Scenes",
    readTime: "9 min read",
    content: [
      {
        heading: "Initial Concept and Player Feedback",
        text: "Our R&D process begins on the court, where we gather insights from players of all levels. We conduct extensive interviews and observational studies to understand the needs and preferences of basketball players, from professionals to recreational enthusiasts."
      },
      {
        heading: "Prototyping and Testing",
        text: "Once we have a concept, our team of engineers and designers create multiple prototypes using state-of-the-art 3D printing and traditional manufacturing techniques. These prototypes undergo rigorous testing in our advanced laboratories, where we simulate various playing conditions and measure performance metrics."
      },
      {
        heading: "Biomechanical Analysis",
        text: "We use motion capture technology and force plate analysis to study how players interact with our basketballs. This biomechanical data helps us fine-tune the ball's properties to enhance player performance and reduce the risk of injuries."
      },
      {
        heading: "Iterative Refinement",
        text: "The development process is highly iterative. We continuously refine our designs based on lab results and player feedback, often going through dozens of iterations before arriving at a final product that meets our exacting standards for performance, durability, and player satisfaction."
      }
    ],
    coverImage: "/8.jpg"
  },
  "global-impact-basketball-technology": {
    title: "The Global Impact of Basketball Technology",
    date: "February 20, 2024",
    author: {
      name: "James Lee",
      role: "Global Market Analyst",
      avatar: "/steve.jpg"
    },
    category: "Industry Trends",
    readTime: "8 min read",
    content: [
      {
        heading: "Democratizing High-Performance Equipment",
        text: "Our technological advancements in basketball manufacturing have made high-quality equipment more accessible to players worldwide. By optimizing production processes, we've been able to offer professional-grade basketballs at more affordable price points, enabling players in developing markets to access top-tier equipment."
      },
      {
        heading: "Enhancing the Game at All Levels",
        text: "From street courts to international arenas, our innovations are changing how the game is played. Smart basketballs with embedded sensors are providing amateur players with professional-level insights into their performance, while our durable designs are withstanding the rigors of outdoor play in various climates."
      },
      {
        heading: "Supporting Grassroots Programs",
        text: "We're partnering with basketball associations around the world to support grassroots development programs. By providing advanced equipment and training tools, we're helping to nurture the next generation of basketball talent in communities that previously had limited access to such resources."
      },
      {
        heading: "Environmental Considerations",
        text: "As our products reach a global audience, we're acutely aware of our environmental responsibility. Our focus on sustainable manufacturing and materials is setting new industry standards, influencing how sports equipment is produced and disposed of worldwide."
      }
    ],
    coverImage: "/9.jpg"
  },
  "customization-future-basketball-equipment": {
    title: "Customization: The Future of Basketball Equipment",
    date: "February 15, 2024",
    author: {
      name: "Sophia Patel",
      role: "Product Innovation Specialist",
      avatar: "/ceo.jpg"
    },
    category: "Innovation",
    readTime: "7 min read",
    content: [
      {
        heading: "Personalized Performance",
        text: "The future of basketball equipment lies in customization. We're developing technologies that allow us to create basketballs tailored to individual player preferences and playing styles. From grip texture to bounce characteristics, every aspect of the ball can be fine-tuned to enhance player performance."
      },
      {
        heading: "3D-Printed Custom Basketballs",
        text: "Advancements in 3D printing technology are opening up new possibilities for customization. We're exploring ways to use 3D printing to create bespoke basketballs with unique internal structures that can be optimized for specific playing conditions or player requirements."
      },
      {
        heading: "Smart Customization with AI",
        text: "Artificial Intelligence is playing a crucial role in our customization efforts. By analyzing vast amounts of player data, our AI systems can recommend optimal ball configurations for individual players, teams, or even specific game strategies."
      },
      {
        heading: "The Role of Augmented Reality",
        text: "We're integrating Augmented Reality (AR) into our customization process. Players can use AR apps to visualize and test different ball designs before ordering, ensuring they get exactly what they need to elevate their game."
      }
    ],
    coverImage: "/10.jpg"
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-[#0B0B0F]">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B0B0F]" />
        
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-4 py-8">
          <Link 
            href="/blog"
            className="mb-8 inline-flex items-center text-sm text-gray-400 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <div className="space-y-4">
            <span className="text-sm text-[#cc73f8]">{post.category}</span>
            <h1 className="text-4xl font-bold md:text-5xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Tag className="mr-2 h-4 w-4" />
                {post.category}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-[#cc73f8]">{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="prose prose-invert prose-purple max-w-none">
          {post.content.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-6">{section.heading}</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}


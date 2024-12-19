import Image from "next/image"
import Link from "next/link"
import Legacy from '@/components/Legacy'
export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpeg"
            alt="Basketball court"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative flex h-full items-center justify-center text-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Elevate Your Game with
              <br />
              <span className="bg-gradient-to-r from-[#cc73f8] to-purple-300 bg-clip-text text-transparent">
                Advanced Technology
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Experience the perfect blend of innovation and tradition with our
              premium basketball collection
            </p>
            <Link
              href="/products"
              className="inline-block rounded-full bg-[#cc73f8] px-8 py-3 font-semibold text-white transition-transform hover:scale-105"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#cc73f8_0%,#000000_100%)] opacity-20" />
        <div className="relative container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-16">Advanced Ball Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Multi-Layer Construction",
                description: "Premium composite leather outer layer with reinforced butyl bladder for optimal air retention.",
              },
              {
                title: "Enhanced Grip Pattern",
                description: "Scientifically designed micro-texture surface for superior ball control in all conditions.",
              },
              {
                title: "Perfect Weight Distribution",
                description: "Precision-balanced core ensures consistent flight path and optimal shooting accuracy.",
              },
              {
                title: "Durability Guaranteed",
                description: "Engineered to maintain shape and performance through thousands of gameplay hours.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-transform hover:scale-105"
              >
                <div className="mb-4 rounded-full bg-[#cc73f8]/20 p-3 w-fit">
                  <svg
                    className="size-6 text-[#cc73f8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Legacy />
      {/* Legacy Section */}
      {/* <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0066ff_0%,#000000_100%)] opacity-20" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">A Legacy of Excellence</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300 mb-12">
            Since 1985, we've been crafting the perfect basketball for players at every level
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "30+", label: "Years of Innovation" },
              { number: "1M+", label: "Balls Produced" },
              { number: "50+", label: "Pro Teams" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-[#cc73f8]">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#cc73f8] to-purple-300 bg-clip-text text-transparent">
              Experience Elite Performance
            </span>
            ?
          </h2>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#cc73f8] px-8 py-3 font-semibold text-white transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}


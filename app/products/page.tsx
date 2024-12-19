import Image from "next/image"

export default function Products() {
return (
  <div className="container mx-auto px-4 pb-24">
    {/* Hero Section */}
    <div className="relative py-24 text-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#cc73f8_0%,#000000_100%)] opacity-20" />
      </div>
      <div className="relative">
        <h1 className="text-4xl font-bold mb-2">Professional Series</h1>
        <p className="text-gray-400">Precision engineered for every level of play</p>
      </div>
    </div>

    {/* Products Grid */}
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Pro Elite Game Ball */}
        <div className="group rounded-xl bg-[#0F0F13] overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src="/1.jpeg"
              alt="Pro Elite Game Ball"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Pro Elite Game Ball</h3>
            <p className="text-sm text-gray-400">
              Official match ball designed for professional gameplay with superior grip and consistency.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                FIBA Approved
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Size: 7 (29.5")
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Premium Composite Leather
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Advanced Moisture Control
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Competition Channel Design
              </li>
            </ul>
          </div>
        </div>

        {/* Street Master */}
        <div className="group rounded-xl bg-[#0F0F13] overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src="/2.jpeg"
              alt="Street Master"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Street Master</h3>
            <p className="text-sm text-gray-400">
              Engineered for outdoor performance with exceptional durability and weather resistance.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                All-Surface Compatible
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Size: 7 (29.5")
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Weather-Resistant Coating
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Deep Channel Design
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Enhanced Durability Core
              </li>
            </ul>
          </div>
        </div>

        {/* Training Elite */}
        <div className="group rounded-xl bg-[#0F0F13] overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src="/3.jpeg"
              alt="Training Elite"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Training Elite</h3>
            <p className="text-sm text-gray-400">
              Premium practice ball featuring perfect weight distribution and enhanced control.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Indoor Optimized
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Size: 7 (29.5")
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Precision Weight Balance
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                Soft-Touch Surface
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cc73f8] mr-2" />
                True Bounce Technology
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Legacy of Excellence Section */}
    <section className="relative py-24 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0066ff_0%,#000000_100%)] opacity-20" />
      <div className="relative container mx-auto px-4">
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
    </section>
  </div>
)
}


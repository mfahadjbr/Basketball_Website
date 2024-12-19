import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BasketballShowcase() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Legacy Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-purple-300">A Legacy of Excellence</h2>
            <p className="text-gray-300">
              Since our founding in 1985, EliteHoops has been at the forefront of basketball innovation. Our journey began in a small workshop where craftsmen meticulously hand-stitched each ball, establishing the foundation for what would become an industry-leading manufacturing process.
            </p>
            <p className="text-gray-300">
              Today, we blend traditional craftsmanship with cutting-edge technology, maintaining our commitment to quality while pushing the boundaries of performance. Every basketball we create is a testament to decades of expertise, research, and an unwavering passion for the game.
            </p>
          </div>
          <div className="md:w-1/2 h-[300px] md:h-[400px] w-full relative">
            <Image
              src="/player.jpg"
              alt="Indoor basketball court"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Professional Series Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-300">Professional Series</h2>
          <p className="text-gray-300 mt-2">Precision engineered for every level of play</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pro Elite Game Ball */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Pro Elite Game Ball</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 w-full">
                <Image
                  src="/1.jpeg"
                  alt="Pro Elite Game Ball"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-300">
                Official match ball designed for professional gameplay with superior grip and consistency.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Size: 7 (29.5")</li>
                <li>• Premium Composite Leather</li>
                <li>• Advanced Moisture Control</li>
                <li>• Competition Channel Design</li>
              </ul>
            </CardContent>
          </Card>

          {/* Street Master */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Street Master</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 w-full">
                <Image
                  src="/2.jpeg"
                  alt="Street Master Basketball"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-300">
                Engineered for outdoor performance with exceptional durability and weather resistance.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Size: 7 (29.5")</li>
                <li>• Weather-Resistant Coating</li>
                <li>• Deep Channel Design</li>
                <li>• Enhanced Durability Core</li>
              </ul>
            </CardContent>
          </Card>

          {/* Training Elite */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Training Elite</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 w-full">
                <Image
                  src="/3.jpeg"
                  alt="Training Elite Basketball"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-300">
                Premium practice ball featuring perfect weight distribution and enhanced control.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Size: 7 (29.5")</li>
                <li>• Precision Weight Balance</li>
                <li>• Soft Touch Surface</li>
                <li>• True Bounce Technology</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}


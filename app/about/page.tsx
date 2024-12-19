import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-8">About Hoops Technology</h1>
          <div className="space-y-6 text-gray-300">
            <p>
              Since 1985, Hoops has been at the forefront of basketball innovation,
              combining cutting-edge technology with traditional craftsmanship to
              create the perfect basketball.
            </p>
            <p>
              Our commitment to excellence has made us the chosen partner of
              professional teams and players worldwide, while our dedication to
              innovation continues to push the boundaries of what's possible in
              basketball manufacturing.
            </p>
            <p>
              Every Hoops basketball is a testament to our passion for the game
              and our relentless pursuit of perfection.
            </p>
          </div>
        </div>
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src="/4.jpg"
            alt="About Hoops"
            height={800}
            width={800}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}


import Link from "next/link"
import { Mail, MapPin, Phone } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#0B0B0F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="rounded-full bg-[#cc73f8] p-2">
                <svg
                  className="size-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M12 8v8m-4-4h8"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">HOOPS</span>
                <span className="text-xs text-[#cc73f8]">TECHNOLOGY</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">
              Crafting excellence in every basketball since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/products" className="hover:text-[#cc73f8]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-[#cc73f8]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#cc73f8]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#cc73f8]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-3">
                <Mail className="size-5 text-[#cc73f8]" />
                <span>info@hoops.tech</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="size-5 text-[#cc73f8]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="size-5 text-[#cc73f8]" />
                <span>123 Sport Street, CA 90210</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">
              Stay updated with our latest products and offers.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-[#1A1A1F] border-transparent focus:border-[#cc73f8]"
              />
              <Button className="bg-[#cc73f8] hover:bg-[#cc73f8]/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          © 2024 Hoops Technology. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


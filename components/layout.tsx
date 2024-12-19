"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from 'lucide-react'
import { Footer } from "./footer"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  const navigation = [
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <div className="fixed left-0 top-0 z-50 w-full">
        <nav className="mx-auto my-4 px-4 max-w-3xl">
          <div className="rounded-full border border-white/10 bg-black/30 backdrop-blur-md">
            <div className="flex items-center justify-between px-4 py-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="rounded-full bg-[#cc73f8] p-1.5">
                  <svg
                    className="size-4 text-white"
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
                  <span className="text-sm font-bold">HOOPS</span>
                  <span className="text-[10px] text-gray-400">TECHNOLOGY</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center space-x-4 md:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm transition-colors hover:text-[#cc73f8] ${
                      pathname === item.href ? "text-[#cc73f8]" : "text-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-transform hover:scale-105"
                >
                  Contact us
                </Link>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white">
                      <Menu className="size-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="bg-[#0B0B0F] text-white">
                    <SheetHeader>
                      <SheetTitle className="text-white">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="mt-8 flex flex-col space-y-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`text-lg transition-colors hover:text-[#cc73f8] ${
                            pathname === item.href ? "text-[#cc73f8]" : "text-gray-300"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Link
                        href="/contact"
                        className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-2 font-medium text-black transition-transform hover:scale-105"
                      >
                        Contact us
                      </Link>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}


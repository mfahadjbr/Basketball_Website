import { Suspense } from "react"
import { Layout } from "@/components/layout"
import { LoadingSpinner } from "@/components/loading"
import { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hoops - Advanced Basketball Technology",
  description: "Experience elite performance with our technologically advanced basketballs",
  keywords: ["basketball", "sports equipment", "professional basketball", "basketball technology"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<LoadingSpinner />}>
          <Layout>{children}</Layout>
        </Suspense>
      </body>
    </html>
  )
}


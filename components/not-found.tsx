import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B0B0F] text-white px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link 
        href="/"
        className="bg-[#cc73f8] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#cc73f8]/90 transition-colors"
      >
        Go back home
      </Link>
    </div>
  )
}


import { Wallet } from "lucide-react"
import { Link } from "react-router-dom"

export default function PakPayHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PakPay</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors font-medium cursor-pointer">
              <Link to={'/dashboard'}>
              Dashboard
             </Link>
            </button>
            <button className="px-4 py-2 text-gray-900 hover:bg-gray-100 rounded-md transition-colors font-medium cursor-pointer">
             <Link to={'/signin'}>
              Sign In
             </Link>
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors font-medium cursor-pointer">
              <Link to={'/signup'}>
              Sign Up
             </Link>
            </button>
          </div>
        </div>
      </nav>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 text-balance">
              Welcome to
              <span className="text-green-600"> PakPay</span>
            </h1>
            <p className="text-xl text-gray-600 text-pretty leading-relaxed">
              Your trusted digital payment solution. Fast, secure, and reliable payments at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 text-lg bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors font-medium">
                Get Started
              </button>
              <button className="px-6 py-3 text-lg border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent rounded-md transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <p className="text-gray-600 text-balance">
              PakPay - Your trusted digital payment solution for fast and secure transactions. © 2024 PakPay.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { Wallet } from "lucide-react"
import { Link } from "react-router-dom"

export function About(){
    return <>
    <div className="min-h-screen bg-white">

          <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link to={'/'}>
          <div className="flex items-center space-x-2">
            
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PakPay</span>
          </div>
            </Link>
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
 
    <section className="max-w-4xl mx-auto p-6">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
         Version 1 <span className="text-gray-500 text-xl">(Foundational Build)</span>
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        In this first version, <span className="font-semibold">PakPay</span> focuses on the core basics:
      </p>

      {/* Features List */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column (Features + Tech Stack) */}
        <div className="flex flex-col gap-6">
          {/* Features */}
          <ul className="list-disc pl-6 space-y-2 text-gray-700 bg-gray-50 p-5 rounded-2xl shadow-sm">
            <li><span className="font-medium">User Accounts & Authentication</span> – secure signup/login system.</li>
            <li><span className="font-medium">Send & Receive Money</span> – transfer funds between users in the system.</li>
            <li><span className="font-medium">Search Users</span> – find other users by ID or email to send payments.</li>
            <li><span className="font-medium">Simple Wallet</span> – track your balance and recent transactions.</li>
          </ul>

          {/* Tech Stack */}
          <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">🛠️ This version is built using:</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Frontend:</span> React.js (UI/UX, wallet dashboard)</li>
              <li><span className="font-medium">Backend:</span> Express.js (APIs for authentication, transactions, search)</li>
              <li><span className="font-medium">Database:</span> MongoDB (store users, balances, and transactions)</li>
            </ul>
          </div>
        </div>

        {/* Right Column (About Section) */}
        <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About PakPay</h2>
      <p className="text-gray-700 leading-relaxed text-lg bg-gray-50 p-6 rounded-2xl shadow-sm">
        <span className="font-semibold">PakPay</span> is a forward-thinking fintech initiative designed to 
        address the growing demand for seamless and secure online payments, particularly for freelancers, 
        entrepreneurs, and businesses in Pakistan. While countries such as 
        <span className="font-semibold"> India </span> benefit from platforms like 
        <span className="italic"> Paytm </span> and the 
        <span className="font-semibold"> United States </span> relies on 
        <span className="italic"> PayPal</span>, Pakistan still lacks a reliable, globally recognized payment 
        solution that ensures smooth, affordable, and accessible international transactions. 
        
      </p>
        </div>
      </div>
    </section>
  );


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
    </>
}
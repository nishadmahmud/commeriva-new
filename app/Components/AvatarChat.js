"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Calendar } from "lucide-react"

export default function FloatingCalendlyButton() {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    window.open("https://calendly.com/squadinnovators/30min", "_blank")
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-10 right-4 z-[10000] hidden md:block">
      <div className="relative group cursor-pointer">
        {/* Glow effect */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
        
        {/* Glassy Card */}
        <div className="relative flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl p-4 transition-all duration-300 w-64 group-hover:w-72 group-hover:shadow-cyan-500/20">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-900 bg-gray-200/80 backdrop-blur rounded-full p-1 transition-all hover:bg-gray-300"
          >
            <X size={14} />
          </button>

          {/* Profile Image with gradient ring */}
          <div onClick={handleClick} className="relative flex-shrink-0">
            <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
            <div className="relative">
              <Image
                src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757837523.jpg"
                alt="Profile"
                width={50}
                height={50}
                unoptimized
                className="rounded-full border-2 border-white"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-cyan-500 border-2 border-white rounded-full animate-pulse"></span>
            </div>
          </div>

          {/* Text */}
          <div onClick={handleClick} className="flex-1">
            <p className="text-sm font-semibold poppins text-gray-900">
              Get Free Consultancy
            </p>
            
            {/* Expandable Bottom Part */}
            <div className="max-h-0 overflow-hidden group-hover:max-h-16 transition-all duration-500 ease-in-out">
              <button
                onClick={handleClick}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-600 hover:text-cyan-700 transition poppins group/btn"
              >
                <Calendar size={12} />
                Book a Slot
                <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
              </button>
              <div className="mt-1 flex items-center gap-1">
                <Image
                  src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757837630.png"
                  alt="Calendly"
                  width={60}
                  height={16}
                  unoptimized
                  className="opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, RefreshCw } from "lucide-react";

export default function NotFound() {
  const [mouseGlow, setMouseGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouseGlow({ x, y });
  };

  return (
    <div
      className="min-h-screen bg-white dark:bg-neutral-950 relative overflow-hidden flex items-center justify-center px-6 py-10"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />

      {/* Subtle mouse-follow neon glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(650px at ${mouseGlow.x}% ${mouseGlow.y}%, rgba(59,130,246,0.10), rgba(147,51,234,0.06) 40%, transparent 70%)`,
        }}
      />

      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-teal-500/20 dark:bg-teal-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* 404 Number with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <h1 className="text-[180px] md:text-[240px] font-bold leading-none bg-gradient-to-br from-gray-200 via-gray-400 to-gray-200 dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent heroTitle">
            404
          </h1>
          {/* Glowing number shadow */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-30 dark:opacity-50">
            <h1 className="text-[180px] md:text-[240px] font-bold leading-none bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-transparent heroTitle">
              404
            </h1>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 heroTitle">
            Page Not Found
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto poppins">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-cyan-500 dark:to-blue-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/40 overflow-hidden flex items-center gap-2 poppins"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Home size={20} />
              Go Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 dark:group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group px-8 py-4 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/20 text-gray-900 dark:text-gray-100 rounded-full font-medium transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white/10 dark:hover:border-cyan-500/30 flex items-center gap-2 poppins"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-white/10"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 poppins">
            You might be interested in:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/about-us"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors poppins"
            >
              About Us
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <Link
              href="/contact-us"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors poppins"
            >
              Contact
            </Link>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <Link
              href="/why-nextjs"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-cyan-400 transition-colors poppins"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-500/30 dark:bg-cyan-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}


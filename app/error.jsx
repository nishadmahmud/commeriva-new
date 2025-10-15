"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({ error, reset }) {
  const [mouseGlow, setMouseGlow] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-50/30 via-transparent to-orange-50/30 dark:from-red-950/20 dark:via-transparent dark:to-orange-950/20" />

      {/* Subtle mouse-follow neon glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(650px at ${mouseGlow.x}% ${mouseGlow.y}%, rgba(239,68,68,0.10), rgba(251,146,60,0.06) 40%, transparent 70%)`,
        }}
      />

      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 dark:bg-red-500/30 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/20 dark:bg-orange-500/30 rounded-full blur-3xl"
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
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Error icon with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8 inline-block"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl flex items-center justify-center"
            >
              <AlertTriangle size={64} className="text-white" strokeWidth={2} />
            </motion.div>
            {/* Pulsing ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 border-4 border-red-500 dark:border-red-400 rounded-3xl"
            />
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
            Something Went Wrong
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto poppins">
            We encountered an unexpected error. Don't worry, our team has been notified and we're working on it.
          </p>
          {process.env.NODE_ENV === "development" && error?.message && (
            <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-xl max-w-2xl mx-auto">
              <p className="text-sm text-red-700 dark:text-red-400 font-mono text-left break-words">
                {error.message}
              </p>
            </div>
          )}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => reset()}
            className="group relative px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-red-500 dark:to-orange-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 dark:hover:shadow-red-500/40 overflow-hidden flex items-center gap-2 poppins"
          >
            <span className="relative z-10 flex items-center gap-2">
              <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
              Try Again
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 opacity-0 dark:group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a
            href="/"
            className="group px-8 py-4 bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/20 text-gray-900 dark:text-gray-100 rounded-full font-medium transition-all duration-300 hover:bg-gray-50 dark:hover:bg-white/10 dark:hover:border-red-500/30 flex items-center gap-2 poppins"
          >
            <Home size={20} />
            Go Home
          </a>
        </motion.div>

        {/* Help text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-white/10"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 poppins">
            If this problem persists, please{" "}
            <a
              href="/contact-us"
              className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 underline underline-offset-4 transition-colors"
            >
              contact our support team
            </a>
          </p>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-500/30 dark:bg-red-400/40 rounded-full"
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


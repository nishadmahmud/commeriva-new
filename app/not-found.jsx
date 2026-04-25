"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
      <div className="max-w-lg mx-auto text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-[160px] md:text-[200px] font-bold leading-none text-gray-100 heroTitle select-none">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-3 mb-10 -mt-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 heroTitle">
            Page Not Found
          </h2>
          <p className="text-gray-500 poppins">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might
            have been moved or deleted.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-semibold transition-colors flex items-center gap-2 poppins shadow-sm"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-semibold transition-colors hover:bg-gray-50 flex items-center gap-2 poppins cursor-pointer"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Go Back
          </button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-400 mb-4 poppins">
            You might be interested in:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "About Us", href: "/about-us" },
              { label: "Contact", href: "/contact-us" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Blog", href: "/blogs" },
            ].map((link, i) => (
              <span key={i} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-blue-700 transition-colors poppins"
                >
                  {link.label}
                </Link>
                {i < 3 && <span className="text-gray-300">•</span>}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

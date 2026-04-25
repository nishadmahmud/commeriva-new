"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
      <div className="max-w-lg mx-auto text-center">
        {/* Error icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-block"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-28 h-28 mx-auto bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg"
          >
            <AlertTriangle size={56} className="text-white" strokeWidth={2} />
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3 mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 heroTitle">
            Something Went Wrong
          </h2>
          <p className="text-gray-500 poppins">
            We encountered an unexpected error. Don&apos;t worry, our team has
            been notified and we&apos;re working on it.
          </p>
          {process.env.NODE_ENV === "development" && error?.message && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-700 font-mono text-left break-words">
                {error.message}
              </p>
            </div>
          )}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() => reset()}
            className="group px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-colors flex items-center gap-2 poppins shadow-sm cursor-pointer"
          >
            <RefreshCw
              size={18}
              className="group-hover:rotate-180 transition-transform duration-500"
            />
            Try Again
          </button>

          <a
            href="/"
            className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-semibold transition-colors hover:bg-gray-50 flex items-center gap-2 poppins"
          >
            <Home size={18} />
            Go Home
          </a>
        </motion.div>

        {/* Help text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-400 poppins">
            If this problem persists, please{" "}
            <a
              href="/contact-us"
              className="text-blue-700 hover:text-blue-800 underline underline-offset-4 transition-colors"
            >
              contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

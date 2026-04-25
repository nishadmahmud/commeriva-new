"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Clock, ArrowRight } from "lucide-react";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg text-center"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-orange-50 mb-6">
          <Briefcase size={36} className="text-orange-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 heroTitle mb-3">
          Careers at Commeriva
        </h1>
        <p className="text-gray-500 poppins mb-2">
          We&apos;re building something exciting and looking for talented people
          to join our mission.
        </p>
        <div className="inline-flex items-center gap-2 text-sm text-orange-600 font-semibold poppins bg-orange-50 px-4 py-2 rounded-full mb-8">
          <Clock size={14} />
          Coming Soon
        </div>
        <div>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
          >
            Send Us Your Resume
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white heroTitle leading-tight">
            Ready to Build Your
            <br />
            Next Digital Product?
          </h2>
          <p className="mt-5 text-lg text-gray-300 max-w-xl mx-auto poppins leading-relaxed">
            Get a free consultation and discover how Commeriva can transform
            your business with a website or app that delivers results.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform"
            >
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 py-3.5 rounded-full text-sm poppins cursor-pointer transition-colors shadow-lg hover:shadow-xl flex items-center gap-2">
                Get Started
                <ArrowRight size={16} />
              </button>
            </Link>

            <Link href="https://wa.me/+8801886182084" target="_blank">
              <button className="border border-white/20 text-white hover:bg-white/10 font-medium px-7 py-3.5 rounded-full text-sm poppins cursor-pointer transition-all backdrop-blur flex items-center gap-2">
                WhatsApp Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

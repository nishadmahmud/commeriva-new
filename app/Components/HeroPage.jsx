"use client";
import React, { useState } from "react";
import { Calendar, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroPage = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 40 });
  // right-panel visual composition uses static imagery, no animation or interaction

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="relative w-full overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Background glows (dark-first) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 size-[36rem] rounded-full bg-white/5 blur-3xl dark:bg-white/10" />
        <div className="absolute top-1/3 -right-32 size-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-48 left-1/3 size-[30rem] rounded-full bg-indigo-400/10 blur-3xl" />
      </div>

      {/* Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 text-xs md:text-sm shadow-sm backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white" />
              Commeriva Studio — Premium builds
            </div>

            <h1 className="mt-4 lg:mt-6 text-4xl lg:text-7xl font-semibold leading-[1.05] text-gray-900 dark:text-gray-100 heroTitle">
              Build. Ship. Scale.
              <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-200 dark:via-white dark:to-cyan-100">
                Websites that convert and endure
              </span>
            </h1>

            <p className="mt-5 lg:text-lg max-w-2xl text-gray-600 dark:text-gray-300 poppins">
              Conversion‑focused websites for e‑commerce, corporate, and portfolio brands.
              Fast by default, SEO‑ready, and engineered to scale with your roadmap.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 lg:gap-4">
              <Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform?usp=sharing&ouid=101793279606112585174'>
                <button className="bg-gray-900/90 dark:bg-white/10 hover:bg-black dark:hover:bg-white/15 text-white font-semibold px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full shadow-lg transition cursor-pointer poppins inline-flex items-center gap-2 ring-1 ring-black/10 dark:ring-white/10 border border-white/10 backdrop-blur">
                  <Calendar size={18} /> Start a project
                </button>
              </Link>

              <Link href='/pricing'>
                <button className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white font-medium transition cursor-pointer border border-gray-300 dark:border-white/10 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm poppins shadow-sm hover:shadow-md">
                  <MessageCircle size={20} className="bg-gray-200 dark:bg-white/20 rounded-full p-1.5 text-gray-700 dark:text-white" />
                  View pricing
                </button>
              </Link>

              <Link href='https://wa.me/+8801886182084' target="_blank" className="hidden md:block">
                <button className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white font-medium transition cursor-pointer border border-gray-300 dark:border-white/10 px-6 py-3 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm poppins shadow-sm hover:shadow-md">
                  <FaWhatsapp size={22} className="bg-gray-200 dark:bg-white/20 rounded-full p-1.5 text-gray-700 dark:text-white" />
                  WhatsApp
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Neon ring card */}
              <div className="relative p-[2px] rounded-2xl bg-gray-200 dark:bg-[conic-gradient(from_180deg_at_50%_50%,_rgba(255,255,255,0.35),_rgba(168,85,247,0.35),_rgba(34,211,238,0.35),_rgba(255,255,255,0.35))]">
                <div className="relative rounded-2xl bg-white/70 dark:bg-neutral-950/80 backdrop-blur-xl border border-white/10 overflow-hidden">
                  <div className="relative aspect-[4/3] lg:aspect-[5/4]">
                    <img 
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80" 
                      alt="SaaS dashboard interface" 
                      className="w-full h-full object-cover" 
                      draggable={false} 
                    />
                  </div>

                  {/* Floating lights */}
                  <span className="pointer-events-none absolute -top-6 -left-6 size-28 rounded-full bg-cyan-400/20 blur-2xl" />
                  <span className="pointer-events-none absolute -bottom-6 -right-10 size-32 rounded-full bg-indigo-400/20 blur-2xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;

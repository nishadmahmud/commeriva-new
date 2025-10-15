"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { ArrowRight, Layers } from "lucide-react";

export default function PartnersIntegrations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logos = [
    { id: 1, name: "HTML", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407323.png" },
    { id: 2, name: "MongoDB", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407771.png" },
    { id: 3, name: "React", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407992.png" },
    { id: 4, name: "Firebase", image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
    { id: 5, name: "Node.js", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407662.png" },
    { id: 6, name: "PostgreSQL", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407725.png" },
    { id: 7, name: "Tailwind", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { id: 8, name: "PHP", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407889.png" },
    { id: 9, name: "Cloud", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407428.png" },
    { id: 10, name: "Laravel", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407346.png" },
    { id: 11, name: "TypeScript", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407917.png" },
    { id: 12, name: "WordPress", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407640.png" },
    { id: 13, name: "Canva", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407567.png" },
    { id: 14, name: "Figma", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407791.png" },
    { id: 15, name: "Next.js", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407699.png" },
    { id: 16, name: "Python", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407597.png" },
    { id: 17, name: "AWS", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407935.png" },
    { id: 18, name: "Flutter", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" },
  ];

  const stats = [
    { number: 100, suffix: "+", label: "Partners" },
    { number: 150, suffix: "+", label: "Integrations" },
    { number: 120, suffix: "+", label: "Projects" },
  ];

  return (
    <section className="relative py-12 md:py-20 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 size-[40rem] rounded-full bg-gradient-to-br from-blue-400/20 via-cyan-400/10 to-teal-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 size-[45rem] rounded-full bg-gradient-to-tl from-teal-400/20 via-emerald-400/10 to-blue-400/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 text-xs md:text-sm shadow-sm backdrop-blur mb-4">
            <Layers size={14} className="text-cyan-500" />
            Stack & Integrations
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-gray-100 heroTitle mb-4">
            Built to work with your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 dark:from-cyan-300 dark:via-teal-300 dark:to-emerald-300">
              ecosystem
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto poppins">
            We integrate seamlessly with the technologies that power your business—from cloud infrastructure to design tools and everything in between.
          </p>
        </motion.div>

        {/* Logo Grid (Desktop & Tablet) */}
        <div className="hidden md:block mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-6 lg:grid-cols-9 gap-8 items-center justify-items-center"
          >
            {logos.map((logo, i) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group relative w-16 h-16 lg:w-20 lg:h-20"
              >
                {/* Glow on hover - dark mode only */}
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-cyan-500/30 to-teal-500/30 opacity-0 dark:group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                
                {/* Logo container */}
                <div className="relative w-full h-full flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur hover:border-gray-300 dark:hover:border-white/20 transition-all">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter [filter:grayscale(50%)] group-hover:[filter:grayscale(0%)] transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Logo Marquee (Mobile) */}
        {mounted && (
          <div className="md:hidden mb-12">
            <Marquee gradientWidth={30} speed={40} gradient={true} gradientColor={[24, 24, 27]}>
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 mx-3 w-14 h-14 flex items-center justify-center p-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter [filter:grayscale(50%)]"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-8 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 heroTitle">
                {mounted && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium poppins">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/integration"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900/90 dark:bg-white/10 hover:bg-black dark:hover:bg-white/15 text-white rounded-full shadow-lg transition cursor-pointer poppins text-sm font-semibold border border-white/10 backdrop-blur"
          >
            View our ecosystem
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/integration"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-white/10 text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white rounded-full bg-white/80 dark:bg-white/10 backdrop-blur transition poppins text-sm font-medium"
          >
            Find integrations
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

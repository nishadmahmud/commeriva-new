"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";

export default function OurStacks() {
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
    { number: 100, suffix: "+", label: "Clients Served" },
    { number: 150, suffix: "+", label: "Integrations" },
    { number: 120, suffix: "+", label: "Projects Delivered" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold poppins mb-4">
            Our Tech Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 heroTitle">
            Technologies We Work With
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto poppins">
            We use the best tools and frameworks to build fast, scalable, and
            secure digital products.
          </p>
        </motion.div>

        {/* Logo Grid (Desktop & Tablet) */}
        <div className="hidden md:block mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-6 lg:grid-cols-9 gap-6 items-center justify-items-center"
          >
            {logos.map((logo, i) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center p-3 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-gray-300 transition-all group"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Logo Marquee (Mobile) */}
        {mounted && (
          <div className="md:hidden mb-10">
            <Marquee gradientWidth={30} speed={40} gradient={true} gradientColor={"#f8fafc"}>
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex-shrink-0 mx-3 w-14 h-14 flex items-center justify-center p-2 rounded-lg border border-gray-200 bg-white"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain opacity-60"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-8 mb-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-1 heroTitle">
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
              <div className="text-sm text-gray-500 font-medium poppins">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-3"
        >
          <Link
            href="/integration"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
          >
            View our ecosystem
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

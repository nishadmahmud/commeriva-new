"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, Target, Zap } from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function AboutUs() {
  const [mouseGlow, setMouseGlow] = React.useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouseGlow({ x, y });
  };

  return (
    <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-gray-200 min-h-screen relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
      
      {/* Subtle mouse-follow neon glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(650px at ${mouseGlow.x}% ${mouseGlow.y}%, rgba(59,130,246,0.10), rgba(147,51,234,0.06) 40%, transparent 70%)`,
        }}
      />
      
      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6 md:px-20 text-center border-b border-gray-200 dark:border-white/10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="text-4xl heroTitle md:text-5xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            About <span className="text-gray-700 dark:text-gray-300">Commeriva</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl poppins mx-auto text-gray-600 dark:text-gray-300">
            We craft modern, high-performing websites that help businesses grow,
            connect, and succeed in the digital world.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-16 px-6 md:px-20 text-center">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
            <Target size={16} className="mr-2" />
            Our Mission
          </div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 title">Empowering Digital Success</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 dark:text-gray-300 poppins">
            At Commeriva, our mission is simple: to empower businesses and
            individuals with functional, user-friendly, and elegant websites.
            Whether it's eCommerce, corporate branding, or creative portfolios, we
            deliver digital experiences that leave a lasting impression.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 px-6 md:px-20 border-t border-gray-200 dark:border-white/10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm mb-6">
            <Zap size={16} className="mr-2" />
            Our Expertise
          </div>
          <h2 className="text-3xl title font-bold text-gray-900 dark:text-gray-100">
            What We Do
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 poppins"
        >
          {[
            {
              title: "E-Commerce Websites",
              desc: "Engaging online stores with smooth checkout, secure payments, and clean UI.",
              icon: Users,
              color: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
              iconColor: "text-blue-600 dark:text-blue-400",
            },
            {
              title: "Portfolio & Branding",
              desc: "Showcase your creativity and brand identity with minimal, modern portfolio websites.",
              icon: Target,
              color: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
              iconColor: "text-purple-600 dark:text-purple-400",
            },
            {
              title: "Corporate Websites",
              desc: "Professional and scalable websites that reflect your business credibility.",
              icon: Zap,
              color: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
              iconColor: "text-green-600 dark:text-green-400",
            },
          ].map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                custom={i}
                whileHover="hover"
                className={`bg-gradient-to-br ${service.color} border border-gray-200 dark:border-white/10 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm mb-6`}>
                  <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 md:px-20 text-center border-t border-gray-200 dark:border-white/10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl heroTitle font-bold mb-6 text-gray-900 dark:text-gray-100">
            Let's Build Something Great Together
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 poppins">
            Partner with Commeriva and take your brand to the next level with a
            website designed for impact.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              target="_blank" 
              href="https://wa.me/+8801677182084"
              className="inline-flex items-center gap-2 border border-gray-800 dark:border-white text-gray-100 dark:text-gray-900 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 font-medium px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

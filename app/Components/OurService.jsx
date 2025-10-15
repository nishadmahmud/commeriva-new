"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Corporate & Business Websites",
    description: `Professional websites that strengthen your brand identity and build trust with clients.`,
    points: [
      "Modern, responsive design",
      "Optimized for SEO & speed",
      "Secure and scalable architecture",
    ],
    buttonText: "Book Now",
    buttonLink: "https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform",
    image: "https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804_1280.jpg",
    featured: true,
  },
  {
    title: "E-Commerce Solutions",
    description: `Custom online stores designed to sell smarter and grow faster.`,
    points: [
      "Product catalog & inventory management",
      "Secure payment gateway integration",
      "Smooth checkout experience",
    ],
    buttonText: "Plan a build",
    buttonLink: "https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform",
    image: "/e-commerce.jpg",
    featured: true,
  },
  {
    title: "Portfolio & Personal Branding Sites",
    description: `Showcase your talent, achievements, and personal brand with style.`,
    points: [
      "Sleek, creative layouts",
      "Easy content updates",
      "Optimized for recruiters and clients",
    ],
    buttonText: "Talk resourcing",
    buttonLink: "https://wa.me/+8801677182084",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Landing Pages & Marketing Sites",
    description: `High-conversion landing pages for campaigns, ads, and product launches.`,
    points: [
      "Conversion-focused design",
      "Integrated analytics & tracking",
      "Fast-loading, mobile-ready",
    ],
    buttonText: "Book a call",
    buttonLink: "https://wa.me/+8801677182084",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Blog & Content Platforms",
    description: `Powerful publishing platforms to grow your audience and authority.`,
    points: [
      "SEO-friendly structure",
      "Easy content management",
      "Customizable categories & layouts",
    ],
    buttonText: "Talk to us",
    buttonLink: "https://wa.me/+8801677182084",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757392697.jpg",
  },
  {
    title: "Custom Web Applications",
    description: `Advanced web solutions built to solve unique business challenges.`,
    points: [
      "Tailored features & integrations",
      "Secure backend with APIs",
      "Scalable for enterprise growth",
    ],
    buttonText: "Talk to us",
    buttonLink: "https://wa.me/+8801677182084",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80",
  },
];

export default function OurServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="relative py-12 md:py-20 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Animated background mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 size-[40rem] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-teal-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-40 size-[45rem] rounded-full bg-gradient-to-tl from-teal-400/20 via-cyan-400/10 to-blue-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/2 size-[35rem] rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 text-xs md:text-sm shadow-sm backdrop-blur mb-4">
            <Sparkles size={14} className="text-cyan-500" />
            Our Offerings
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-gray-100 heroTitle">
            What we build for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-300 dark:via-blue-300 dark:to-teal-300">
              ambitious teams
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto poppins">
            End‑to‑end digital products that combine stunning design with performance, security, and scale.
          </p>
        </motion.div>

        {/* Featured + Grid Layout */}
        <div className="space-y-6">
          {/* Featured Row: 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.filter(s => s.featured).map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Animated glow border - dark mode only */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-teal-500/50 opacity-0 dark:group-hover:opacity-100 blur transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl">
                  {/* Image with overlay */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      unoptimized
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white text-xs poppins">
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-3 heroTitle group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 poppins leading-relaxed">
                      {service.description}
                    </p>

                    {/* Points */}
                    <ul className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400 poppins">
                      {service.points.map((p, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + idx * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5" />
                          <span>{p}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={service.buttonLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900/90 dark:bg-white/10 hover:bg-black dark:hover:bg-white/15 text-white rounded-full shadow-lg transition cursor-pointer poppins text-sm font-semibold border border-white/10 backdrop-blur group/btn"
                    >
                      {service.buttonText}
                      <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Remaining Cards: 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.filter(s => !s.featured).map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Glow on hover - dark mode only */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-cyan-500/40 to-blue-500/40 opacity-0 dark:group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                
                {/* Card */}
                <div className="relative h-full rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg hover:border-gray-300 dark:hover:border-white/20 transition-all">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      unoptimized
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 heroTitle">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 poppins line-clamp-2">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={service.buttonLink}
                      className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-300 transition poppins group/link"
                    >
                      {service.buttonText}
                      <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

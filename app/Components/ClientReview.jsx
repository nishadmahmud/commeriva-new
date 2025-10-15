"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    company: "Satsuna",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757702171.jpg",
    review: "Our new corporate website gives a strong impression to clients. It feels modern, professional, and perfectly represents our brand.",
    author: "Atsushi Shimoikura",
    role: "Managing Director / CEO",
    avatar: "https://i.pravatar.cc/100?img=1",
    featured: true,
  },
  {
    review: "Since launching my e-commerce site, I've seen a big boost in sales. The product pages look professional and are very easy to manage.",
    author: "MD. Mizanur Rahman",
    role: "Owner, Mobile Club",
    avatar: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757701872.jpg",
  },
  {
    review: "Updating my projects and achievements is super easy. I don't need technical skills to keep my portfolio up to date.",
    author: "Mehedi Emu",
    role: "CEO",
    avatar: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757701980.png",
  },
  {
    company: "MKS Outfit",
    review: "Since launching our fashion e-commerce store, we've seen a huge jump in sales. Customers really like the clean design.",
    author: "Motiur Rahman",
    role: "Founder",
    avatar: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757701779.jpg",
    featured: true,
    dark: true,
  },
  {
    review: "I really like the way the site is structured. Visitors can find information quickly, and it helps us look more credible in the market.",
    author: "M.A Matin",
    role: "Managing Director",
    avatar: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757702087.png",
  },
  {
    review: "The online store runs smoothly, and the checkout process is super easy. My customers love the clean design and fast loading speed.",
    author: "SAMI",
    role: "Owner & CEO",
    avatar: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757702013.jpg",
  },
];

export default function ClientReview() {
  return (
    <section className="relative py-12 md:py-20 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 size-[40rem] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-teal-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 size-[45rem] rounded-full bg-gradient-to-tl from-teal-400/20 via-cyan-400/10 to-blue-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
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
            <Star size={14} className="text-cyan-500 fill-cyan-500" />
            Testimonials
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-gray-100 heroTitle mb-4">
            Loved by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-300 dark:via-blue-300 dark:to-teal-300">
              clients worldwide
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto poppins">
            Real feedback from businesses who transformed their digital presence with Commeriva.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
          {testimonials.map((testimonial, i) => {
            const isFeatured = testimonial.featured;
            const isDark = testimonial.dark;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative ${isFeatured ? 'md:row-span-2' : ''}`}
              >
                {/* Glow on hover - dark mode only */}
                <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${isDark ? 'from-cyan-500/40 to-blue-500/40' : 'from-cyan-500/40 to-teal-500/40'} opacity-0 dark:group-hover:opacity-100 blur transition-opacity duration-300`} />
                
                {/* Card */}
                <div className={`relative h-full rounded-2xl border p-6 backdrop-blur transition-all flex flex-col justify-between ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 border-gray-700 dark:border-gray-700 text-white' 
                    : 'bg-white/60 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                }`}>
                  {/* Logo (if exists) */}
                  {testimonial.logo && (
                    <Image
                      width={80}
                      height={30}
                      src={testimonial.logo}
                      alt={testimonial.company || "Company"}
                      className="h-8 w-auto mb-4 object-contain"
                    />
                  )}

                  {/* Company name (if no logo) */}
                  {!testimonial.logo && testimonial.company && (
                    <h3 className="text-lg font-bold mb-4">{testimonial.company}</h3>
                  )}

                  {/* Quote icon */}
                  <Quote className={`mb-3 ${isDark ? 'text-cyan-400' : 'text-cyan-600 dark:text-cyan-400'}`} size={24} />

                  {/* Review */}
                  <p className={`mb-6 leading-relaxed poppins text-sm ${isDark ? 'text-gray-100' : 'text-gray-600 dark:text-gray-300'}`}>
                    {testimonial.review}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={testimonial.avatar}
                      className="w-10 h-10 rounded-full ring-2 ring-white/20"
                      alt={testimonial.author}
                    />
                    <div>
                      <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}>
                        {testimonial.author}
                      </p>
                      <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

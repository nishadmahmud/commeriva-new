"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher, userId } from "../page";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogSection() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/latest-ecommerce-blog-list/${userId}`,
    fetcher
  );

  if (isLoading) return (
    <section className="relative py-20 md:py-32 bg-white dark:bg-neutral-950">
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 poppins">Loading insights...</p>
      </div>
    </section>
  );
  
  if (error)
    return (
      <section className="relative py-20 md:py-32 bg-white dark:bg-neutral-950">
        <p className="text-center py-20 text-red-500 dark:text-red-400 poppins">Failed to load insights.</p>
      </section>
    );

  const blogs = data?.data?.slice(0, 6) || [];

  return (
    <section id="blog" className="relative py-12 md:py-20 bg-white dark:bg-neutral-950 overflow-hidden">
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
            <BookOpen size={14} className="text-cyan-500" />
            Latest Insights
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-gray-100 heroTitle mb-4">
            Building your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-300 dark:via-blue-300 dark:to-teal-300">
              perfect store
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto poppins">
            Expert tips, success stories, and the latest trends in custom e-commerce solutions.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow on hover - dark mode only */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/40 to-blue-500/40 opacity-0 dark:group-hover:opacity-100 blur transition-opacity duration-300" />
              
              {/* Card */}
              <div className="relative h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur hover:border-gray-300 dark:hover:border-white/20 transition-all">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    unoptimized
                    width={500}
                    height={300}
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <Link href={`/blogs/${blog.id}`}>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors poppins line-clamp-2 mb-3">
                      {blog.title}
                    </h3>
                  </Link>
                  
                  <Link 
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition poppins group/link"
                  >
                    Read more
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/blogs">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900/90 dark:bg-white/10 hover:bg-black dark:hover:bg-white/15 text-white rounded-full shadow-lg transition cursor-pointer poppins font-semibold border border-white/10 backdrop-blur"
            >
              View all insights
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

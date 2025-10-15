"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher, userId } from "../page";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

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

export default function BlogsPage() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/latest-ecommerce-blog-list/${userId}`,
    fetcher
  );

  if (isLoading) return (
    <div className="bg-white dark:bg-neutral-950 pb-20 pt-8 px-6">
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading insights...</p>
      </div>
    </div>
  );
  
  if (error)
    return (
      <div className="bg-white dark:bg-neutral-950 pb-20 pt-8 px-6">
        <p className="text-center py-20 text-red-500 dark:text-red-400">Failed to load insights.</p>
      </div>
    );

  const blogs = data?.data || [];

  return (
    <section className="bg-white dark:bg-neutral-950 pb-20 pt-8 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
      
      <div className="relative z-10 mx-auto max-w-4xl pb-8 text-center">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="md:text-5xl text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 title">
            Commeriva Insights
          </h1>
          <p className="text-gray-600 dark:text-gray-300 inline md:text-lg text-sm mt-2 w-lg mx-auto text-center">
            Expert guides, success stories, and the latest trends in custom
            e-commerce solutions.
          </p>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            variants={cardVariants}
            custom={index}
            whileHover="hover"
            className="group bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <Image
                unoptimized
                width={500}
                height={500}
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Read time badge */}
              <div className="absolute top-3 right-3">
                <span className="bg-white/90 dark:bg-neutral-800/90 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  5 min read
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <Link href={`/blogs/${blog.id}`}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 line-clamp-2 mb-3">
                  {blog.title}
                </h3>
              </Link>
              
              <div
                className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Dec 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>5 min</span>
                  </div>
                </div>
                
                <Link
                  href={`/blogs/${blog.id}`}
                  className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group/link"
                >
                  Read More
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

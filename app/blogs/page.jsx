"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BLOG_API = "https://outletexpense.xyz/api/latest-ecommerce-blog-list/217";
const fetcher = (url) => fetch(url).then((res) => res.json());

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function estimateReadTime(html) {
  const text = html?.replace(/<[^>]+>/g, "") || "";
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 200));
}

export default function BlogsPage() {
  const { data, error, isLoading } = useSWR(BLOG_API, fetcher);

  if (isLoading)
    return (
      <div className="bg-white pb-20 pt-8 px-6">
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-500 poppins">Loading insights...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="bg-white pb-20 pt-8 px-6">
        <p className="text-center py-20 text-red-500 poppins">
          Failed to load insights.
        </p>
      </div>
    );

  const blogs = data?.data || [];

  return (
    <section className="bg-gray-50 pb-20 pt-8 px-6 relative overflow-hidden min-h-screen">
      <div className="relative z-10 mx-auto max-w-4xl pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold poppins mb-4">
            Our Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 heroTitle">
            Commeriva Insights
          </h1>
          <p className="text-gray-500 md:text-lg text-sm mt-3 max-w-xl mx-auto poppins">
            Expert guides, success stories, and the latest trends in custom
            e-commerce solutions.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-6"
      >
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            variants={cardVariants}
            custom={index}
            className="group"
          >
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="relative overflow-hidden">
                <Image
                  unoptimized
                  width={500}
                  height={300}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Read time badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm">
                    {estimateReadTime(blog.description)} min read
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <Link href={`/blogs/${blog.id}`}>
                  <h3 className="text-base font-bold text-gray-900 hover:text-blue-700 transition-colors poppins line-clamp-2 mb-3">
                    {blog.title}
                  </h3>
                </Link>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-gray-400 poppins">
                    <div className="flex items-center gap-1">
                      <Calendar size={13} />
                      <span>{formatDate(blog.created_at)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={13} />
                      <span>{estimateReadTime(blog.description)} min</span>
                    </div>
                  </div>

                  <Link
                    href={`/blogs/${blog.id}`}
                    className="flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors group/link"
                  >
                    Read
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-0.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

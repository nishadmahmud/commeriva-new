"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BLOG_API = "https://outletexpense.xyz/api/latest-ecommerce-blog-list/217";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogSection() {
  const { data, error, isLoading } = useSWR(BLOG_API, fetcher);

  if (isLoading)
    return (
      <section className="py-20 bg-white">
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-7 w-7 border-b-2 border-blue-600"></div>
          <p className="mt-3 text-gray-400 text-sm poppins">
            Loading insights...
          </p>
        </div>
      </section>
    );

  if (error)
    return (
      <section className="py-20 bg-white">
        <p className="text-center py-16 text-red-500 poppins">
          Failed to load insights.
        </p>
      </section>
    );

  const blogs = data?.data?.slice(0, 6) || [];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold poppins mb-4">
            Latest Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 heroTitle">
            From Our Blog
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto poppins">
            Expert tips, success stories, and the latest trends in custom
            e-commerce and web development.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    unoptimized
                    width={500}
                    height={300}
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <Link href={`/blogs/${blog.id}`}>
                    <h3 className="text-base font-bold text-gray-900 hover:text-blue-700 transition-colors poppins line-clamp-2 mb-3">
                      {blog.title}
                    </h3>
                  </Link>

                  <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 transition poppins mt-auto group/link"
                  >
                    Read more
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-0.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link href="/blogs">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm cursor-pointer group">
              View all insights
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

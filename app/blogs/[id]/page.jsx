"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

const BLOG_API = "https://outletexpense.xyz/api/latest-ecommerce-blog-list/217";
const fetcher = (url) => fetch(url).then((res) => res.json());

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function estimateReadTime(html) {
  const text = html?.replace(/<[^>]+>/g, "") || "";
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.ceil(words / 200));
}

export default function BlogDetails() {
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(BLOG_API, fetcher);

  if (isLoading)
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-500 poppins">Loading blog...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-red-500 poppins">Failed to load blog.</p>
      </div>
    );

  const blog = data?.data?.find((b) => String(b.id) === id);

  if (!blog)
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-600 text-lg poppins">Blog not found.</p>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold poppins"
        >
          <ArrowLeft size={16} />
          Back to all blogs
        </Link>
      </div>
    );

  const readTime = estimateReadTime(blog.description);

  return (
    <article className="bg-white min-h-screen pb-20">
      {/* Back navigation */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-700 transition-colors poppins group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          Back to all blogs
        </Link>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6 mt-6"
      >
        <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden bg-gray-100">
          <Image
            unoptimized
            fill
            sizes="100vw"
            src={blog.image}
            alt={blog.title}
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Title & Meta */}
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-2xl md:text-4xl lg:text-[2.6rem] font-bold text-gray-900 heroTitle leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-gray-400 poppins">
            <div className="flex items-center gap-1.5">
              <Calendar size={15} />
              <span>{formatDate(blog.created_at)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={15} />
              <span>{readTime} min read</span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied!");
              }}
              className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <Share2 size={15} />
              <span>Share</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6 mt-6">
        <div className="h-px bg-gray-200" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto px-6 mt-8"
      >
        <div
          className="prose prose-lg prose-gray max-w-none
            prose-headings:font-bold prose-headings:text-gray-900 prose-headings:heroTitle
            prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:poppins
            prose-li:text-gray-600 prose-li:poppins
            prose-strong:text-gray-900
            prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </motion.div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 heroTitle mb-2">
            Ready to build your next project?
          </h3>
          <p className="text-gray-500 poppins mb-5">
            Let Commeriva transform your business with a website that converts.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}

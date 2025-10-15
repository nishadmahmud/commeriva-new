'use client'

import Image from "next/image";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetcher, userId } from "../../page";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BlogDetails() {
  const { id } = useParams();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/latest-ecommerce-blog-list/${userId}`,
    fetcher
  );

  if (isLoading) return <p className="text-center py-10">Loading blog...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Failed to load blog.</p>;

  const blog = data?.data?.find((b) => String(b.id) === id);

  if (!blog) return <p className="text-center py-10">Blog not found.</p>;

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      className="relative min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-gray-100 overflow-hidden pb-20 pt-10"
      onMouseMove={handleMouse}
      style={{ ["--x"]: `${mousePos.x}px`, ["--y"]: `${mousePos.y}px` }}
    >
      {/* subtle mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(650px circle at var(--x) var(--y), rgba(59,130,246,0.08), transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden dark:block"
        style={{
          background: `radial-gradient(700px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 75%)`,
        }}
      />

      {/* Hero banner with overlayed title */}
      <div className="relative max-w-4xl mx-auto px-4 h-60 md:h-80">
        <Image
          unoptimized
          fill
          sizes="100vw"
          src={blog.image}
          alt={blog.title}
          className="object-contain"
        />
      </div>

      {/* Title below image */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mt-4 md:mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-gray-100 leading-snug"
        >
          {blog.title}
        </motion.h1>
      </div>

      {/* Content card */}
      <div className="relative z-10 mt-8 md:mt-10 max-w-4xl lg:max-w-5xl mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/95 dark:bg-neutral-900/85 backdrop-blur p-6 md:p-8 lg:p-10 shadow-2xl">
          <div
            className="prose prose-neutral dark:prose-invert max-w-none prose-headings:mb-3 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </div>
      </div>
    </section>
  );
}

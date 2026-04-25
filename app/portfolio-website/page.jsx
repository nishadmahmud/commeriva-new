"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WhatWeBring, FAQSection, CalendlyBooking } from "../Components/ServiceSections";
import {
  Palette,
  ArrowRight,
  CheckCircle,
  Eye,
  Sparkles,
  Layout,
  Image,
  Type,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Stunning Visual Design",
    desc: "Minimal, elegant layouts that put your work front and center. No clutter, just impact.",
  },
  {
    icon: Layout,
    title: "Custom Grid Layouts",
    desc: "Masonry, carousel, full-bleed — we create the perfect gallery layout for your content.",
  },
  {
    icon: Eye,
    title: "Project Showcases",
    desc: "Detailed case study pages with before/after, process shots, and client testimonials.",
  },
  {
    icon: Image,
    title: "High-Res Media Support",
    desc: "Optimized image and video loading. Your work loads fast and looks crisp on every screen.",
  },
  {
    icon: Type,
    title: "Brand Identity Integration",
    desc: "Custom typography, color palette, and visual language that matches your personal brand.",
  },
  {
    icon: Layers,
    title: "Easy Content Updates",
    desc: "Simple CMS to add new projects, update your bio, and manage your portfolio content.",
  },
];

const audiences = [
  "Freelance designers & developers",
  "Photographers & videographers",
  "Architects & interior designers",
  "Content creators & influencers",
  "Artists & illustrators",
  "Marketing agencies & consultants",
  "Writers & journalists",
  "Musicians & performers",
];

export default function PortfolioService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-200 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-xs font-semibold poppins mb-5">
              <Palette size={14} />
              Portfolio & Branding
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 heroTitle mb-5 leading-tight">
              Showcase Your Talent
              <br />
              <span className="text-pink-600">With Style</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto poppins mb-8">
              Beautifully crafted portfolio websites that highlight your best
              work, tell your story, and attract the right clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
              >
                Get Started
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-semibold poppins transition-colors hover:bg-gray-50"
              >
                See Examples
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 heroTitle">
              What Makes Our Portfolios Special
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-md hover:border-gray-300 transition-all hover:-translate-y-0.5 flex flex-col"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3 md:mb-4 shrink-0">
                  <f.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1.5 poppins">
                  {f.title}
                </h3>
                <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed poppins flex-grow">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-6 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 heroTitle">
              Built For Creatives
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3">
            {audiences.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
              >
                <CheckCircle size={16} className="text-pink-500 shrink-0" />
                <span className="text-sm text-gray-700 poppins">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatWeBring
        title="Here's What We Bring to the Table"
        subtitle="We craft portfolios that don't just showcase work — they win clients."
        tabs={[
          {
            label: "Visual Design",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
            description: "We create stunning visual designs that put your work front and center. Clean, modern layouts that let your creativity speak.",
            points: [
              "<strong>Custom layouts</strong> – Masonry, carousel, full-bleed — the perfect grid for your content.",
              "<strong>Animation & interaction</strong> – Smooth hover effects, parallax, and micro-animations.",
              "<strong>Mobile-first</strong> – Beautiful on every screen size and device.",
            ]
          },
          {
            label: "Project Showcases",
            image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80",
            description: "Detailed case study pages that tell the story behind your work — process, challenges, and results.",
            points: [
              "<strong>Case study templates</strong> – Structured pages with before/after, process shots, and outcomes.",
              "<strong>Client testimonials</strong> – Integrated reviews and feedback from your clients.",
              "<strong>Category filtering</strong> – Let visitors browse by project type or industry.",
            ]
          },
          {
            label: "Personal Branding",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
            description: "Your portfolio is your personal brand. We build a cohesive identity that represents who you are and what you stand for.",
            points: [
              "<strong>Custom typography</strong> – Font pairings that match your creative style.",
              "<strong>Color palette</strong> – A curated palette that reflects your personality.",
              "<strong>About page</strong> – A compelling personal story that connects with visitors.",
            ]
          },
          {
            label: "Content Management",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
            description: "Add new projects, update your bio, and manage media — all from an easy-to-use dashboard.",
            points: [
              "<strong>Simple CMS</strong> – No coding required to update your portfolio.",
              "<strong>Media optimization</strong> – Automatic image compression and lazy loading.",
              "<strong>Blog module</strong> – Optional blog to share your insights and build authority.",
            ]
          },
        ]}
      />

      {/* Calendly */}
      <CalendlyBooking />

      {/* FAQ */}
      <FAQSection
        serviceLabel="Portfolio & Personal Branding"
        faqs={[
          { q: "What makes a portfolio website different from a regular website?", a: "A portfolio site is designed specifically to showcase your work visually. It features gallery layouts, case study pages, and a focus on your creative process — not just listing services." },
          { q: "Can I update my portfolio easily?", a: "Yes. We include a simple CMS that lets you add new projects, update images, and edit your bio without touching code." },
          { q: "Do you design the visual identity too?", a: "We can. If you have brand guidelines, we follow them. If not, we create a cohesive visual identity with custom typography, color palette, and layout." },
          { q: "How many projects can I showcase?", a: "Unlimited. The architecture is built to grow with your work. Add as many projects, categories, and media as you need." },
          { q: "Will it load fast with high-resolution images?", a: "Absolutely. We use optimized image formats, lazy loading, CDN delivery, and Next.js image optimization to ensure fast loads even with large media files." },
          { q: "How long does it take to build?", a: "Most portfolio websites are completed in 2–3 weeks. Complex sites with case studies and blog modules may take 3–4 weeks." },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 heroTitle mb-3">
            Ready to Stand Out?
          </h2>
          <p className="text-gray-500 poppins mb-6">
            Let Commeriva build a portfolio that speaks louder than your resume.
          </p>
          <Link
            href="/pricing?category=Portfolio"
            className="inline-flex items-center gap-2 px-7 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
          >
            View Portfolio Pricing
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

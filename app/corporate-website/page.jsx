"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WhatWeBring, FAQSection, CalendlyBooking } from "../Components/ServiceSections";
import {
  Briefcase,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Zap,
  BarChart3,
  Users,
  Smartphone,
  Search,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Professional Design",
    desc: "Clean, modern layouts that reflect your brand's authority and build instant trust with visitors.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Next.js-powered performance with sub-second load times and perfect Core Web Vitals.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    desc: "Pre-rendered pages, schema markup, sitemap generation, and metadata management built in.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    desc: "Pixel-perfect on desktop, tablet, and mobile. Every breakpoint is carefully crafted.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    desc: "Enterprise-grade security with SSL, DDoS protection, and secure hosting infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    desc: "Google Analytics, Tag Manager, and custom tracking to measure every visitor interaction.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    desc: "Contact forms, CTAs, and landing pages optimized to convert visitors into clients.",
  },
  {
    icon: Briefcase,
    title: "Content Management",
    desc: "Easy-to-use CMS so your team can update pages, blog posts, and media without developers.",
  },
];

export default function CorporatePage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold poppins mb-5">
              <Briefcase size={14} />
              Corporate Websites
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 heroTitle mb-5 leading-tight">
              Professional Websites
              <br />
              <span className="text-blue-700">That Build Trust</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto poppins mb-8">
              Your corporate website is your digital headquarters. We build
              modern, fast, and SEO-optimized corporate sites that establish
              credibility and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
              >
                Get a Free Quote
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-semibold poppins transition-colors hover:bg-gray-50"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 heroTitle">
              What&apos;s Included
            </h2>
            <p className="text-gray-500 mt-3 poppins">
              Everything a modern corporate presence needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-md hover:border-gray-300 transition-all hover:-translate-y-0.5 flex flex-col"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-3 md:mb-4 shrink-0">
                  <f.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-1.5 poppins">
                  {f.title}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed poppins">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pages We Build */}
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
              Pages We Create
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Home Page with hero, stats, and social proof",
              "About Us with team and company story",
              "Services / Solutions breakdown",
              "Portfolio / Case Studies showcase",
              "Contact page with form and map",
              "Blog / News section with CMS",
              "Careers page with job listings",
              "FAQ and Knowledge Base",
              "Privacy Policy & Terms",
              "Custom pages per your needs",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
              >
                <CheckCircle size={16} className="text-green-500 shrink-0" />
                <span className="text-sm text-gray-700 poppins">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatWeBring
        title="Here's What We Bring to the Table"
        subtitle="We craft professional corporate websites that build trust, generate leads, and grow your business."
        tabs={[
          {
            label: "Brand Identity",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
            description: "Your website is the face of your company. We create a cohesive brand identity that communicates professionalism and builds trust.",
            points: [
              "<strong>Custom design</strong> – No templates. Every element is crafted to match your brand guidelines.",
              "<strong>Typography & colors</strong> – Professional font pairings and color palettes that represent your industry.",
              "<strong>Visual consistency</strong> – Every page, section, and component follows your brand standards.",
            ]
          },
          {
            label: "SEO & Performance",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
            description: "We build corporate sites that rank on Google and load in under 2 seconds. Performance and SEO are not afterthoughts — they're built into the foundation.",
            points: [
              "<strong>Server-side rendering</strong> – Pre-rendered pages for instant load times and SEO advantage.",
              "<strong>Structured data</strong> – Schema markup for rich search results.",
              "<strong>Core Web Vitals</strong> – Optimized LCP, FID, and CLS scores.",
              "<strong>Sitemap & meta tags</strong> – Automated generation for every page.",
            ]
          },
          {
            label: "Content Management",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
            description: "Your team can update content, publish blog posts, and manage media — without touching a line of code.",
            points: [
              "<strong>Easy-to-use CMS</strong> – Intuitive dashboard for content updates.",
              "<strong>Blog & news</strong> – Built-in blog module with categories and tags.",
              "<strong>Media library</strong> – Upload and manage images, videos, and documents.",
            ]
          },
          {
            label: "Lead Generation",
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
            description: "Every corporate site we build is designed to capture leads and convert visitors into clients.",
            points: [
              "<strong>Smart contact forms</strong> – Multi-step forms with email notifications.",
              "<strong>Call-to-action design</strong> – Strategic CTA placement throughout the site.",
              "<strong>Analytics integration</strong> – Google Analytics, Tag Manager, and conversion tracking.",
            ]
          },
        ]}
      />

      <CalendlyBooking />

      <FAQSection
        serviceLabel="Corporate Website"
        faqs={[
          { q: "How is a corporate website different from a regular website?", a: "A corporate website is built for credibility and professionalism. It features your company story, services, team, case studies, and lead generation tools — all designed to build trust with potential clients and partners." },
          { q: "How long does it take to build a corporate website?", a: "Most corporate websites are completed in 2–4 weeks. Complex sites with custom features, blog modules, or multi-language support may take 4–6 weeks." },
          { q: "Can I update content myself after launch?", a: "Yes. We include an easy-to-use CMS so your team can update pages, blog posts, team members, and media without needing a developer." },
          { q: "Will my website be SEO optimized?", a: "Absolutely. Every page gets proper meta tags, structured data, sitemap, and performance optimization for the best possible Google ranking." },
          { q: "Do you design the branding too?", a: "We can. If you already have brand guidelines, we follow them. If not, we can create a visual identity including colors, typography, and logo placement." },
          { q: "Is hosting and domain included?", a: "We help you set up hosting and domain but these are separate costs. We recommend the best options based on your traffic and budget." },
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
            Ready to Build Your Corporate Website?
          </h2>
          <p className="text-gray-500 poppins mb-6">
            Let Commeriva create a professional digital presence that grows your
            business.
          </p>
          <Link
            href="/pricing?category=Corporate-Website"
            className="inline-flex items-center gap-2 px-7 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
          >
            View Corporate Pricing
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

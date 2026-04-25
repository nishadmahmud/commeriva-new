"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WhatWeBring, FAQSection, CalendlyBooking } from "../Components/ServiceSections";
import {
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Smartphone,
  CreditCard,
  BarChart3,
  Package,
  Users,
  Globe,
  Truck,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Custom Storefront",
    desc: "Stunning product pages, smart search, and intuitive navigation designed for maximum conversions.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    desc: "SSLCommerz, Stripe, PayPal, bKash — all payment gateways integrated securely.",
  },
  {
    icon: BarChart3,
    title: "Advanced CMS Dashboard",
    desc: "Full product, order, inventory, and analytics management from one powerful admin panel.",
  },
  {
    icon: Package,
    title: "Inventory & Stock",
    desc: "Real-time stock tracking, low-stock alerts, and barcode/SKU management built in.",
  },
  {
    icon: Truck,
    title: "Courier Integration",
    desc: "Pathao, Steadfast, DHL, FedEx — automated shipping with live tracking.",
  },
  {
    icon: Users,
    title: "Customer Management",
    desc: "CRM tools, order history, wishlists, and customer segmentation for targeted marketing.",
  },
  {
    icon: Globe,
    title: "SEO Optimized",
    desc: "Pre-rendered pages, meta tags, structured data, and Core Web Vitals optimization.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Responsive layouts that look and perform beautifully on every device.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    desc: "Enterprise-grade security, SSL, and architecture that scales with your business.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We understand your business, products, target audience, and competitors to build the perfect strategy.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "Custom mockups and prototypes tailored to your brand. We iterate until you love it.",
  },
  {
    step: "03",
    title: "Development & Integration",
    desc: "Full-stack build with payment, shipping, CMS, and all third-party integrations.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    desc: "Rigorous QA, performance testing, and a smooth launch with ongoing support.",
  },
];

export default function EcommercePage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold poppins mb-5">
              <ShoppingCart size={14} />
              E-Commerce Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 heroTitle mb-5 leading-tight">
              Build an Online Store
              <br />
              <span className="text-orange-600">That Actually Sells</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto poppins mb-8">
              Custom-built e-commerce websites powered by Next.js — fast,
              secure, and conversion-optimized. From product catalog to checkout,
              we handle everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
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

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold poppins mb-4">
              <Zap size={14} />
              What You Get
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 heroTitle">
              Everything Your Store Needs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                  <f.icon size={20} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5 poppins">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed poppins">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 heroTitle">
              Our Process
            </h2>
            <p className="text-gray-500 mt-3 poppins">
              From idea to launch in 4 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gray-900 text-white flex items-center justify-center text-lg font-bold heroTitle">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1 poppins">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed poppins">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Commeriva */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 heroTitle">
              Why Choose Commeriva for E-Commerce?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Custom Next.js development — not a generic template",
              "Full-stack team: UI/UX, frontend, backend, DevOps",
              "20+ e-commerce stores successfully launched",
              "Dedicated project manager for your build",
              "Post-launch support and maintenance included",
              "Performance-first: fast load times, high Core Web Vitals",
              "Complete CMS with POS, HRM, invoicing, and analytics",
              "SEO + conversion optimization baked into every page",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 p-3"
              >
                <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-700 poppins">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatWeBring
        title="Here's What We Bring to the Table"
        subtitle="Consider our e-commerce development as your growth engine — we build stores that sell, scale, and succeed."
        tabs={[
          {
            label: "CMS Web Development",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
            description: "In today's digital world, your store must be dynamic, engaging, and easy to manage. We build CMS-powered e-commerce solutions using Next.js, React, and Laravel, tailored to your business.",
            points: [
              "<strong>User-friendly management</strong> – From intuitive dashboards to custom admin panels, manage content without technical hassle.",
              "<strong>Flexible & customizable</strong> – Tailored platforms to fit your brand, from headless CMS to custom React/Node setups.",
              "<strong>Optimized for performance & SEO</strong> – Fast, lightweight solutions built with best practices.",
              "<strong>Secure & reliable</strong> – Enterprise-level security keeps your business protected.",
              "<strong>Scalable & future-ready</strong> – Agile builds that grow with your business."
            ]
          },
          {
            label: "E-commerce",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
            description: "We build high-converting online stores with payment integration, inventory management, and analytics — everything you need to sell online.",
            points: [
              "<strong>Product catalog</strong> – Unlimited products with categories, variants, and smart filters.",
              "<strong>Payment gateways</strong> – SSLCommerz, Stripe, PayPal, bKash integrated securely.",
              "<strong>Order management</strong> – Track orders, returns, and customer history from one dashboard.",
              "<strong>Courier integration</strong> – Pathao, Steadfast, DHL with automated tracking."
            ]
          },
          {
            label: "Email template design",
            image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
            description: "Professional email templates for order confirmations, marketing campaigns, and transactional emails that match your brand.",
            points: [
              "<strong>Responsive design</strong> – Looks perfect on every email client and device.",
              "<strong>Brand-consistent</strong> – Matches your store's visual identity.",
              "<strong>High deliverability</strong> – Built with best practices to avoid spam filters."
            ]
          },
          {
            label: "Domain",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
            description: "We help you choose, register, and configure the perfect domain for your online store.",
            points: [
              "<strong>Domain registration</strong> – .com, .shop, .store, country-specific TLDs.",
              "<strong>DNS configuration</strong> – Proper setup for email, CDN, and SSL.",
              "<strong>Domain migration</strong> – Seamless transfer from your current registrar."
            ]
          },
          {
            label: "Hosting",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
            description: "Fast, secure, and scalable hosting solutions optimized for e-commerce performance.",
            points: [
              "<strong>Cloud hosting</strong> – AWS, Vercel, DigitalOcean for maximum uptime.",
              "<strong>SSL certificates</strong> – Free SSL for secure checkout.",
              "<strong>CDN integration</strong> – Global content delivery for fast page loads.",
              "<strong>Auto backups</strong> – Daily automated backups to protect your data."
            ]
          }
        ]}
      />

      {/* Calendly Booking */}
      <CalendlyBooking />

      {/* FAQ */}
      <FAQSection
        serviceLabel="E-Commerce Website"
        faqs={[
          { q: "How long does it take to build an e-commerce website?", a: "Typically 3–6 weeks depending on the complexity. A basic store with 500 products can be ready in 3 weeks, while a full-featured store with CMS, POS, and custom integrations may take 5–6 weeks." },
          { q: "Which payment gateways do you integrate?", a: "We integrate SSLCommerz, Stripe, PayPal, bKash, Nagad, Razorpay, and more. We can add any payment gateway that provides an API." },
          { q: "Do you provide the admin dashboard / CMS?", a: "Yes! Every e-commerce build includes our advanced CMS with product management, order tracking, inventory, invoicing, POS, HRM, customer management, and analytics." },
          { q: "Can I manage products myself after launch?", a: "Absolutely. Our CMS is designed for non-technical users. You can add products, update prices, manage orders, and view analytics without any coding knowledge." },
          { q: "Do you offer post-launch support?", a: "Yes, we provide ongoing maintenance and support. Our plans include bug fixes, security updates, and feature additions as your business grows." },
          { q: "Is the website mobile responsive?", a: "100%. Every store we build is mobile-first, meaning it's designed for phones first and then scaled up to tablets and desktops." },
          { q: "What about SEO? Will my store rank on Google?", a: "We build with SEO best practices from day one — pre-rendered pages, meta tags, structured data, fast load times, and Core Web Vitals optimization." },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 heroTitle mb-3">
            Ready to Launch Your Store?
          </h2>
          <p className="text-gray-500 poppins mb-6">
            Let Commeriva build a high-performing online store that grows your
            revenue.
          </p>
          <Link
            href="/pricing?category=E-Commerce"
            className="inline-flex items-center gap-2 px-7 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
          >
            View E-Commerce Pricing
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

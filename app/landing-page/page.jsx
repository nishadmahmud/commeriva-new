"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WhatWeBring, FAQSection, CalendlyBooking } from "../Components/ServiceSections";
import {
  Target,
  ArrowRight,
  CheckCircle,
  MousePointerClick,
  BarChart3,
  Zap,
  Megaphone,
  Layers,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Conversion-Focused Design",
    desc: "Every pixel is designed to guide visitors toward a single action — whether it's a purchase, signup, or inquiry.",
  },
  {
    icon: MousePointerClick,
    title: "A/B Testing Ready",
    desc: "Built with testing in mind. Swap headlines, CTAs, and layouts to find what converts best.",
  },
  {
    icon: Zap,
    title: "Blazing Fast Speed",
    desc: "Sub-second load times. Every millisecond of delay costs you conversions — we eliminate it.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    desc: "Facebook Pixel, Google Analytics, UTM tracking, and conversion events — all set up from day one.",
  },
  {
    icon: Megaphone,
    title: "Ad Campaign Integration",
    desc: "Optimized for Facebook Ads, Google Ads, and TikTok campaigns. Your traffic converts higher.",
  },
  {
    icon: Layers,
    title: "Multi-Step Funnels",
    desc: "Landing page → Lead capture → Thank you page → Upsell. Complete funnel architecture.",
  },
];

const useCases = [
  "Product launch campaigns",
  "Webinar & event registrations",
  "Lead generation for B2B services",
  "App download campaigns",
  "Seasonal sale promotions",
  "Email list building",
  "Course & membership sales",
  "Crowdfunding & pre-orders",
];

export default function LandingPageService() {
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold poppins mb-5">
              <Target size={14} />
              Landing Pages & Funnels
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 heroTitle mb-5 leading-tight">
              Pages That
              <br />
              <span className="text-purple-600">Convert Clicks to Customers</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto poppins mb-8">
              High-performance landing pages and sales funnels designed to
              maximize conversions from your ad campaigns, launches, and
              promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
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
              Built for Conversions
            </h2>
            <p className="text-gray-500 mt-3 poppins">
              Every element is optimized to drive results
            </p>
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
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 md:mb-4 shrink-0">
                  <f.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1.5 poppins">
                  {f.title}
                </h3>
                <p className="text-[10px] md:text-sm text-gray-500 leading-relaxed poppins">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Perfect For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3">
            {useCases.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
              >
                <CheckCircle size={16} className="text-purple-500 shrink-0" />
                <span className="text-sm text-gray-700 poppins">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed Badge */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 heroTitle mb-1">
                Fast Turnaround
              </h3>
              <p className="text-gray-500 poppins text-sm">
                Most landing pages are designed, built, and deployed within{" "}
                <strong className="text-gray-900">3–5 business days</strong>.
                Need it faster? We offer rush delivery for urgent campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatWeBring
        title="Here's What We Bring to the Table"
        subtitle="We build high-converting landing pages and funnels that turn ad traffic into paying customers."
        tabs={[
          {
            label: "Conversion Design",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
            description: "Every element on your landing page is strategically designed to drive a single action — whether it's a signup, purchase, or inquiry.",
            points: [
              "<strong>Above-the-fold impact</strong> – Compelling headline, subheadline, and CTA visible without scrolling.",
              "<strong>Social proof</strong> – Testimonials, reviews, and trust badges placed for maximum effect.",
              "<strong>Urgency & scarcity</strong> – Countdown timers, limited offers, and stock indicators.",
            ]
          },
          {
            label: "Ad Optimization",
            image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80",
            description: "Your landing page is optimized to work with your paid ad campaigns — higher Quality Scores, lower CPCs, better ROAS.",
            points: [
              "<strong>Message match</strong> – Ad copy matches landing page copy for higher Quality Scores.",
              "<strong>Fast load times</strong> – Sub-2-second loads keep your bounce rate low.",
              "<strong>Pixel integration</strong> – Facebook, Google, and TikTok tracking set up correctly.",
            ]
          },
          {
            label: "Funnel Architecture",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
            description: "We design complete funnel flows that guide prospects through your sales process step by step.",
            points: [
              "<strong>Multi-step flows</strong> – Landing → Lead capture → Thank you → Upsell.",
              "<strong>Email sequences</strong> – Automated follow-up emails after form submission.",
              "<strong>A/B testing</strong> – Built for split testing headlines, CTAs, and layouts.",
            ]
          },
          {
            label: "Analytics & Tracking",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
            description: "Know exactly what's working. Every click, scroll, and conversion is tracked and reported.",
            points: [
              "<strong>Conversion tracking</strong> – Track form submissions, button clicks, and purchases.",
              "<strong>Heatmaps</strong> – See where users click, scroll, and drop off.",
              "<strong>UTM tracking</strong> – Track which campaigns and sources drive the best results.",
            ]
          },
        ]}
      />

      {/* Calendly */}
      <CalendlyBooking />

      {/* FAQ */}
      <FAQSection
        serviceLabel="Landing Page"
        faqs={[
          { q: "How long does it take to build a landing page?", a: "Most landing pages are designed, built, and deployed within 3–5 business days. Rush delivery is available for urgent campaigns." },
          { q: "Can you build multi-step funnels?", a: "Yes! We build complete funnel architectures: landing page → lead capture → thank you page → upsell. Each step is optimized for maximum conversion." },
          { q: "Do you set up tracking and analytics?", a: "Absolutely. We configure Facebook Pixel, Google Analytics, UTM parameters, and conversion events so you can measure ROI from day one." },
          { q: "Will the landing page work with my ad campaigns?", a: "Yes. Our pages are optimized for Facebook Ads, Google Ads, and TikTok campaigns with proper pixel integration and fast load times for high Quality Scores." },
          { q: "Can I A/B test different versions?", a: "We build with testing in mind. You can swap headlines, CTAs, images, and layouts to find what converts best." },
          { q: "Do you provide the design or do I need to?", a: "We handle everything — from copywriting strategy to UI design to development. You just tell us your goals and target audience." },
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
            Ready to Boost Your Campaign?
          </h2>
          <p className="text-gray-500 poppins mb-6">
            Let Commeriva build landing pages that turn your ad spend into real
            results.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-7 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
          >
            Get Started
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

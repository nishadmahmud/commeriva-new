"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

/* ─── Tabbed "What We Bring" Section ─── */
export function WhatWeBring({ title, subtitle, tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <section className="py-16 px-6 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 heroTitle">
            {title || "Here's What We Bring to the Table"}
          </h2>
          {subtitle && (
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto poppins">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Tabs */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`text-left px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold poppins transition-all duration-200 cursor-pointer min-w-max lg:min-w-0 ${
                  activeTab === i
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-md"
              >
                <Image
                  src={active.image}
                  alt={active.label}
                  fill
                  className="object-cover"
                 unoptimized/>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-900 heroTitle mb-3">
                  {active.label}
                </h3>
                <p className="text-sm text-gray-600 poppins mb-4 leading-relaxed">
                  {active.description}
                </p>
                <ul className="space-y-2">
                  {active.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 poppins flex items-start gap-2"
                    >
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span dangerouslySetInnerHTML={{ __html: point }} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ Accordion ─── */
export function FAQSection({ faqs, serviceLabel }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-xs font-semibold poppins mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-gray-900 heroTitle">
            Frequently Asked Questions
          </h2>
          {serviceLabel && (
            <p className="text-gray-500 mt-2 poppins text-sm">
              Common questions about our {serviceLabel} service
            </p>
          )}
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
              >
                <span className="text-sm font-semibold text-gray-900 poppins pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-gray-500 poppins leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Inline Calendly Booking CTA ─── */
export function CalendlyBooking() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-white shadow-lg"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
            <Calendar size={28} className="text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold heroTitle mb-1">
              Book a Free 30-Min Consultation
            </h3>
            <p className="text-blue-100 text-sm poppins">
              Discuss your project with our team. No obligation, no hard
              sell — just expert advice.
            </p>
          </div>
          <a
            href="https://calendly.com/squadinnovators/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-full text-sm font-semibold poppins hover:bg-blue-50 transition-colors shadow-sm group shrink-0"
          >
            Book Now
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

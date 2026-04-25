"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "What is Commeriva?",
      answer:
        "Commeriva is a smart digital platform that helps businesses build a strong online presence with company websites, e-commerce stores, landing pages, mobile apps, and funnel websites – all in one place.",
    },
    {
      question: "Who can use Commeriva?",
      answer:
        "Our solutions are designed for startups, small businesses, and enterprises across industries like retail, fashion, electronics, corporate services, and personal branding.",
    },
    {
      question: "What type of websites does Commeriva build?",
      answer:
        "We specialize in Corporate & Company Websites, scalable Next.js powered e-commerce stores, landing pages for campaigns, funnel websites for sales & lead generation, portfolio & personal branding websites, and custom mobile apps.",
    },
    {
      question: "Is Commeriva suitable for e-commerce businesses?",
      answer:
        "Yes. Commeriva provides scalable e-commerce solutions with product management, payment gateways, inventory control, order tracking, and SEO-friendly design.",
    },
    {
      question: "Can I accept online payments through Commeriva websites?",
      answer:
        "Yes. We integrate secure payment gateways like Stripe, PayPal, SSLCOMMERZ, bKash, Nagad, and more depending on your location.",
    },
    {
      question: "Do I need technical skills to manage my website?",
      answer:
        "No. Commeriva websites come with an easy-to-use content management system (CMS) so you can update content, products, and images without coding knowledge.",
    },
    {
      question: "Can Commeriva integrate with third-party tools?",
      answer:
        "Yes. We support integrations with Google Analytics, Meta Pixel, CRMs, live chat, email marketing tools, and more to grow your business.",
    },
    {
      question: "Are Commeriva websites mobile-friendly?",
      answer:
        "Absolutely. All websites are fully responsive, ensuring a smooth user experience on mobile, tablet, and desktop.",
    },
    {
      question: "How long does it take to build a website with Commeriva?",
      answer:
        "Project timelines vary depending on complexity. A basic website can be ready in 1–2 weeks, while a custom e-commerce or mobile app solution may take longer.",
    },
    {
      question: "Does Commeriva provide ongoing support?",
      answer:
        "Yes. We provide technical support, maintenance, and scaling services to keep your website secure, updated, and ready for growth.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 heroTitle">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-500 poppins">
            Everything you need to know about Commeriva.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer poppins"
                >
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 pr-6">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems[index] ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openItems[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden border-t border-gray-100"
                    >
                      <div className="px-6 pb-5 pt-3">
                        <p className="text-sm text-gray-500 leading-relaxed poppins">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

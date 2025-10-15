"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

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
        "Commeriva is a smart digital platform that helps businesses build a strong online presence with company websites, e-commerce stores, landing pages, and funnel websites – all in one place.",
    },
    {
      question: "Who can use Commeriva?",
      answer:
        "Our solutions are designed for startups, small businesses, and enterprises across industries like retail, fashion, electronics, corporate services, and personal branding.",
    },
    {
      question: "What type of websites does Commeriva build?",
      answer:
        "We specialize in Corporate & Company Websites, scalable Next.js powered e-commerce stores, landing pages for campaigns, funnel websites for sales & lead generation, and portfolio & personal branding websites.",
    },
    {
      question: "Is Commeriva suitable for e-commerce businesses?",
      answer:
        "Yes ✅. Commeriva provides scalable e-commerce solutions with product management, payment gateways, inventory control, order tracking, and SEO-friendly design.",
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
        "Absolutely ✅. All websites are fully responsive, ensuring a smooth user experience on mobile, tablet, and desktop.",
    },
    {
      question: "How long does it take to build a website with Commeriva?",
      answer:
        "Project timelines vary depending on complexity. A basic website can be ready in 1–2 weeks, while a custom e-commerce solution may take longer.",
    },
    {
      question: "Does Commeriva provide ongoing support?",
      answer:
        "Yes. We provide technical support, maintenance, and scaling services to keep your website secure, updated, and ready for growth.",
    },
  ];

  return (
    <section className="relative py-12 md:py-20 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-40 size-[40rem] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-teal-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 size-[45rem] rounded-full bg-gradient-to-tl from-teal-400/20 via-cyan-400/10 to-blue-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 text-xs md:text-sm shadow-sm backdrop-blur mb-4">
            <HelpCircle size={14} className="text-cyan-500" />
            FAQ
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-gray-100 heroTitle mb-4">
            Frequently asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-300 dark:via-blue-300 dark:to-teal-300">
              questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto poppins">
            Everything you need to know about Commeriva and how we can help your business grow.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Glow on hover - dark mode only */}
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-500/30 to-blue-500/30 opacity-0 dark:group-hover:opacity-100 blur transition-opacity duration-300" />
              
              {/* FAQ Card */}
              <div className="relative bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden backdrop-blur hover:border-gray-300 dark:hover:border-white/20 transition-all">
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 text-left flex items-center justify-between cursor-pointer focus:outline-none poppins group/btn"
                >
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-gray-100 pr-8 group-hover/btn:text-cyan-600 dark:group-hover/btn:text-cyan-400 transition-colors">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems[index] ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full flex items-center justify-center group-hover/btn:bg-cyan-600 dark:group-hover/btn:bg-cyan-500 transition-colors"
                  >
                    <Plus className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover/btn:text-white transition-colors" />
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {openItems[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden border-t border-gray-200 dark:border-white/10"
                    >
                      <div className="px-6 md:px-8 pb-6 pt-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed poppins">
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

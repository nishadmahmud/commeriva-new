"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Perfect Dashboard",
    description:
      "Complete business overview with real-time sales, orders, revenue analytics, and quick-action shortcuts — all in one place.",
    image: "/features/dashboard.png",
  },
  {
    title: "Customizable Frontend",
    description:
      "Manage sliders, banners, coupons, campaigns, and website design from a powerful e-commerce panel. Full control, no code needed.",
    image: "/features/frontend.png",
  },
  {
    title: "Product Management",
    description:
      "Add, edit, and manage products with barcode generation, variants, categories, and inventory — all built-in and organized.",
    image: "/features/products.png",
  },
  {
    title: "Order Management",
    description:
      "Track and process all orders with powerful filters — order received, packaging, shipping, delivered, and more status tracking.",
    image: "/features/orders.png",
  },
  {
    title: "Invoice & Billing",
    description:
      "Auto-generate professional invoices with barcode, customer details, terms & conditions, and integrated payment tracking.",
    image: "/features/invoice.png",
  },
  {
    title: "Point of Sale (POS)",
    description:
      "Lightning-fast retail checkout system. Scan products, process payments, and generate invoices — all from one screen.",
    image: "/features/pos.png",
  },
  {
    title: "HRM & Payroll",
    description:
      "Manage employees, designations, departments, salaries, and incentives. Complete human resource management built-in.",
    image: "/features/hrm.png",
  },
  {
    title: "Customer Management",
    description:
      "View customer profiles, purchase history, invoices, and engagement. Call, chat, email, or WhatsApp directly from the panel.",
    image: "/features/customers.png",
  },
  {
    title: "Analytics & Reports",
    description:
      "Cash statements, revenue reports, and financial analytics with date filters and export options. Data-driven business decisions.",
    image: "/features/analytics.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CMSFeatures() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold poppins mb-4">
              ✦ Key Features
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 heroTitle leading-tight">
              Everything you need to run
              <br className="hidden md:block" />
              and grow your online business
            </h2>
          </div>

          <Link
            href="/integration"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-blue-700 transition-colors poppins border border-gray-200 rounded-full px-5 py-2.5 hover:border-blue-200 hover:bg-blue-50 whitespace-nowrap self-start md:self-auto group"
          >
            Explore all features
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-50 border-b border-gray-100">
                  {/* Browser chrome bar */}
                  <div className="absolute top-0 left-0 right-0 z-10 h-7 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="ml-3 flex-1 h-4 bg-white rounded-md border border-gray-200" />
                  </div>

                  <div className="pt-7 h-full">
                    <Image
                      unoptimized
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 heroTitle">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed poppins">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

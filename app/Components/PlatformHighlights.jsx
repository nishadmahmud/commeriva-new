"use client";

import { motion } from "framer-motion";
import {
  Building2,
  FileText,
  Package,
  ShoppingCart,
  Smartphone,
  Timer,
  Truck,
  Wallet,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    title: "Coupons & Discounts",
    description:
      "Run promotions with coupons, discounts, and targeted offers that increase conversions.",
    icon: Wallet,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Flash Sales & Offers",
    description:
      "Create limited-time deals with fast setup and clear discount visibility for customers.",
    icon: Sparkles,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Role-Based Admin Access",
    description:
      "Give teams the right permissions with role-based access and secure internal workflows.",
    icon: Building2,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Expense Management",
    description:
      "Track expenses, manage categories, and keep your financial records organized.",
    icon: Sparkles,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Pickup Point",
    description:
      "Offer pickup locations and streamline order fulfillment with easy operational control.",
    icon: Truck,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Fraud Customer Detector",
    description:
      "Detect suspicious customers and reduce fraud risk with smarter validation and monitoring.",
    icon: Timer,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Wholesale System",
    description:
      "Support bulk buying with wholesale pricing, tiered offers, and B2B-friendly processes.",
    icon: Building2,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Return Parcel Issue",
    description:
      "Manage return requests with clear updates, reasons, and efficient resolution workflows.",
    icon: Package,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Affiliate Marketing",
    description:
      "Run affiliate programs and track referrals to grow sales through partners.",
    icon: Wallet,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Website CMS Management",
    description:
      "Update content, banners, and website pages from a simple CMS dashboard.",
    icon: FileText,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "SEO-Friendly Structure",
    description:
      "Build pages with clean structure so search engines can index your content effectively.",
    icon: Sparkles,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Mobile Responsive Design",
    description:
      "Deliver a smooth shopping experience on phones and tablets with responsive layouts.",
    icon: Smartphone,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Order Status Automation",
    description:
      "Automate order updates across the workflow so customers always see the right status.",
    icon: ShoppingCart,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Inventory Alerts",
    description:
      "Get stock alerts and reduce overselling with inventory monitoring and timely notifications.",
    icon: Package,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
  {
    title: "Payment Tracking",
    description:
      "Track payments and confirmations to keep finance and operations aligned.",
    icon: Wallet,
    iconBg: "bg-blue-50 border-blue-100 text-blue-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PlatformHighlights() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold poppins w-fit">
            eCommerce Capabilities
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 heroTitle leading-tight">
            Everything Included for a Fast-Running Store
          </h2>

          <p className="text-base text-gray-500 poppins leading-relaxed max-w-2xl">
            Explore key business tools for promotions, fulfillment, security, and
            operations - all in one place.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={cardVariants}>
                <div className="h-full rounded-xl border border-gray-200 bg-white p-4 flex flex-col gap-2 hover:shadow-sm hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5">
                  <div
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center ${item.iconBg}`}
                  >
                    <Icon size={18} className="shrink-0" />
                  </div>

                  <h3 className="text-sm md:text-base font-semibold text-gray-900 heroTitle leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed poppins">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  ShoppingCart,
  Building2,
  Rocket,
  UserCircle,
  Smartphone,
  Code2,
} from "lucide-react";

const services = [
  {
    title: "E-Commerce Website",
    description:
      "Custom online stores designed to sell smarter and grow faster. Complete with payment integration, inventory management, and seamless checkout.",
    icon: ShoppingCart,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    buttonText: "Learn More",
    buttonLink: "/ecommerce-website",
  },
  {
    title: "Corporate Website",
    description:
      "Professional websites that strengthen your brand identity, build trust with clients, and establish your digital presence with authority.",
    icon: Building2,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    buttonText: "Learn More",
    buttonLink: "/corporate-website",
  },
  {
    title: "Landing Page / Funnel",
    description:
      "High-conversion landing pages for campaigns, ads, and product launches. Designed to capture leads and drive action.",
    icon: Rocket,
    color: "bg-green-50 text-green-600 border-green-100",
    buttonText: "Learn More",
    buttonLink: "/landing-page",
  },
  {
    title: "Portfolio & Personal Branding",
    description:
      "Showcase your talent, achievements, and personal brand with sleek, creative layouts optimized for recruiters and clients.",
    icon: UserCircle,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    buttonText: "Learn More",
    buttonLink: "/portfolio-website",
  },
  {
    title: "Custom Mobile App",
    description:
      "Native Android & iOS applications built with Flutter and native technologies. From concept to App Store, we deliver complete mobile solutions.",
    icon: Smartphone,
    color: "bg-rose-50 text-rose-600 border-rose-100",
    buttonText: "Learn More",
    buttonLink: "/mobile-app",
  },
  {
    title: "Custom Software Development",
    description:
      "Scalable web applications, ERPs, and internal tools tailored to your unique business workflows and operational needs.",
    icon: Code2,
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    buttonText: "Learn More",
    buttonLink: "/custom-software",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function OurServices() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold poppins mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 heroTitle">
            Solutions We Build For You
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto poppins">
            End-to-end digital products that combine stunning design with
            performance, security, and scale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 p-7 h-full flex flex-col hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${service.color} border flex items-center justify-center mb-5`}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 heroTitle">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-5 poppins leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={service.buttonLink}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-blue-700 transition-colors poppins group/link"
                  >
                    {service.buttonText}
                    <ArrowUpRight
                      size={15}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

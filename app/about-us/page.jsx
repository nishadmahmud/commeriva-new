"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  Zap,
  ShoppingCart,
  Briefcase,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-gray-50 border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold poppins mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 heroTitle">
            About <span className="text-orange-600">Commeriva</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl poppins mx-auto text-gray-500">
            We craft modern, high-performing websites that help businesses grow,
            connect, and succeed in the digital world.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-orange-50 border border-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-semibold poppins mb-4">
            <Target size={14} className="mr-2" />
            Our Mission
          </div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 heroTitle">
            Empowering Digital Success
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-500 poppins">
            At Commeriva, our mission is simple: to empower businesses and
            individuals with functional, user-friendly, and elegant websites.
            Whether it&apos;s eCommerce, corporate branding, or creative
            portfolios, we deliver digital experiences that leave a lasting
            impression.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 border-t border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold poppins mb-4">
            <Zap size={14} className="mr-2" />
            Our Expertise
          </div>
          <h2 className="text-3xl font-bold text-gray-900 heroTitle">
            What We Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto poppins">
          {[
            {
              title: "E-Commerce Websites",
              desc: "Engaging online stores with smooth checkout, secure payments, and clean UI.",
              icon: ShoppingCart,
              color: "bg-blue-50 border-blue-100",
              iconColor: "text-blue-600 bg-blue-100",
            },
            {
              title: "Corporate Websites",
              desc: "Professional and scalable websites that reflect your business credibility.",
              icon: Briefcase,
              color: "bg-green-50 border-green-100",
              iconColor: "text-green-600 bg-green-100",
            },
            {
              title: "Landing Pages",
              desc: "Conversion-focused funnel pages designed to capture leads and drive sales.",
              icon: Globe,
              color: "bg-purple-50 border-purple-100",
              iconColor: "text-purple-600 bg-purple-100",
            },
            {
              title: "Portfolio & Branding",
              desc: "Showcase your creativity and brand identity with minimal, modern portfolio websites.",
              icon: Palette,
              color: "bg-orange-50 border-orange-100",
              iconColor: "text-orange-600 bg-orange-100",
            },
            {
              title: "Mobile Apps",
              desc: "Custom Flutter and native mobile applications built for performance.",
              icon: Smartphone,
              color: "bg-cyan-50 border-cyan-100",
              iconColor: "text-cyan-600 bg-cyan-100",
            },
          ].map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`${service.color} border rounded-2xl p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.iconColor} mb-4`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-orange-50 border border-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-semibold poppins mb-4">
              <Users size={14} className="mr-2" />
              Our Values
            </div>
            <h2 className="text-3xl font-bold text-gray-900 heroTitle">
              Why Choose Commeriva
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Client-First Approach",
                desc: "Every decision we make starts with your business goals. We listen, understand, and deliver.",
              },
              {
                title: "Quality Over Quantity",
                desc: "We don't cut corners. Every project gets our full attention, from pixel-perfect design to clean code.",
              },
              {
                title: "Long-Term Partnership",
                desc: "We're not just vendors — we're your digital partners. We grow with your business.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center text-lg font-bold heroTitle mb-4">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 heroTitle">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed poppins">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-gray-50 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl heroTitle font-bold mb-4 text-gray-900">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-500 poppins">
            Partner with Commeriva and take your brand to the next level with a
            website designed for impact.
          </p>
          <Link
            target="_blank"
            href="https://wa.me/+8801677182084"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-sm poppins group"
          >
            Get in Touch
            <ArrowRight
              size={18}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

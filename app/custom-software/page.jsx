"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WhatWeBring, FAQSection, CalendlyBooking } from "../Components/ServiceSections";
import {
  Code2,
  ArrowRight,
  Database,
  Layers,
  Settings,
  ShieldCheck,
  Zap,
  BarChart3,
  Cpu,
  RefreshCw,
  Cloud,
} from "lucide-react";

const features = [
  {
    icon: Layouts,
    title: "Custom Dashboards",
    desc: "Tailored admin panels and internal tools designed specifically for your unique business workflows.",
  },
  {
    icon: Database,
    title: "ERP & CRM Solutions",
    desc: "Centralized systems to manage your resources, customers, and operations efficiently from one place.",
  },
  {
    icon: RefreshCw,
    title: "API & Integrations",
    desc: "Seamlessly connect your software with third-party services, payment gateways, and external APIs.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Built with high-level security protocols, encryption, and role-based access controls to protect your data.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    desc: "Custom reporting tools and real-time data visualization to help you make informed business decisions.",
  },
  {
    icon: Cloud,
    title: "Scalable Cloud Infra",
    desc: "Deployed on robust cloud architectures like AWS or Vercel, designed to scale as your business grows.",
  },
  {
    icon: Cpu,
    title: "Automated Workflows",
    desc: "Automate repetitive manual tasks with custom background processes and smart logic systems.",
  },
  {
    icon: Layers,
    title: "Modern Tech Stack",
    desc: "Developed using high-performance technologies like Next.js, Node.js, and modern databases.",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Lightning-fast applications optimized for speed, responsiveness, and seamless user experience.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Business Analysis",
    desc: "We dive deep into your operations to identify bottlenecks and define the technical requirements for your solution.",
  },
  {
    step: "02",
    title: "Architecture Design",
    desc: "Mapping out the system architecture, database schema, and user flows to ensure a scalable and robust foundation.",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "Building your software in sprints with regular demos, allowing for feedback and adjustments at every stage.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    desc: "Rigorous quality assurance followed by a secure cloud deployment and ongoing maintenance support.",
  },
];

// Helper for the missing icon in my list
const Layouts = Layers;

export default function CustomSoftwarePage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-semibold poppins mb-5">
              <Code2 size={14} />
              Software Engineering
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 heroTitle mb-5 leading-tight">
              Custom Software Built for
              <br />
              <span className="text-cyan-600">Your Business Growth</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto poppins mb-8">
              We build scalable web applications, ERPs, and automation tools 
              tailored to your unique business logic. Modernize your operations 
              with high-performance custom software.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
              >
                Start Your Project
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-semibold poppins transition-colors hover:bg-gray-50"
              >
                View Case Studies
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
              <Settings size={14} />
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 heroTitle">
              Tailored Solutions, Not Just Apps
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-md hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3 md:mb-4 shrink-0">
                  <f.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1.5 poppins">
                  {f.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed poppins">
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
              Our Development Process
            </h2>
            <p className="text-gray-500 mt-3 poppins">
              From analysis to deployment, we build with precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {processSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <span className="text-4xl md:text-5xl font-black text-cyan-100 heroTitle leading-none mt-1">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 poppins">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed poppins">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatWeBring />
      <FAQSection />
      <CalendlyBooking />
    </div>
  );
}

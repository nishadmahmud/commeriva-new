"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business, goals, and audience. Together we craft a roadmap and strategy that sets the foundation for success.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Our designers create stunning, conversion-focused layouts. You review and approve interactive prototypes before a single line of code is written.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "We build your solution using modern frameworks, then rigorously test across devices and browsers to ensure quality and performance.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Your project goes live with our full support. We provide ongoing maintenance, analytics monitoring, and scaling assistance as you grow.",
  },
];

export default function SupplyChain() {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold poppins mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white heroTitle">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto poppins">
            We take your ideas and infuse them with our expertise to create your
            digital masterpiece.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all hover:-translate-y-1"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold mb-4">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-white mb-2 heroTitle">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed poppins">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

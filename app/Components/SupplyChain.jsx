"use client";
import Globe from "./Globe";
import { ChartLine, Lightbulb, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Code size={48} />,
    title: "Next.js Powered Websites",
    description:
      "Faster, secure, and SEO-friendly platforms designed to perform at scale.",
  },
  {
    icon: <Lightbulb size={48} />,
    title: "Tailored Business Solutions",
    description:
      "From corporate sites to e-commerce, we build what your business needs.",
  },
  {
    icon: <ChartLine size={48} />,
    title: "Scalable & Future-Ready",
    description:
      "Grow without limits with flexible, enterprise-grade technology.",
  },
];

export default function SupplyChain() {
  return (
    <section className="relative py-12 md:py-20 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-40 size-[35rem] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-teal-400/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 size-[40rem] rounded-full bg-gradient-to-tl from-blue-400/20 via-cyan-400/10 to-sky-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 text-xs md:text-sm shadow-sm backdrop-blur mb-4">
            <Rocket size={14} className="text-cyan-500" />
            Why Commeriva
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-gray-100 heroTitle mb-4">
            Boost your efficiency with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-300 dark:via-blue-300 dark:to-teal-300">
              Commeriva
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto poppins">
            Comprehensive solutions for modern businesses: from orders and tracking to metrics and monitoring—all in one platform.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Globe */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow behind globe - dark mode only */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 dark:from-cyan-500/20 dark:to-blue-500/20 blur-3xl rounded-full" />
              <Globe />
            </div>
          </motion.div>

          {/* Right: Features */}
          <div className="order-1 lg:order-2 space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative"
              >
                {/* Glow on hover - dark mode only */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 opacity-0 dark:group-hover:opacity-100 blur transition-opacity duration-300" />
                
                {/* Card */}
                <div className="relative rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6 hover:border-gray-300 dark:hover:border-white/20 transition-all">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 heroTitle">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed poppins">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

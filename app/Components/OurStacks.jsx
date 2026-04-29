"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OurStacks() {
  const techAndIntegrations = [
    { id: 1, name: "Next.js", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407699.png", x: "9%", y: "70%" },
    { id: 2, name: "React", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407992.png", x: "18%", y: "50%" },
    { id: 3, name: "Laravel", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407346.png", x: "40%", y: "82%" },
    { id: 4, name: "PHP", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407889.png", x: "55%", y: "82%" },
    { id: 5, name: "TypeScript", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407917.png", x: "74%", y: "73%" },
    { id: 6, name: "Python", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407597.png", x: "88%", y: "62%" },
    { id: 7, name: "AWS", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407935.png", x: "89%", y: "42%" },
    { id: 8, name: "MongoDB", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407771.png", x: "9%", y: "30%" },
    { id: 9, name: "PostgreSQL", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757407725.png", x: "23%", y: "20%" },
    { id: 10, name: "Tailwind", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", x: "70%", y: "18%" },
    { id: 11, name: "Flutter", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg", x: "80%", y: "55%" },
    { id: 12, name: "PayPal", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408583.png", x: "30%", y: "43%" },
    { id: 13, name: "Stripe", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408506.png", x: "18%", y: "63%" },
    { id: 14, name: "SSL Commerz", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408529.png", x: "8%", y: "46%" },
    { id: 15, name: "Razorpay", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408554.png", x: "56%", y: "63%" },
    { id: 16, name: "Pathao", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408642.png", x: "72%", y: "45%" },
    { id: 17, name: "DHL", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408610.png", x: "92%", y: "29%" },
    { id: 18, name: "FedEx", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408675.png", x: "95%", y: "50%" },
    { id: 19, name: "Steadfast", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408952.png", x: "46%", y: "30%" },
  ];

  const visibleLogos = techAndIntegrations;

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-slate-950">
      {/* Background gradient (CTA-style) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold poppins mb-4">
            Tech Stack & Integrations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white heroTitle">
            Technology Stack & Integrations
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto poppins">
            Powerful technologies, payment gateways, and courier integrations to run and scale your business.
          </p>
        </motion.div>

        {/* Desktop layout similar to reference */}
        <div className="hidden lg:block mx-auto max-w-6xl rounded-3xl border border-white/10 bg-black/20 backdrop-blur-sm shadow-2xl p-8">
          <div className="relative h-[540px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.2),transparent_36%),linear-gradient(to_bottom_right,#0b1022,#0d1228,#130a24)]">
            {visibleLogos.map((logo, i) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.02 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: logo.x, top: logo.y }}
              >
                <div className="group h-14 min-w-[80px] max-w-[140px] px-3 rounded-2xl bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.28)] flex items-center justify-center hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(59,130,246,0.35)] transition-all">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="max-h-9 max-w-full object-contain"
                  />
                </div>
              </motion.div>
            ))}

            {/* Center hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 p-[2px] shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                <div className="w-full h-full rounded-full bg-[#100a25] border border-white/10 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold poppins tracking-wide">
                    Commeriva
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet fallback grid */}
        <div className="lg:hidden mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl p-4 md:p-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {visibleLogos.map((logo, i) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.02 }}
                className="h-14 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center px-2"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-8 max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-3 mt-10"
        >
          <Link
            href="/integration"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold poppins transition-colors shadow-sm group bg-blue-600 hover:bg-blue-700 text-white"
          >
            Explore Integrations
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

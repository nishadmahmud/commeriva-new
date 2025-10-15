"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Zap,
  Gauge,
  Search,
  Workflow,
  Target,
  FlaskConical,
  Mail,
  CreditCard,
  BarChart3,
  Timer,
  Activity,
  TrendingUp,
  Users,
  DollarSign,
  ShieldCheck,
  Layers,
} from "lucide-react";

export default function LandingPage() {
  const [mouseGlow, setMouseGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouseGlow({ x, y });
  };

  const features = [
    { icon: Zap, title: "Conversion-Driven Design", desc: "Sleek, distraction-free layouts" },
    { icon: Gauge, title: "Lightning-Fast Performance", desc: "Mobile-first, optimized for speed" },
    { icon: Search, title: "SEO + Ad Optimized", desc: "Built for ads and organic reach" },
    { icon: Workflow, title: "Funnel Integration", desc: "Step-by-step guided journeys" },
    { icon: Target, title: "Compelling CTAs", desc: "Buttons and forms that convert" },
    { icon: FlaskConical, title: "A/B Testing Ready", desc: "Scale campaigns with variations" },
    { icon: Mail, title: "Lead Capture Tools", desc: "Forms, pop-ups and magnets" },
    { icon: CreditCard, title: "Payment Integration", desc: "Built-in checkout flows" },
    { icon: BarChart3, title: "Analytics & Tracking", desc: "Data-driven insights" },
    { icon: Timer, title: "Urgency Boosters", desc: "Timers and scarcity banners" },
  ];

  const whyItems = [
    { icon: Activity, title: "Faster load times", desc: "Lower bounce rates with optimized performance" },
    { icon: Target, title: "Optimized funnels", desc: "Guided journeys that convert better" },
    { icon: TrendingUp, title: "Smarter design", desc: "Clean UX that improves ad ROI" },
    { icon: Layers, title: "Scalable pages", desc: "Flexible for multi-campaign rollouts" },
  ];

  const winItems = [
    { icon: Users, title: "Drive more leads", desc: "Increase sign-ups and sales consistently" },
    { icon: DollarSign, title: "Maximize ROI", desc: "Better returns from every ad dollar" },
    { icon: BarChart3, title: "Grow with testing", desc: "Scalable and A/B testable funnels" },
    { icon: ShieldCheck, title: "Future-ready", desc: "Secure, lightweight and maintainable" },
  ];

  return (
    <main
      className="relative min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-gray-100 flex flex-col items-center px-4 md:px-6 py-16 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
      
      {/* Subtle mouse-follow neon glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(650px at ${mouseGlow.x}% ${mouseGlow.y}%, rgba(59,130,246,0.10), rgba(147,51,234,0.06) 40%, transparent 70%)`,
        }}
      />
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-3xl md:text-5xl heroTitle font-semibold text-center max-w-3xl mt-10"
      >
        High-Impact Landing Pages & Funnels
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 mt-6 text-lg md:text-xl text-center max-w-2xl text-gray-700 dark:text-gray-300"
      >
        <span className="font-medium text-gray-600 dark:text-gray-300 poppins italic">Turn Traffic into Sales – Smarter Funnels, Higher Conversions.</span>
      </motion.p>

      {/* Overview */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 mt-8 max-w-5xl text-center leading-relaxed text-base poppins md:text-lg text-gray-800 dark:text-gray-200"
      >
        Your landing page isn’t just a place to land—it’s the <span className="font-semibold">first step in your customer’s journey</span>. 
        At <span className="font-semibold">Commeriva</span>, we craft 
        <span className="font-semibold"> data-driven, Next.js-powered landing pages & sales funnels</span> designed to maximize conversions, 
        generate leads, and boost revenue. Whether it’s for an ad campaign, product launch, or lead magnet, 
        we build landing pages that <span className="italic">sell while you sleep</span>.
      </motion.p>

      {/* Features */}
      <section className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full poppins">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.05 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`relative p-5 border border-gray-300 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-2xl transition bg-white/80 dark:bg-neutral-900/60 text-gray-800 dark:text-gray-200 overflow-hidden ${idx === features.length - 1 ? 'lg:col-start-2' : ''}`}
          >
            <span className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue-500/5 dark:bg-blue-400/10 blur-2xl" />
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gray-900 text-white dark:bg-white/10 dark:text-gray-100 flex items-center justify-center flex-shrink-0">
                <f.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{f.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="relative z-10 max-w-7xl w-full mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Why Commeriva Works */}
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 shadow-sm">
            <h2 className="text-2xl md:text-3xl title font-semibold text-gray-900 dark:text-gray-100">Why Commeriva Landing Pages Work</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-900 text-white dark:bg-white/10 dark:text-gray-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Your Business Wins */}
          <div className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold title text-gray-900 dark:text-gray-100">Your Business Wins With Commeriva</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {winItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-900 text-white dark:bg-white/10 dark:text-gray-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

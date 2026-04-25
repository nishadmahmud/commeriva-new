"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WhatWeBring, FAQSection, CalendlyBooking } from "../Components/ServiceSections";
import {
  Smartphone,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Bell,
  Globe,
  Layers,
  Database,
  Palette,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Cross-Platform Apps",
    desc: "One codebase, two platforms. We build with Flutter for simultaneous iOS and Android deployment.",
  },
  {
    icon: Palette,
    title: "Custom UI/UX Design",
    desc: "Stunning app interfaces with smooth animations, intuitive navigation, and brand-consistent design.",
  },
  {
    icon: Zap,
    title: "Native Performance",
    desc: "Near-native speed and responsiveness. No compromises on animations, scrolling, or interactions.",
  },
  {
    icon: Database,
    title: "Backend Integration",
    desc: "RESTful APIs, Firebase, Supabase — we connect your app to the right backend for your needs.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    desc: "Keep users engaged with targeted push notifications, in-app messaging, and alerts.",
  },
  {
    icon: Shield,
    title: "Security First",
    desc: "Encrypted data, secure authentication, and compliance with app store requirements.",
  },
  {
    icon: Globe,
    title: "Offline Support",
    desc: "Core features work even without internet. Data syncs automatically when connection returns.",
  },
  {
    icon: Rocket,
    title: "App Store Deployment",
    desc: "We handle the full submission process for both Google Play Store and Apple App Store.",
  },
];

const techStack = [
  "Flutter & Dart",
  "Firebase / Supabase",
  "REST API Integration",
  "Push Notification Services",
  "Google Maps & Location",
  "Payment Gateway SDKs",
  "Analytics & Crash Reporting",
  "CI/CD Pipelines",
];

export default function MobileAppPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-semibold poppins mb-5">
              <Smartphone size={14} />
              Mobile App Development
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 heroTitle mb-5 leading-tight">
              Custom Mobile Apps
              <br />
              <span className="text-cyan-600">For iOS & Android</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto poppins mb-8">
              Flutter-powered mobile applications with native performance,
              beautiful UI, and seamless backend integration. One codebase, two
              platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
              >
                Discuss Your App
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-semibold poppins transition-colors hover:bg-gray-50"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 heroTitle">
              What We Deliver
            </h2>
            <p className="text-gray-500 mt-3 poppins">
              Enterprise-grade mobile solutions for growing businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-md hover:border-gray-300 transition-all hover:-translate-y-0.5 flex flex-col"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3 md:mb-4 shrink-0">
                  <f.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-1.5 poppins">
                  {f.title}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed poppins flex-grow">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900 heroTitle">
              Our Tech Stack
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-3">
            {techStack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100"
              >
                <CheckCircle size={16} className="text-cyan-500 shrink-0" />
                <span className="text-sm text-gray-700 poppins">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 heroTitle">
              Development Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Requirements, wireframes, and architecture planning.",
              },
              {
                step: "02",
                title: "Design",
                desc: "UI/UX mockups with Figma prototypes for your review.",
              },
              {
                step: "03",
                title: "Development",
                desc: "Flutter build with API integration and testing.",
              },
              {
                step: "04",
                title: "Launch",
                desc: "App store submission, monitoring, and post-launch support.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-900 text-white flex items-center justify-center text-xl font-bold heroTitle mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1 poppins">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 poppins">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatWeBring
        title="Here's What We Bring to the Table"
        subtitle="We build mobile apps that users love — beautiful, fast, and built to scale."
        tabs={[
          {
            label: "Flutter Development",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
            description: "We use Flutter to build beautiful, natively compiled apps for iOS and Android from a single codebase — saving time and cost.",
            points: [
              "<strong>One codebase</strong> – Write once, deploy to both iOS and Android.",
              "<strong>Native performance</strong> – Compiled to native ARM code for smooth 60fps animations.",
              "<strong>Hot reload</strong> – Instant development iterations for faster delivery.",
              "<strong>Custom widgets</strong> – Pixel-perfect UI that matches your brand.",
            ]
          },
          {
            label: "UI/UX Design",
            image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80",
            description: "App design that feels intuitive, looks premium, and keeps users coming back.",
            points: [
              "<strong>Figma prototypes</strong> – Interactive prototypes before we write a single line of code.",
              "<strong>User research</strong> – We study your users to design flows they'll love.",
              "<strong>Micro-animations</strong> – Subtle animations that make the app feel alive.",
            ]
          },
          {
            label: "Backend & API",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
            description: "Robust backend infrastructure that powers your app — authentication, database, cloud functions, and real-time sync.",
            points: [
              "<strong>Firebase / Supabase</strong> – Real-time database, auth, and cloud storage.",
              "<strong>REST APIs</strong> – Custom APIs for complex business logic.",
              "<strong>Push notifications</strong> – Targeted messaging to keep users engaged.",
            ]
          },
          {
            label: "App Store Launch",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
            description: "We handle the full submission process for both Google Play Store and Apple App Store — from screenshots to compliance.",
            points: [
              "<strong>Store listing</strong> – Professional screenshots, descriptions, and keywords.",
              "<strong>Review compliance</strong> – We ensure your app meets all store guidelines.",
              "<strong>Post-launch monitoring</strong> – Crash reporting, analytics, and performance tracking.",
            ]
          },
        ]}
      />

      {/* Calendly */}
      <CalendlyBooking />

      {/* FAQ */}
      <FAQSection
        serviceLabel="Mobile App Development"
        faqs={[
          { q: "Which platforms do you develop for?", a: "We build for both iOS and Android simultaneously using Flutter. One codebase, two platforms — saving you time and cost." },
          { q: "How long does it take to build a mobile app?", a: "A basic app takes 6–8 weeks. Complex apps with custom backends, payment integration, and real-time features may take 10–16 weeks." },
          { q: "Do you handle the app store submission?", a: "Yes. We handle the full submission process for both Google Play Store and Apple App Store, including screenshots, descriptions, and compliance." },
          { q: "Can the app work offline?", a: "Yes. We build core features to work offline with automatic data syncing when the connection returns." },
          { q: "Do you build the backend too?", a: "Absolutely. We set up Firebase, Supabase, or custom REST APIs depending on your app's needs — including authentication, database, and cloud functions." },
          { q: "What about maintenance after launch?", a: "We offer ongoing maintenance plans covering bug fixes, OS updates, new feature development, and performance monitoring." },
          { q: "Can you convert our existing website into an app?", a: "Yes. We can build a native mobile app that mirrors your web experience or create a companion app with specific mobile features." },
        ]}
      />

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 heroTitle mb-3">
            Have an App Idea?
          </h2>
          <p className="text-gray-500 poppins mb-6">
            Let&apos;s turn your concept into a polished, market-ready mobile
            app.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-7 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
          >
            Let&apos;s Talk
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

"use client";
import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const trustedLogos = [
  { name: "Gadget Bodda", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832351.jpg" },
  { name: "Mobile Club", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832398.jpg" },
  { name: "Satsuna", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834457.png" },
  { name: "CeL TeL", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834023.png" },
  { name: "Morshed Mart", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833877.png" },
  { name: "Elite", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833939.png" },
  { name: "Apple Newton", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834132.jpg" },
  { name: "EmusFashion", logo: "https://www.outletexpense.xyz/uploads/238-MD.-Sarawer-Jahan-Evan/1758168402.png" },
];

const HeroPage = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold poppins mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Trusted by 100+ businesses in Bangladesh
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] text-gray-900 heroTitle mt-4"
        >
          We Build Websites That{" "}
          <span className="gradient-brand-text">
            Grow Your Business
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto poppins leading-relaxed"
        >
          Conversion-focused websites and mobile apps for e-commerce,
          corporate, and portfolio brands. Fast, SEO-ready, and built to scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform"
          >
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full text-sm poppins cursor-pointer transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
              Get Started
              <ArrowRight size={16} />
            </button>
          </Link>

          <Link href="/portfolio">
            <button className="border border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-400 font-medium px-6 py-3 rounded-full text-sm poppins cursor-pointer transition-all bg-white flex items-center gap-2 shadow-sm">
              <MessageCircle size={16} />
              View Our Work
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Trusted By Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="border-t border-gray-100 bg-gray-50/50 py-8"
      >
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5 poppins">
          Trusted by leading brands
        </p>
        <Marquee
          speed={35}
          gradient={false}
        >
          {[...trustedLogos, ...trustedLogos, ...trustedLogos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 w-12 h-12 flex items-center justify-center"
            >
              <Image
                unoptimized
                src={logo.logo}
                alt={logo.name}
                width={48}
                height={48}
                className="w-10 h-10 object-contain rounded-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default HeroPage;

"use client";
import React from "react";
import { ArrowRight, Play, Monitor } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const trustedLogos = [
  { name: "Applex", logo: "https://www.applex.com.bd/favicon.ico" },
  { name: "Cellfix BD", logo: "https://www.cellfixbd.com/favicon.ico" },
  { name: "Celltech BD", logo: "https://www.celltechbd.com.bd/favicon.ico" },
  { name: "Pochondo Shop", logo: "https://pochondoshop.com/favicon.ico" },
  { name: "Tarunya", logo: "https://www.tarunyaprokashon.com/favicon.ico" },
  { name: "Allion", logo: "https://www.google.com/s2/favicons?domain=allion-appliance.com&sz=128" },
  { name: "Dizmo", logo: "https://www.dizmo.com.bd/favicon.ico" },
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
  const row1 = trustedLogos.slice(0, 7);
  const row2 = trustedLogos.slice(7);

  return (
    <div className="relative">
      {/* Top Dark Section */}
      <section className="relative bg-[#050616] pt-24 md:pt-32 pb-20 md:pb-[420px] overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[80%] bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[70%] bg-purple-600/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight heroTitle"
            >
              Build & Scale Your eCommerce
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                with Commeriva
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-sm md:text-xl mb-10 max-w-2xl md:max-w-3xl mx-auto poppins leading-relaxed px-2 md:px-0"
            >
              Commeriva makes it simple to launch and scale your eCommerce business from a 
              single-vendor shop to a robust enterprise-grade marketplace.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-row justify-center items-center gap-3 md:gap-4 mb-20 px-2"
            >
              <Link href="/contact-us" className="w-1/2 md:w-auto">
                <button className="w-full bg-[#ff5c00] hover:bg-[#e65300] text-white font-bold px-4 md:px-8 py-3 md:py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(255,92,0,0.3)] flex items-center justify-center gap-2 text-xs md:text-base poppins whitespace-nowrap">
                  Get Started
                  <ArrowRight size={16} className="hidden md:block" />
                </button>
              </Link>
              <Link href="/pricing" className="w-1/2 md:w-auto">
                <button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold px-4 md:px-8 py-3 md:py-4 rounded-xl border border-blue-500/30 transition-all flex items-center justify-center gap-2 text-xs md:text-base poppins shadow-[0_0_15px_rgba(59,130,246,0.1)] whitespace-nowrap">
                  <Monitor size={16} className="hidden md:block" />
                  Book a demo
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom White Section */}
      <section className="bg-white pt-20 md:pt-32 pb-16 md:pb-24 relative min-h-[300px] md:min-h-[400px]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative">
          
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute left-1/2 -translate-x-1/2 -top-[220px] md:-top-[550px] w-full z-30 group px-2 md:px-0"
          >
            <div className="bg-[#111222] rounded-[1rem] md:rounded-[2rem] p-1.5 md:p-3 border border-gray-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] relative">
              
              {/* Floating Cards */}
              <div className="absolute -top-16 md:-top-32 left-[4%] md:left-[8%] z-50 hidden sm:block">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="relative scale-75 md:scale-100 origin-bottom-left"
                >
                  <div className="bg-[#131426]/95 backdrop-blur-xl border border-white/10 p-5 md:p-7 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden min-w-[150px] md:min-w-[180px]">
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-orange-500/20 blur-2xl rounded-full" />
                    <div className="text-orange-500 font-bold text-xl md:text-2xl mb-1 md:mb-2 heroTitle">100+</div>
                    <div className="text-white text-[10px] md:text-sm poppins font-medium leading-tight">
                      Enterprise-ready<br/>features
                    </div>
                  </div>
                  <div className="absolute top-[90%] left-1/2 -translate-x-1/2 text-orange-500 pointer-events-none">
                    <svg width="30" height="50" viewBox="0 0 40 60" fill="none" className="md:w-[40px] md:h-[60px]">
                      <path d="M20 5C20 20 35 30 35 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" className="opacity-40" />
                      <path d="M30 50L35 55L40 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              <div className="absolute -top-20 md:-top-40 right-[4%] md:right-[8%] z-50 hidden sm:block">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="relative scale-75 md:scale-100 origin-bottom-right"
                >
                  <div className="bg-[#131426]/95 backdrop-blur-xl border border-white/10 p-5 md:p-7 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden min-w-[150px] md:min-w-[180px]">
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500/20 blur-2xl rounded-full" />
                    <div className="text-blue-400 font-bold text-xl md:text-2xl mb-1 md:mb-2 heroTitle">150+</div>
                    <div className="text-white text-[10px] md:text-sm poppins font-medium leading-tight">
                      Scalable cloud<br/>solutions
                    </div>
                  </div>
                  <div className="absolute top-[90%] left-1/2 -translate-x-1/2 text-blue-400 pointer-events-none">
                    <svg width="30" height="70" viewBox="0 0 40 80" fill="none" className="md:w-[40px] md:h-[80px]">
                      <path d="M20 5C20 30 5 40 5 75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" className="opacity-40" />
                      <path d="M0 70L5 75L10 70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Browser Header */}
              <div className="bg-[#1a1b2e] rounded-t-[0.8rem] md:rounded-t-[1.8rem] px-2 md:px-4 py-1.5 md:py-3 flex items-center gap-2 mb-0.5 md:mb-1 border-b border-gray-800">
                <div className="flex gap-1 md:gap-1.5">
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 max-w-[120px] md:max-w-md mx-auto h-3 md:h-6 bg-[#050616] rounded-sm md:rounded-lg border border-gray-800 flex items-center px-1.5 md:px-3 text-[6px] md:text-[10px] text-gray-500 poppins">
                  www.commeriva.com
                </div>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-[0.8rem] md:rounded-b-[1.8rem] bg-[#050616]">
                <Image
                  src="/features/dashboard.png"
                  alt="Commeriva Dashboard"
                  width={1200}
                  height={750}
                  className="w-full h-full object-cover object-top opacity-95 group-hover:scale-[1.01] transition-transform duration-700"
                  unoptimized
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 md:w-20 md:h-20 bg-orange-500 text-white rounded-lg md:rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer border-2 md:border-4 border-white/20 backdrop-blur-sm"
                  >
                    <Play size={16} fill="currentColor" className="md:hidden" />
                    <Play size={32} fill="currentColor" className="hidden md:block" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Spacer to push content below the mockup */}
          <div className="h-[150px] md:h-[250px]" />

          {/* Trusted By Marquee */}
          <div className="mt-8 md:mt-12">
            <p className="text-center text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6 md:mb-8 poppins">
              Trusted by leading brands
            </p>
            
            <div className="space-y-3 md:space-y-4">
              <div className="overflow-hidden py-1 md:py-2">
                <Marquee speed={25} gradient={true} gradientColor="#ffffff" gradientWidth={50}>
                  {[...row1, ...row1].map((logo, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 bg-white border border-gray-100 px-3 md:px-5 py-2.5 md:py-4 rounded-lg md:rounded-xl shadow-sm mx-2 md:mx-4"
                    >
                      <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center shrink-0">
                        <Image
                          unoptimized
                          src={logo.logo}
                          alt={logo.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] md:text-sm font-bold text-gray-800 poppins whitespace-nowrap">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </Marquee>
              </div>

              <div className="overflow-hidden py-1 md:py-2">
                <Marquee speed={25} gradient={true} gradientColor="#ffffff" gradientWidth={50} direction="right">
                  {[...row2, ...row2].map((logo, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 md:gap-3 bg-white border border-gray-100 px-3 md:px-5 py-2.5 md:py-4 rounded-lg md:rounded-xl shadow-sm mx-2 md:mx-4"
                    >
                      <div className="w-5 h-5 md:w-8 md:h-8 flex items-center justify-center shrink-0">
                        <Image
                          unoptimized
                          src={logo.logo}
                          alt={logo.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] md:text-sm font-bold text-gray-800 poppins whitespace-nowrap">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;

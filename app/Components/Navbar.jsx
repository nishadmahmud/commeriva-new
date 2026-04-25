"use client";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const pathname = usePathname();

  const services = [
    {
      name: "E-Commerce Website",
      href: "/ecommerce-website",
      description: "Custom online stores designed to sell smarter",
      icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408131.png",
    },
    {
      name: "Corporate Website",
      href: "/corporate-website",
      description: "Professional sites that build trust and credibility",
      icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408148.png",
    },
    {
      name: "Landing Page / Funnel",
      href: "/landing-page",
      description: "High-conversion pages for campaigns and launches",
      icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408187.png",
    },
    {
      name: "Portfolio & Personal Branding",
      href: "/portfolio-website",
      description: "Showcase your talent with style",
      icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408169.png",
    },
    {
      name: "Custom Mobile App",
      href: "/mobile-app",
      description: "Flutter & Native apps for iOS and Android",
      icon: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408131.png",
    },
  ];

  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Integration", href: "/integration" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about-us" },
    { name: "Blog", href: "/blogs" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const isServiceActive = services.some((s) =>
    pathname?.startsWith(s.href.split("?")[0])
  );

  const toggleMobileSubmenu = () => {
    setMobileActiveMenu(mobileActiveMenu === "services" ? null : "services");
  };

  return (
    <div className="pb-[72px]">
      <nav className="bg-white fixed top-0 w-full z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight poppins cursor-pointer hover:opacity-80 transition-opacity"
          >
            Commeriva
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActive("services")}
              onMouseLeave={() => setActive(null)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer poppins ${
                  isServiceActive
                    ? "text-blue-700 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    active === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {active === "services" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50">
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white border border-gray-200 shadow-xl rounded-2xl p-3 w-[420px]"
                    >
                      {services.map((service, i) => (
                        <Link
                          key={i}
                          href={service.href}
                          className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <div className="p-2 border border-gray-100 rounded-xl bg-gray-50 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors mt-0.5">
                            <Image
                              alt={service.name}
                              unoptimized
                              width={200}
                              height={200}
                              className="w-6 h-6 object-contain"
                              src={service.icon}
                            />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                              {service.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors poppins ${
                  isActive(link.href)
                    ? "text-blue-700 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform"
              target="_blank"
            >
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm poppins cursor-pointer transition-colors shadow-sm hover:shadow-md flex items-center gap-2">
                Get a Free Consultation
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="https://wa.me/+8801886182084"
              target="_blank"
              className="px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-semibold poppins shadow-sm"
            >
              Let's Talk
            </Link>
            {!mobileMenuOpen && (
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-700 cursor-pointer"
              >
                <Menu size={24} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 h-screen bg-black/30 z-[9998]"
              />

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 h-screen w-72 bg-white border-r border-gray-200 shadow-2xl z-[9999]"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-extrabold text-gray-900 poppins"
                    >
                      Commeriva
                    </Link>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-gray-500 hover:text-gray-800 p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-2">
                    {/* Services Accordion */}
                    <div>
                      <button
                        onClick={toggleMobileSubmenu}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left poppins text-sm rounded-xl transition-all cursor-pointer ${
                          isServiceActive
                            ? "bg-gray-100 text-gray-900 font-semibold"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        <span>Services</span>
                        <motion.div
                          animate={{
                            rotate:
                              mobileActiveMenu === "services" ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={15} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {mobileActiveMenu === "services" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-2 space-y-1.5 pt-2 pb-1">
                              {services.map((service, i) => (
                                <Link
                                  key={i}
                                  href={service.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors poppins"
                                >
                                  <div className="p-1.5 border border-gray-100 rounded-lg bg-gray-50">
                                    <Image
                                      alt={service.name}
                                      unoptimized
                                      width={200}
                                      height={200}
                                      className="w-5 h-5 object-contain"
                                      src={service.icon}
                                    />
                                  </div>
                                  <span className="text-xs font-medium">
                                    {service.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Other Links */}
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 text-sm rounded-xl transition-all poppins ${
                          isActive(link.href)
                            ? "bg-gray-100 text-gray-900 font-semibold"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}

                    {/* Pricing */}
                    <Link
                      href="/pricing"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-sm rounded-xl transition-all poppins ${
                        isActive("/pricing")
                          ? "bg-gray-100 text-gray-900 font-semibold"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      Pricing
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;

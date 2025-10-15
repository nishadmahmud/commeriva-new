import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MailCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-black border-t border-gray-200 dark:border-white/10 md:pt-16 pt-10 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-teal-500/20 dark:bg-teal-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* soft glow border */}
      <div className="pointer-events-none absolute -top-10 left-0 right-0 h-10 bg-gradient-to-b from-white dark:from-neutral-950 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Logo and Locations */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-cyan-100 dark:to-white bg-clip-text text-transparent mb-3 logoFont">
                Commeriva
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300/90 max-w-md leading-relaxed">
                Smart, secure and scalable web solutions for modern businesses.
              </p>
            </div>

            {/* Subscription Part */}
            <div className="w-sm relative z-10">
              <h3 className="font-semibold md:text-xl text-lg mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-cyan-200 dark:to-blue-200 bg-clip-text text-transparent poppins">
                Stay in the loop
              </h3>

              <div>
                <div className="relative group">
                  <div className="flex md:gap-3 gap-2 poppins">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="md:flex-1 px-5 py-3 text-sm rounded-full border border-gray-300 dark:border-white/20 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 md:w-full w-[60vw] bg-white/80 dark:bg-white/5 backdrop-blur-sm dark:text-gray-100 text-gray-900 placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all"
                    />
                    <button className="relative bg-gradient-to-r from-gray-900 to-gray-700 dark:from-cyan-500 dark:to-blue-500 rounded-full text-white md:px-6 px-5 py-2.5 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/40 cursor-pointer text-sm md:text-base transition-all duration-300 group/btn overflow-hidden">
                      <span className="relative z-10 flex items-center gap-1.5">
                        Subscribe
                        <ArrowRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 dark:group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>

                <p className="text-xs mt-3 text-gray-500 dark:text-gray-400">
                  By subscribing you agree to our Terms & Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="poppins relative z-10">
            <h3 className="font-semibold text-gray-900 dark:text-cyan-300 mb-5 text-sm tracking-widest">COMPANY</h3>
            <ul className="space-y-3">
              <li className="group">
                <Link
                  href="/about-us"
                  className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 transition-all duration-200" />
                  About us
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/contact-us"
                  className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 transition-all duration-200" />
                  Contact us
                </Link>
              </li>
              <li className="group">
                <Link
                  href="privacy-policy"
                  className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 transition-all duration-200" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Solution Links */}
          <div className="poppins relative z-10">
            <h3 className="font-semibold text-gray-900 dark:text-cyan-300 mb-5 text-sm tracking-widest">PRODUCTS</h3>
            <ul className="space-y-3">
              <li className="group">
                <Link
                  href="why-nextjs"
                  className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 transition-all duration-200" />
                  E‑commerce Website
                </Link>
              </li>
              <li className="group">
                <Link
                  href="corporate-website"
                  className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 transition-all duration-200" />
                  Corporate Website
                </Link>
              </li>
              <li className="group">
                <Link
                  href="portfolio-website"
                  className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-cyan-400 transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 transition-all duration-200" />
                  Portfolio Website
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="poppins relative z-10">
            <h3 className="font-semibold text-gray-900 dark:text-cyan-300 mb-5 text-sm tracking-widest">CONTACT</h3>
            <div className="mb-4 flex items-center gap-3 text-gray-700 dark:text-gray-300 group hover:text-gray-900 dark:hover:text-cyan-400 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 dark:group-hover:border-cyan-500/30 transition-all">
                <Phone size={15} className="dark:group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-sm">+8801886182084</p>
            </div>
            <div className="mb-6 flex items-center gap-3 text-gray-700 dark:text-gray-300 group hover:text-gray-900 dark:hover:text-cyan-400 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 dark:group-hover:border-cyan-500/30 transition-all">
                <Mail size={15} className="dark:group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-sm">info@commeriva.com</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-4 text-sm">Follow us</h4>
              <div className="flex space-x-3">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61579322220482"
                  className="relative w-10 h-10 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center hover:bg-gray-50 dark:hover:bg-cyan-500/10 hover:border-gray-300 dark:hover:border-cyan-500/30 transition-all duration-300 group/social shadow-sm hover:shadow-cyan-500/10"
                >
                  <Facebook size={18} className="text-gray-600 dark:text-gray-300 dark:group-hover/social:text-cyan-400 transition-colors" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/commeriva"
                  target="_blank"
                  className="relative w-10 h-10 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center hover:bg-gray-50 dark:hover:bg-cyan-500/10 hover:border-gray-300 dark:hover:border-cyan-500/30 transition-all duration-300 group/social shadow-sm hover:shadow-cyan-500/10"
                >
                  <Linkedin size={18} className="text-gray-600 dark:text-gray-300 dark:group-hover/social:text-cyan-400 transition-colors" />
                </Link>
                <a
                  href="#"
                  className="relative w-10 h-10 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center hover:bg-gray-50 dark:hover:bg-cyan-500/10 hover:border-gray-300 dark:hover:border-cyan-500/30 transition-all duration-300 group/social shadow-sm hover:shadow-cyan-500/10"
                >
                  <Instagram size={18} className="text-gray-600 dark:text-gray-300 dark:group-hover/social:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-10 mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm poppins">
              © 2025 <span className="font-medium text-gray-800 dark:text-gray-200">Commeriva Automation Inc.</span> All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-sm text-gray-600 dark:text-gray-400 poppins">
              <Link href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-cyan-400 transition-colors duration-200">Privacy</Link>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <Link href="/about-us" className="hover:text-gray-900 dark:hover:text-cyan-400 transition-colors duration-200">About</Link>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <Link href="/contact-us" className="hover:text-gray-900 dark:hover:text-cyan-400 transition-colors duration-200">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

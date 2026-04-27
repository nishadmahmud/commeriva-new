import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 poppins tracking-tight mb-3">
                Commeriva
              </h2>
              <p className="text-sm text-gray-500 max-w-sm leading-relaxed poppins">
                Smart, secure, and scalable web & app solutions for modern businesses.
                We help brands grow through cutting-edge digital products.
              </p>
            </div>

            {/* Newsletter */}
            <div className="max-w-sm">
              <h3 className="font-semibold text-gray-900 text-sm mb-3 poppins">
                Stay in the loop
              </h3>
              <div className="flex gap-2 poppins">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 text-sm rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white text-gray-900 placeholder:text-gray-400 transition-all"
                />
                <button className="bg-orange-600 hover:bg-orange-700 rounded-full text-white px-5 py-2.5 text-sm font-medium transition-colors cursor-pointer shadow-sm flex items-center gap-1.5">
                  Subscribe
                  <ArrowRight size={14} />
                </button>
              </div>
              <p className="text-xs mt-2 text-gray-400 poppins">
                By subscribing you agree to our Terms & Privacy Policy.
              </p>
            </div>
          </div>

          {/* Services Links */}
          <div className="poppins">
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "E-Commerce Website", href: "/ecommerce-website" },
                { name: "Corporate Website", href: "/corporate-website" },
                { name: "Landing Page / Funnel", href: "/landing-page" },
                { name: "Portfolio Website", href: "/portfolio-website" },
                { name: "Custom Mobile App", href: "/mobile-app" },
                { name: "Custom Software Development", href: "/custom-software" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="poppins">
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Blog", href: "/blogs" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "Privacy Policy", href: "/privacy-policy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-blue-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="poppins">
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-500 group hover:text-gray-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                  <Phone size={14} />
                </div>
                <p className="text-sm">+8801886182084</p>
              </div>
              <div className="flex items-center gap-3 text-gray-500 group hover:text-gray-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-all">
                  <Mail size={14} />
                </div>
                <p className="text-sm">info@commeriva.com</p>
              </div>
            </div>

            {/* Social */}
            <h4 className="font-medium text-gray-900 mb-3 text-sm">Follow us</h4>
            <div className="flex gap-2">
              {[
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579322220482" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/commeriva" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  target="_blank"
                  href={href}
                  className="w-9 h-9 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 text-gray-500 transition-all"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm poppins">
              © 2025{" "}
              <span className="font-medium text-gray-600">
                Commeriva Automation Inc.
              </span>{" "}
              All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 poppins">
              <Link href="/privacy-policy" className="hover:text-gray-700 transition-colors">
                Privacy
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/about-us" className="hover:text-gray-700 transition-colors">
                About
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/contact-us" className="hover:text-gray-700 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

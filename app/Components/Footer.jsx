import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  X,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const services = [
    { name: "E-Commerce Website", href: "/ecommerce-website" },
    { name: "Corporate Website", href: "/corporate-website" },
    { name: "Landing Page / Funnel", href: "/landing-page" },
    { name: "Portfolio Website", href: "/portfolio-website" },
    { name: "Custom Mobile App", href: "/mobile-app" },
    { name: "Custom Software Development", href: "/custom-software" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const collaborationModels = [
    { name: "Team Augmentation", href: "/integration" },
    { name: "Offshore Development", href: "/integration" },
    { name: "MVP Service", href: "/integration" },
    { name: "End to End Development", href: "/custom-software" },
  ];

  const forHiring = [
    { name: "Hire Developers", href: "/contact-us" },
    { name: "JavaScript Developers", href: "/contact-us" },
    { name: "Python Developers", href: "/contact-us" },
    { name: "Java Developers", href: "/contact-us" },
    { name: "Golang Developers", href: "/contact-us" },
    { name: ".NET Developers", href: "/contact-us" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand + Contact */}
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

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <p className="text-sm">+8801886182084</p>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <Mail size={14} />
                </div>
                <p className="text-sm">info@commeriva.com</p>
              </div>
            </div>

          </div>

          {/* Services Links */}
          <div className="poppins">
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((link) => (
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
              {companyLinks.map((link) => (
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

          {/* Collaboration Models */}
          <div className="poppins">
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Collaboration Models
            </h3>
            <ul className="space-y-2.5">
              {collaborationModels.map((link) => (
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
        </div>

        {/* Same-row section: Memberships + For Hiring + Awards */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 items-start">
            {/* Memberships */}
            <div className="min-h-[120px] lg:col-span-2">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                Memberships
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white border border-gray-200 rounded-2xl px-3 py-3 shadow-sm flex flex-col items-center text-center">
                  <div className="w-24 h-12 relative mb-1">
                    <Image
                      src="/awards/basis-member.png"
                      alt="BASiS member"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[12px] font-semibold text-gray-900">
                    BASiS Member
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    ANRA Basis
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl px-3 py-3 shadow-sm flex flex-col items-center text-center">
                  <div className="w-24 h-12 relative mb-1">
                    <Image
                      src="/awards/nbr-enlisted.png"
                      alt="NBR enlisted"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[12px] font-semibold text-gray-900">
                    NBR Enlisted
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    NBR Registration
                  </p>
                </div>
              </div>

              {/* Smart Asia Awards (under memberships) */}
              <div className="mt-3 rounded-2xl border border-gray-200 bg-gray-50 p-2 w-full min-h-[90px]">
                <h4 className="text-[12px] font-semibold text-gray-900 mb-1 uppercase tracking-wider">
                  Smart Asia Awards
                </h4>
                <a
                  href="https://www.bssnews.net/business/209316"
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-xl border border-gray-200 bg-white p-2 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 font-bold">
                      ★
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900">
                        Smart Asia App Awards 2024
                      </p>
                      <p className="text-[11px] text-gray-500 group-hover:text-gray-700 leading-snug">
                        Official recognition listing
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* For Hiring (Career) */}
            <div className="poppins">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                For Hiring
              </h4>
              <ul className="space-y-1.5">
                {forHiring.map((link) => (
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

            {/* Spacer: keeps Follow us in the far-right column */}
            <div className="hidden lg:block" aria-hidden="true" />

            {/* Follow us (right side of career column) */}
            <div className="poppins">
              <h4 className="font-medium text-gray-900 mb-3 text-sm">Follow us</h4>
              <div className="flex gap-2">
                {[
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/profile.php?id=61579322220482",
                    colorClass: "text-blue-600",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/company/commeriva",
                    colorClass: "text-blue-700",
                  },
                  { icon: Instagram, href: "#", colorClass: "text-pink-600" },
                  { icon: Youtube, href: "#", colorClass: "text-red-600" },
                  { icon: X, href: "#", colorClass: "text-black" },
                ].map(({ icon: Icon, href, colorClass }, i) => (
                  <Link
                    key={i}
                    target="_blank"
                    href={href}
                    className={`w-9 h-9 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center ${colorClass} transition-all hover:bg-gray-200`}
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-sm poppins">
              © 2025{" "}
              <span className="font-medium text-gray-600">
                Commeriva Automation Inc.
              </span>{" "}
              All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-400 poppins">
              <Link
                href="/privacy-policy"
                className="hover:text-gray-700 transition-colors"
              >
                Privacy
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/about-us"
                className="hover:text-gray-700 transition-colors"
              >
                About
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/contact-us"
                className="hover:text-gray-700 transition-colors"
              >
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

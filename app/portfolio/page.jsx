"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Eye, ExternalLink, ArrowRight } from "lucide-react";

const ProjectLogo = ({ src, alt, size = 32 }) => {
  const [error, setError] = useState(false);
  const letter = alt ? alt.charAt(0).toUpperCase() : "?";

  if (error || !src) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full border border-gray-200 bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold shrink-0"
      >
        {letter}
      </div>
    );
  }

  return (
    <Image
      unoptimized
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full border border-gray-200 object-cover shrink-0"
      onError={() => setError(true)}
    />
  );
};

const ProjectImage = ({ src, alt }) => {
  const [error, setError] = useState(false);
  const letter = alt ? alt.charAt(0).toUpperCase() : "?";

  if (error || !src) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-5xl font-bold text-gray-300">{letter}</span>
      </div>
    );
  }

  return (
    <Image
      unoptimized
      src={src}
      alt={alt}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      onError={() => setError(true)}
    />
  );
};

const projects = [
  // Electronics & Gadgets
  { id: 101, category: "Electronics & Gadgets", title: "Dizmo", logo: "https://www.dizmo.com.bd/favicon.ico", image: "/dizmo-ss.png", description: "Shop the latest smartphones, laptops, tablets & gadgets with authentic warranty at Dizmo Bangladesh.", liveLink: "https://www.dizmo.com.bd/", technologies: ["Next.js", "Tailwind"] },
  { id: 1, category: "Electronics & Gadgets", title: "Gadget Bodda", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832351.jpg", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409080.png", description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.", liveLink: "https://www.gadgetboddaa.com/", technologies: ["Next.js", "React", "Laravel"] },
  { id: 2, category: "Electronics & Gadgets", title: "Mobile Club", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832398.jpg", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409274.png", description: "Mobile Club is a famous shop in Jamuna Future Park selling used iPhones and gadget accessories.", liveLink: "https://www.mobileclub.co/", technologies: ["Next.js", "Firebase", "Gsap"] },
  { id: 4, category: "Electronics & Gadgets", title: "CeL TeL", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834023.png", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409240.png", description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.", liveLink: "https://www.celtelbd.com/", technologies: ["Next.js", "API Integration", "Tailwind"] },
  { id: 6, category: "Electronics & Gadgets", title: "Elite", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833939.png", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409329.png", description: "Elite is a quality laptop seller offering many 2nd hand and new laptops.", liveLink: "https://www.eliteebd.com/", technologies: ["HTML", "CSS", "JavaScript"] },
  { id: 7, category: "Electronics & Gadgets", title: "Apple Newton BD", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834132.jpg", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409124.png", description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.", liveLink: "https://applenewtonbd.com/", technologies: ["React", "Express", "MySQL"] },
  { id: 8, category: "Electronics & Gadgets", title: "Shahensha Gadget", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834292.png", image: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834221.png", description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.", liveLink: "https://shahenshahgadgets.com", technologies: ["React", "Express", "MySQL"] },
  { id: 9, category: "Electronics & Gadgets", title: "Apple Mart BD", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834693.png", image: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834622.png", description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.", liveLink: "https://www.applemart.bd", technologies: ["React", "Express", "MySQL"] },
  { id: 11, category: "Electronics & Gadgets", title: "Brothers Mobile & Accessories", logo: "https://www.brothersmobilebd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload__4_-removebg-preview-removebg-preview%20(1).4b6af063.png&w=256&q=75&dpl=dpl_cxXAviRRxxRvewfH55T3iWYJzGet", image: "/Brothers Mobile & Accessories.png", description: "Retail experience for smartphones and accessories with clear product taxonomy, warranty info, and mobile-first performance.", liveLink: "https://www.brothersmobilebd.com/", technologies: ["Next.js", "Tailwind", "SWR"] },
  { id: 14, category: "Electronics & Gadgets", title: "Apple Daddy", logo: "https://www.appledaddybd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.a0e81e1a.png&w=384&q=75&dpl=dpl_imvdJGmx7Rx6G9viBLLycAbU1M3f", image: "/Apple Daddy.png", description: "Apple-focused retailer site featuring product comparisons, EMI details, and conversion-optimized PDP and cart flow.", liveLink: "https://www.appledaddybd.com/", technologies: ["Next.js", "Tailwind", "SWR"] },
  { id: 15, category: "Electronics & Gadgets", title: "Perfect Gadget BD", logo: "https://www.perfectgadgetbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPerfectGadgetBD-logo%20(1)%201.953d5536.png&w=128&q=75&dpl=dpl_Gnozm5sN5kDuE9hYgX68JMzafQty", image: "/Perfect Gadget BD.png", description: "Electronics and gadget storefront with fast catalog browsing, detailed specs, and secure checkout.", liveLink: "https://perfectgadgetbd.com/", technologies: ["Next.js", "Tailwind", "Framer Motion"] },
  { id: 17, category: "Electronics & Gadgets", title: "PixelBD", logo: "https://www.gpixelbd.com/_next/image?url=https%3A%2F%2Fwww.outletexpense.xyz%2Fuploads%2F259-Shydul-Amir-Jihad%2F1761213710.png&w=96&q=75&dpl=dpl_DPrkuwpkUuyT8fShzus8ps3JWz1D", image: "/PixelBD.png", description: "A focused mobile-tech storefront in Bangladesh offering the latest smartphones, accessories and wearable devices.", liveLink: "https://www.pixelbd.com.bd", technologies: ["Next.js", "Tailwind", "Framer Motion"] },
  { id: 20, category: "Electronics & Gadgets", title: "Apple Dream BD", logo: "https://appledreambd.com/logo.png", image: "/Apple Dream BD.png", description: "A dedicated Apple-ecosystem retailer offering the latest iPhones, iPads and accessories with authentic products.", liveLink: "https://appledreambd.com/", technologies: ["Next.js", "Tailwind", "Framer Motion"] },
  { id: 21, category: "Electronics & Gadgets", title: "Apple Nation BD", logo: "https://www.applenationbd.com/logo.png", image: "/Apple Nation BD.png", description: "A premier destination for Apple products in Bangladesh, featuring a wide range of iPhones, MacBooks, and accessories.", liveLink: "https://applenationbd.com/", technologies: ["Next.js", "Tailwind", "Framer Motion"] },
  { id: 23, category: "Electronics & Gadgets", title: "Applex", logo: "https://www.applex.com.bd/favicon.ico", image: "/applex.png", description: "Premium electronics and gadgets store in Bangladesh offering the latest technology and devices.", liveLink: "https://www.applex.com.bd", technologies: ["Next.js", "Tailwind"] },
  { id: 27, category: "Electronics & Gadgets", title: "Cellfix BD", logo: "https://www.cellfixbd.com/favicon.ico", image: "/cellfix.png", description: "Trusted electronics and mobile solutions offering the latest smartphones and repair services.", liveLink: "https://www.cellfixbd.com/", technologies: ["Next.js", "Tailwind"] },
  { id: 28, category: "Electronics & Gadgets", title: "Celltech BD", logo: "https://www.celltechbd.com.bd/favicon.ico", image: "/celltech.png", description: "Your reliable source for the latest electronics, mobile devices, and premium accessories.", liveLink: "https://www.celltechbd.com.bd/", technologies: ["Next.js", "Tailwind"] },
  { id: 29, category: "Electronics & Gadgets", title: "Pochondo Shop", logo: "https://pochondoshop.com/favicon.ico", image: "/pochondoshop.png", description: "An exclusive online electronics shop featuring the latest gadgets and smart devices.", liveLink: "https://pochondoshop.com/", technologies: ["Next.js", "Tailwind"] },

  // Fashion & Clothing
  { id: 5, category: "Fashion & Clothing", title: "Morshed Mart", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833877.png", image: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833724.png", description: "Morshed Mart is a fashion e-commerce store selling T-shirts and branded shirts.", liveLink: "https://www.morshedmart.com/", technologies: ["Next.js", "MySQL"] },
  { id: 10, category: "Fashion & Clothing", title: "EmusFashion", logo: "https://www.outletexpense.xyz/uploads/238-MD.-Sarawer-Jahan-Evan/1758168402.png", image: "/EmusFashion.png", description: "Modern fashion e-commerce with curated categories, fast product discovery, and a streamlined checkout.", liveLink: "https://emusfashion.com/", technologies: ["Next.js", "Tailwind", "Framer Motion"] },
  { id: 18, category: "Fashion & Clothing", title: "MKS Outfit", logo: "https://www.outletexpense.xyz/uploads/215-Rifat-Hasan/1762859683.png", image: "/MKS Outfit.png", description: "A fashion-ecommerce destination offering curated apparel and accessories with stylish seasonal collections.", liveLink: "https://www.mksoutfit.com/", technologies: ["Next.js", "Tailwind", "Framer Motion"] },
  { id: 22, category: "Fashion & Clothing", title: "Brand Empire", logo: "https://www.brandempirebd.com/logo.png?dpl=dpl_H97nuooTcSkzyC8vR8MR9e4Kk3gv", image: "/Brand Empire.png", description: "A premium clothing brand for men and women in Bangladesh, featuring a wide range of clothing and accessories.", liveLink: "https://www.brandempirebd.com/", technologies: ["Next.js", "Tailwind", "Framer Motion"] },

  // Home & Living
  { id: 103, category: "Home & Living", title: "Allion", logo: "https://www.google.com/s2/favicons?domain=allion-appliance.com&sz=128", image: "/allion-ss.png", description: "Premium kitchen appliances and home essentials.", liveLink: "https://www.allion-appliance.com/", technologies: ["Next.js", "Tailwind"] },
  { id: 24, category: "Home & Living", title: "Verona Plus", logo: "https://verona-plus.com/favicon.ico", image: "", description: "Your ultimate destination for quality home appliances, essentials, and premium lifestyle products.", liveLink: "https://verona-plus.com", technologies: ["Next.js", "Tailwind"] },
  { id: 25, category: "Home & Living", title: "Allion Plus", logo: "https://allion-plus.com/favicon.ico", image: "/allion-ss.png", description: "A comprehensive home stuff and appliances store with a wide range of household accessories.", liveLink: "https://allion-plus.com", technologies: ["Next.js", "Tailwind"] },

  // Corporate & Agency
  { id: 12, category: "Corporate & Agency", title: "Squad Innovators", logo: "https://squadinnovators.com/_next/static/media/Final-logo.9b8b0c50.png", image: "/Squad Innovators.png", description: "Corporate site for a digital agency showcasing services, process, and case studies with subtle motion.", liveLink: "https://squadinnovators.com/", technologies: ["Next.js", "Tailwind", "Framer Motion"] },
  { id: 3, category: "Corporate & Agency", title: "Satsuna Corporation", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834457.png", image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409303.jpg", description: "Satsuna is a Japanese blog website publishing famous blogs on Japan.", liveLink: "https://www.satsuna.co.jp", technologies: ["Next.js", "API Integration", "React"] },

  // SaaS & Tools
  { id: 13, category: "SaaS & Tools", title: "Outlet Expense", logo: "https://outletexpense.com/favicon.ico", image: "/Outlet Expense.png", description: "SaaS platform for expense tracking and outlet operations with dashboards, role-based access, and real-time insights.", liveLink: "https://outletexpense.com/", technologies: ["Next.js", "API Integration", "Tailwind"] },

  // Groceries & Essentials
  { id: 16, category: "Groceries & Essentials", title: "Taiba Mart", logo: "https://taibamart.com/_next/image?url=https%3A%2F%2Fwww.outletexpense.xyz%2Fuploads%2F243-Akhter-Hossain%2F1759820422.png&w=256&q=75", image: "/Taiba Mart.png", description: "A multi-category retail platform offering household essentials, personal care, home appliances, and lifestyle goods.", liveLink: "https://taibamart.com/", technologies: ["Next.js", "Tailwind", "Framer Motion"] },

  // Sports & Outdoor
  { id: 102, category: "Sports & Outdoor", title: "Sports Shop", logo: "https://www.google.com/s2/favicons?domain=sportsshop.com.bd&sz=128", image: "/sports-ss.png", description: "Shop premium sports equipment, fitness gear, and athletic wear in Bangladesh.", liveLink: "https://www.sportsshop.com.bd/", technologies: ["Next.js", "Tailwind"] },

  // Health & Wellness
  { id: 104, category: "Health & Wellness", title: "HN Dental Supply", logo: "https://www.google.com/s2/favicons?domain=hndentalbd.com&sz=128", image: "/hndental-ss.png", description: "Your premier destination for authentic dental instruments and tech accessories.", liveLink: "https://hndentalbd.com/", technologies: ["Next.js", "Tailwind"] },

  // Personal Portfolio
  { id: 19, category: "Personal Portfolio", title: "EmusCreation", logo: "https://www.emuscreation.com/favicon.ico", image: "/EmusCreation.png", description: "A creative studio offering video editing, branding, brand identity, and visual storytelling.", liveLink: "https://www.emuscreation.com/", technologies: ["Next.js", "Tailwind", "Framer Motion"] },

  // Books & Publications
  { id: 26, category: "Books & Publications", title: "Tarunya Prokashon", logo: "https://www.tarunyaprokashon.com/favicon.ico", image: "/tarunya.png", description: "A leading book publisher and online bookstore in Bangladesh offering a vast collection of books.", liveLink: "https://www.tarunyaprokashon.com/", technologies: ["Next.js", "Tailwind"] },
];

// Group and sort by most projects
const grouped = Object.entries(
  projects.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {})
).sort((a, b) => b[1].length - a[1].length);

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export default function Portfolio() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold poppins mb-4">
            ✦ Our Work
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 heroTitle">
            Our Portfolio
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto poppins">
            Real projects we've built for real businesses. From e-commerce to
            corporate — every project is crafted for performance.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            {grouped.map(([cat, items]) => (
              <a
                key={cat}
                href={`#${cat.replace(/\s+&\s+/g, "-").replace(/\s+/g, "-").toLowerCase()}`}
                className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-all poppins"
              >
                {cat} <span className="text-gray-400 ml-1">({items.length})</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Category Sections */}
        <div className="space-y-16">
          {grouped.map(([category, items], groupIndex) => (
            <motion.div
              key={category}
              id={category.replace(/\s+&\s+/g, "-").replace(/\s+/g, "-").toLowerCase()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 heroTitle">
                    {category}
                  </h2>
                  <p className="text-xs text-gray-400 poppins mt-0.5">
                    {items.length} project{items.length > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Cards Grid */}
              <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {items.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    className="group"
                  >
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                      {/* Project Image */}
                      <div className="relative h-36 md:h-44 overflow-hidden bg-gray-100">
                        <ProjectImage src={project.image} alt={project.title} />
                        {/* Tech badges */}
                        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                          {project.technologies.slice(0, 2).map((tech, i) => (
                            <span
                              key={i}
                              className="text-[10px] px-1.5 py-0.5 bg-white/90 text-gray-700 rounded-full backdrop-blur-sm shadow-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-3 md:p-4 flex flex-col flex-grow">
                        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed poppins mb-3">
                          {project.description}
                        </p>

                        {/* Footer */}
                        <div className="mt-auto flex items-center justify-between gap-2 pt-2.5 border-t border-gray-100">
                          <div className="flex items-center gap-2 min-w-0">
                            <ProjectLogo
                              src={project.logo}
                              alt={project.title}
                              size={26}
                            />
                            <h3 className="text-xs font-semibold text-gray-900 poppins truncate">
                              {project.title}
                            </h3>
                          </div>
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors group/link shrink-0"
                          >
                            <Eye size={13} />
                            <ExternalLink
                              size={10}
                              className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-10 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 heroTitle mb-2">
              Have a project in mind?
            </h2>
            <p className="text-gray-500 poppins mb-6">
              Let's turn your idea into a high-performing digital product.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-semibold poppins transition-colors shadow-sm group"
            >
              Get a Free Consultation
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

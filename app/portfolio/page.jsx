"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Eye, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gadget Bodda",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832351.jpg",
    image:
      "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409080.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://www.gadgetboddaa.com/",
    technologies: ["Next.js", "React", "Laravel", "Php"],
  },
  {
    id: 2,
    title: "Mobile Club",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832398.jpg",
    image:
      "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409274.png",
    description:
      "Mobile Club is a famous shop in Jamuna Future park in Bangladesh. They are sale used iPhone and Gadgets Accessories.",
    liveLink: "https://www.mobileclub.co/",
    technologies: ["Next.js", "Firebase", "Gsap"],
  },
  {
    id: 3,
    title: "Satsuna Corporation",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834457.png",
    image:
      "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409303.jpg",
    description:
      "Satsuna is a Japanese blog website. They publish famous blogs on Japan.",
    liveLink: "https://www.satsuna.co.jp",
    technologies: ["Next.js", "API Integration", "React"],
  },
  {
    id: 4,
    title: "CeL TeL",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834023.png",
    image:
      "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409240.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://www.celtelbd.com/",
    technologies: ["Next.js", "API Integration", "Tailwind"],
  },
  {
    id: 5,
    title: "Morshed Mart",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833877.png",
    image:
      "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833724.png",
    description:
      "Morshed Mart is a fashion e-commerce store. They sell T-shirts and branded shirts.",
    liveLink: "https://www.morshedmart.com/",
    technologies: ["Next.js", "MySql"],
  },
  {
    id: 6,
    title: "Elite",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833939.png",
    image:
      "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409329.png",
    description:
      "Elite is a quality laptop seller. They sell many 2nd hand and new laptops.",
    liveLink: "https://www.eliteebd.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Apple Newton Bd",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834132.jpg",
    image:
      "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409124.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://applenewtonbd.com/",
    technologies: ["React", "Express", "MySQL"],
  },
  {
    id: 8,
    title: "Shahensha Gadget",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834292.png",
    image:
      "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834221.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://shahenshahgadgets.com",
    technologies: ["React", "Express", "MySQL"],
  },
  {
    id: 9,
    title: "Apple Mart BD",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834693.png",
    image:
      "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834622.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://www.applemartbd.com",
    technologies: ["React", "Express", "MySQL"],
  },
  {
    id: 10,
    title: "EmusFashion",
    logo: "https://www.outletexpense.xyz/uploads/238-MD.-Sarawer-Jahan-Evan/1758168402.png",
    image: "/EmusFashion.png",
    description:
      "Modern fashion e‑commerce with curated categories, fast product discovery, and a streamlined checkout designed to increase conversions.",
    liveLink: "https://emusfashion.com/",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 11,
    title: "Brothers Mobile & Accessories",
    logo: "https://www.brothersmobilebd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownload__4_-removebg-preview-removebg-preview%20(1).4b6af063.png&w=256&q=75&dpl=dpl_cxXAviRRxxRvewfH55T3iWYJzGet",
    image: "/Brothers Mobile & Accessories.png",
    description:
      "Retail experience for smartphones and accessories with clear product taxonomy, warranty info, and mobile‑first performance.",
    liveLink: "https://www.brothersmobilebd.com/",
    technologies: ["Next.js", "Tailwind", "SWR"],
  },
  {
    id: 12,
    title: "Squad Innovators",
    logo: "https://squadinnovators.com/_next/static/media/Final-logo.9b8b0c50.png",
    image: "/Squad Innovators.png",
    description:
      "Corporate site for a digital agency showcasing services, process, and case studies with subtle motion and strong CTA strategy.",
    liveLink: "https://squadinnovators.com/",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 13,
    title: "Outlet Expense",
    logo: "https://outletexpense.com/favicon.ico",
    image: "/Outlet Expense.png",
    description:
      "SaaS platform for expense tracking and outlet operations with dashboards, role‑based access, and real‑time insights.",
    liveLink: "https://outletexpense.com/",
    technologies: ["Next.js", "API Integration", "Tailwind"],
  },
  {
    id: 14,
    title: "Apple Daddy",
    logo: "https://www.appledaddybd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.a0e81e1a.png&w=384&q=75&dpl=dpl_imvdJGmx7Rx6G9viBLLycAbU1M3f",
    image: "/Apple Daddy.png",
    description:
      "Apple‑focused retailer site featuring product comparisons, EMI details, and conversion‑optimized PDP and cart flow.",
    liveLink: "https://www.appledaddybd.com/",
    technologies: ["Next.js", "Tailwind", "SWR"],
  },
  {
    id: 15,
    title: "Perfect Gadget BD",
    logo: "https://www.perfectgadgetbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPerfectGadgetBD-logo%20(1)%201.953d5536.png&w=128&q=75&dpl=dpl_Gnozm5sN5kDuE9hYgX68JMzafQty",
    image: "/Perfect Gadget BD.png",
    description:
      "Electronics and gadget storefront with fast catalog browsing, detailed specs, and secure checkout.",
    liveLink: "https://perfectgadgetbd.com/",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 16,
    title: "Taiba Mart",
    logo: "https://taibamart.com/_next/image?url=https%3A%2F%2Fwww.outletexpense.xyz%2Fuploads%2F243-Akhter-Hossain%2F1759820422.png&w=256&q=75",
    image: "/Taiba Mart.png",
    description:
      "A multi-category retail platform offering a wide range of household essentials, personal care products, home appliances, and lifestyle goods with easy navigation, clear pricing, and convenient delivery options across Bangladesh.",
    liveLink: "https://taibamart.com/",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 17,
    title: "PixelBD",
    logo: "https://www.gpixelbd.com/_next/image?url=https%3A%2F%2Fwww.outletexpense.xyz%2Fuploads%2F259-Shydul-Amir-Jihad%2F1761213710.png&w=96&q=75&dpl=dpl_DPrkuwpkUuyT8fShzus8ps3JWz1D",
    image: "/PixelBD.png",
    description:
      "A focused mobile-tech storefront in Bangladesh offering the latest smartphones, accessories and wearable devices with full specs, competitive pricing and reliable after-sales support.",
    liveLink: "https://www.gpixelbd.com/",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 18,
    title: "MKS Outfit",
    logo: "https://www.outletexpense.xyz/uploads/215-Rifat-Hasan/1762859683.png",
    image: "/MKS Outfit.png",
    description:
      "A fashion-ecommerce destination offering curated women's (and possibly men's) apparel and accessories with stylish seasonal collections, easy browsing of looks, and secure online checkout for shoppers in Bangladesh",
    liveLink: "https://www.mksoutfit.com/",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 19,
    title: "EmusCreation",
    logo: "https://www.emuscreation.com/favicon.ico",
    image: "/EmusCreation.png",
    description:
      "A creative studio offering video editing, branding, brand identity, and visual storytelling.",
    liveLink: "https://www.emuscreation.com/",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 20,
    title: "Apple Dream BD",
    logo: "https://appledreambd.com/logo.png",
    image: "/Apple Dream BD.png",
    description:
      "A dedicated Apple-ecosystem retailer in Bangladesh offering the latest iPhones, iPads and accessories with full spec details, authentic products and reliable delivery plus support.",
    liveLink: "https://appledreambd.com/",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 21,
    title: "Apple Nation BD",
    logo: "https://www.applenationbd.com/logo.png",
    image: "/Apple Nation BD.png",
    description:
      "A premier destination for Apple products in Bangladesh, featuring a wide range of iPhones, MacBooks, and accessories with competitive pricing and excellent customer service.",
    liveLink: "https://applenationbd.com/",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 22,
    title: "Brand Empire",
    logo: "https://www.brandempirebd.com/logo.png?dpl=dpl_H97nuooTcSkzyC8vR8MR9e4Kk3gv",
    image: "/Brand Empire.png",
    description:
      "A premium clothing brand for men and women in Bangladesh, featuring a wide range of clothing, accessories, and other products with competitive pricing and excellent customer service.",
    liveLink: "https://www.brandempirebd.com/",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Portfolio() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                     unoptimized/>

                    {/* Technology badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 bg-white/90 text-gray-700 rounded-full backdrop-blur-sm shadow-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed poppins mb-4">
                      {project.description}
                    </p>

                    {/* Footer — logo + title + view button */}
                    <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <Image
                          unoptimized
                          src={project.logo}
                          alt={project.title}
                          width={32}
                          height={32}
                          className="rounded-full border border-gray-200 object-cover"
                        />
                        <h3 className="text-sm font-semibold text-gray-900 poppins truncate max-w-[140px]">
                          {project.title}
                        </h3>
                      </div>

                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors group/link shrink-0"
                      >
                        <Eye size={16} />
                        <span className="hidden sm:inline">View</span>
                        <ExternalLink
                          size={12}
                          className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
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

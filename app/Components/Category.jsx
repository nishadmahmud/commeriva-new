"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiClothes, GiBabyBottle } from "react-icons/gi";
import { FaHouseUser, FaRegBuilding, FaScrewdriverWrench, FaBook } from "react-icons/fa6";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { IoMdFootball } from "react-icons/io";
import { Eye, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectLogo = ({ src, alt, size = 24 }) => {
  const [error, setError] = useState(false);
  const letter = alt ? alt.charAt(0).toUpperCase() : '?';
  
  if (error || !src) {
    return (
      <div 
        style={{ width: size, height: size }} 
        className="rounded-full border border-gray-200 bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0"
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
// Base projects data from portfolio
const allProjects = [
  {
    id: 101,
    title: "Dizmo",
    logo: "https://www.dizmo.com.bd/favicon.ico",
    image: "/dizmo-ss.png",
    description: "Shop the latest smartphones, laptops, tablets & gadgets with authentic warranty at Dizmo Bangladesh.",
    liveLink: "https://www.dizmo.com.bd/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 22,
    title: "Brand Empire",
    logo: "https://www.brandempirebd.com/logo.png?dpl=dpl_H97nuooTcSkzyC8vR8MR9e4Kk3gv",
    image: "/Brand Empire.png",
    description: "A premium clothing brand for men and women in Bangladesh.",
    liveLink: "https://www.brandempirebd.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 102,
    title: "Sports Shop",
    logo: "https://www.google.com/s2/favicons?domain=sportsshop.com.bd&sz=128",
    image: "/sports-ss.png",
    description: "Shop premium sports equipment, fitness gear, and athletic wear in Bangladesh.",
    liveLink: "https://www.sportsshop.com.bd/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 103,
    title: "Allion",
    logo: "https://www.google.com/s2/favicons?domain=allion-appliance.com&sz=128",
    image: "/allion-ss.png",
    description: "Premium kitchen appliances and home essentials.",
    liveLink: "https://www.allion-appliance.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 104,
    title: "HN Dental Supply",
    logo: "https://www.google.com/s2/favicons?domain=hndentalbd.com&sz=128",
    image: "/hndental-ss.png",
    description: "Your premier destination for authentic dental instruments and tech accessories.",
    liveLink: "https://hndentalbd.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 1,
    title: "Gadget Bodda",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832351.jpg",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409080.png",
    description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://www.gadgetboddaa.com/",
    technologies: ["Next.js", "React", "Laravel"],
  },
  {
    id: 2,
    title: "Mobile Club",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832398.jpg",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409274.png",
    description: "Mobile Club is a famous shop in Jamuna Future park in Bangladesh.",
    liveLink: "https://www.mobileclub.co/",
    technologies: ["Next.js", "Firebase"],
  },
  {
    id: 5,
    title: "Morshed Mart",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833877.png",
    image: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833724.png",
    description: "Morshed Mart is a fashion e-commerce store. They sell T-shirts and branded shirts.",
    liveLink: "https://www.morshedmart.com/",
    technologies: ["Next.js", "MySql"],
  },
  {
    id: 6,
    title: "Elite",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833939.png",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409329.png",
    description: "Elite is a quality laptop seller. They sell many 2nd hand and new laptops.",
    liveLink: "https://www.eliteebd.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 10,
    title: "EmusFashion",
    logo: "https://www.outletexpense.xyz/uploads/238-MD.-Sarawer-Jahan-Evan/1758168402.png",
    image: "/EmusFashion.png",
    description: "Modern fashion e‑commerce with curated categories, fast product discovery.",
    liveLink: "https://emusfashion.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 14,
    title: "Apple Daddy",
    logo: "https://www.appledaddybd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.a0e81e1a.png&w=384&q=75&dpl=dpl_imvdJGmx7Rx6G9viBLLycAbU1M3f",
    image: "/Apple Daddy.png",
    description: "Apple‑focused retailer site featuring product comparisons, EMI details.",
    liveLink: "https://www.appledaddybd.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 15,
    title: "Perfect Gadget BD",
    logo: "https://www.perfectgadgetbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPerfectGadgetBD-logo%20(1)%201.953d5536.png&w=128&q=75&dpl=dpl_Gnozm5sN5kDuE9hYgX68JMzafQty",
    image: "/Perfect Gadget BD.png",
    description: "Electronics and gadget storefront with fast catalog browsing.",
    liveLink: "https://perfectgadgetbd.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 16,
    title: "Taiba Mart",
    logo: "https://taibamart.com/_next/image?url=https%3A%2F%2Fwww.outletexpense.xyz%2Fuploads%2F243-Akhter-Hossain%2F1759820422.png&w=256&q=75",
    image: "/Taiba Mart.png",
    description: "A multi-category retail platform offering a wide range of household essentials.",
    liveLink: "https://taibamart.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 18,
    title: "MKS Outfit",
    logo: "https://www.outletexpense.xyz/uploads/215-Rifat-Hasan/1762859683.png",
    image: "/MKS Outfit.png",
    description: "A fashion-ecommerce destination offering curated women's apparel.",
    liveLink: "https://www.mksoutfit.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 19,
    title: "EmusCreation",
    logo: "https://www.emuscreation.com/favicon.ico",
    image: "/EmusCreation.png",
    description: "A creative studio offering video editing, branding, and visual storytelling.",
    liveLink: "https://www.emuscreation.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 21,
    title: "Apple Nation BD",
    logo: "https://www.applenationbd.com/logo.png",
    image: "/Apple Nation BD.png",
    description: "A premier destination for Apple products in Bangladesh.",
    liveLink: "https://applenationbd.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 105,
    title: "Applex",
    logo: "https://www.applex.com.bd/favicon.ico",
    image: "/applex.png",
    description: "Premium electronics and gadgets store in Bangladesh offering the latest technology and devices.",
    liveLink: "https://www.applex.com.bd",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 106,
    title: "Verona Plus",
    logo: "https://verona-plus.com/favicon.ico",
    image: "",
    description: "Your ultimate destination for quality home appliances, essentials, and premium lifestyle products.",
    liveLink: "https://verona-plus.com",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 107,
    title: "Allion Plus",
    logo: "https://allion-plus.com/favicon.ico",
    image: "/allion-ss.png",
    description: "A comprehensive home stuff and appliances store with a wide range of household accessories.",
    liveLink: "https://allion-plus.com",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 108,
    title: "Tarunya Prokashon",
    logo: "https://www.tarunyaprokashon.com/favicon.ico",
    image: "/tarunya.png",
    description: "A leading book publisher and online bookstore in Bangladesh offering a vast collection of books.",
    liveLink: "https://www.tarunyaprokashon.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 109,
    title: "Cellfix BD",
    logo: "https://www.cellfixbd.com/favicon.ico",
    image: "/cellfix.png",
    description: "Trusted electronics and mobile solutions offering the latest smartphones and repair services.",
    liveLink: "https://www.cellfixbd.com/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 110,
    title: "Celltech BD",
    logo: "https://www.celltechbd.com.bd/favicon.ico",
    image: "/celltech.png",
    description: "Your reliable source for the latest electronics, mobile devices, and premium accessories.",
    liveLink: "https://www.celltechbd.com.bd/",
    technologies: ["Next.js", "Tailwind"],
  },
  {
    id: 111,
    title: "Pochondo Shop",
    logo: "https://pochondoshop.com/favicon.ico",
    image: "/pochondoshop.png",
    description: "An exclusive online electronics shop featuring the latest gadgets and smart devices.",
    liveLink: "https://pochondoshop.com/",
    technologies: ["Next.js", "Tailwind"],
  }
];

const categories = [
  {
    name: "Electronics & Gadgets",
    icon: <HiWrenchScrewdriver />,
    description: "From smartphones to smart homes — we build high-performance stores for electronics brands.",
    projects: allProjects.filter((p) =>
      ["Dizmo", "Gadget Bodda", "Mobile Club", "Apple Daddy", "Elite", "Perfect Gadget BD", "Apple Nation BD", "Applex", "Cellfix BD", "Celltech BD", "Pochondo Shop"].includes(p.title)
    ),
  },
  {
    name: "Fashion & Clothing",
    icon: <GiClothes />,
    description: "Clothing and fashion is the largest e-commerce category. We build beautiful storefronts.",
    projects: allProjects.filter((p) =>
      ["Brand Empire", "MKS Outfit", "Morshed Mart", "EmusFashion"].includes(p.title)
    ),
  },
  {
    name: "Sports & Outdoor",
    icon: <IoMdFootball />,
    description: "Athletic gear, fitness equipment, and outdoor adventure shops with dynamic design.",
    projects: allProjects.filter((p) => ["Sports Shop"].includes(p.title)),
  },
  {
    name: "Home & Living",
    icon: <FaHouseUser />,
    description: "Furniture, décor, and home essentials. We create warm, inviting storefronts.",
    projects: allProjects.filter((p) => ["Allion", "Verona Plus", "Allion Plus"].includes(p.title)),
  },
  {
    name: "Health & Wellness",
    icon: <MdHealthAndSafety />,
    description: "Supplements, fitness products, and wellness brands. We build trust-driven stores.",
    projects: allProjects.filter((p) => ["HN Dental Supply"].includes(p.title)),
  },
  {
    name: "Personal Portfolio",
    icon: <FaRegBuilding />,
    description: "Professional portfolios for creatives and individuals who need a strong digital identity.",
    projects: allProjects.filter((p) => ["EmusCreation"].includes(p.title)),
  },
  {
    name: "Groceries & Essentials",
    icon: <RiShoppingBag3Fill />,
    description: "Quick-commerce and grocery stores built for speed — fast search and easy ordering.",
    projects: allProjects.filter((p) => ["Taiba Mart"].includes(p.title)),
  },
  {
    name: "Books & Publications",
    icon: <FaBook />,
    description: "Online bookstores, publishers, and literary platforms with elegant browsing experiences.",
    projects: allProjects.filter((p) => ["Tarunya Prokashon"].includes(p.title)),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Category() {
  const [active, setActive] = useState(categories[0].name);

  const activeCategory = categories.find((cat) => cat.name === active);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold poppins mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 heroTitle">
            Built For Every Industry
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto poppins">
            Choose your vertical — we have tailored solutions for every market segment.
          </p>
        </motion.div>

        {/* Layout: Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Left Sidebar (Category List) */}
          <div className="w-full lg:w-1/3 flex overflow-x-auto lg:overflow-visible lg:flex-col gap-2 shrink-0 lg:sticky lg:top-24 pb-2 lg:pb-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((cat) => {
              const isActive = active === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActive(cat.name)}
                  className={`flex items-center gap-2 lg:gap-4 px-3 py-2 lg:px-5 lg:py-4 rounded-xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal shrink-0 snap-start w-auto lg:w-full ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200/60"
                  }`}
                >
                  <div
                    className={`text-lg lg:text-2xl ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {cat.icon}
                  </div>
                  <span
                    className={`font-semibold poppins text-xs md:text-base ${
                      isActive ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Content (Projects Grid) */}
          <div className="w-full lg:w-2/3 lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {/* Category Header */}
                <div className="hidden lg:block bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 heroTitle flex items-center gap-3">
                    <span className="text-blue-600">{activeCategory?.icon}</span>
                    {activeCategory?.name}
                  </h3>
                  <p className="text-gray-500 poppins mt-2 text-sm leading-relaxed">
                    {activeCategory?.description}
                  </p>
                </div>

                {/* Projects Grid */}
                {activeCategory?.projects && activeCategory.projects.length > 0 ? (
                  <div className="flex sm:grid sm:grid-cols-2 overflow-x-auto sm:overflow-visible gap-4 sm:gap-6 pb-4 sm:pb-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {activeCategory.projects.map((project) => (
                      <motion.div
                        key={project.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-[70vw] max-w-[280px] sm:max-w-none sm:w-auto shrink-0 snap-center group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                      >
                        {/* Project Image */}
                        <div className="relative h-44 overflow-hidden border-b border-gray-100">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            unoptimized
                          />
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col flex-grow">
                          <div className="flex items-center gap-2 mb-3">
                            <ProjectLogo
                              src={project.logo}
                              alt={project.title}
                              size={24}
                            />
                            <h3 className="text-sm font-semibold text-gray-900 poppins truncate">
                              {project.title}
                            </h3>
                          </div>
                          
                          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed poppins mb-4 flex-grow">
                            {project.description}
                          </p>

                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors group/link shrink-0 mt-auto"
                          >
                            <Eye size={14} />
                            <span>View Project</span>
                            <ExternalLink
                              size={12}
                              className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                            />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-12 text-center h-64">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
                      {activeCategory?.icon}
                    </div>
                    <h4 className="text-gray-900 font-semibold poppins">More projects coming soon</h4>
                    <p className="text-gray-500 text-sm poppins mt-1">We are currently updating our portfolio for this category.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

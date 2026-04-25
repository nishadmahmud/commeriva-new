"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiClothes, GiBabyBottle } from "react-icons/gi";
import { FaHouseUser, FaRegBuilding, FaScrewdriverWrench } from "react-icons/fa6";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { IoMdFootball } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const categories = [
  {
    name: "Clothing & Fashion",
    icon: <GiClothes />,
    description:
      "Clothing and fashion is the largest e-commerce category. We build beautiful storefronts for men's, women's, and children's fashion brands.",
  },
  {
    name: "Electronics & Gadgets",
    icon: <HiWrenchScrewdriver />,
    description:
      "From smartphones to smart homes — we build high-performance stores for electronics brands with rich product catalogs.",
  },
  {
    name: "Home & Living",
    icon: <FaHouseUser />,
    description:
      "Furniture, décor, and home essentials. We create warm, inviting storefronts that inspire purchase decisions.",
  },
  {
    name: "Health & Wellness",
    icon: <MdHealthAndSafety />,
    description:
      "Supplements, fitness products, and wellness brands. We build trust-driven stores with a focus on credibility.",
  },
  {
    name: "Baby & Kids",
    icon: <GiBabyBottle />,
    description:
      "Safety-focused stores for baby products, toys, and children's essentials with parent-friendly UX.",
  },
  {
    name: "Groceries & Essentials",
    icon: <RiShoppingBag3Fill />,
    description:
      "Quick-commerce and grocery stores built for speed — fast search, easy ordering, and instant checkout.",
  },
  {
    name: "Sports & Outdoor",
    icon: <IoMdFootball />,
    description:
      "Athletic gear, fitness equipment, and outdoor adventure shops with dynamic, action-oriented design.",
  },
  {
    name: "Automotive",
    icon: <FaScrewdriverWrench size={22} />,
    description:
      "Parts, accessories, and automotive service stores with advanced filtering and compatibility matching.",
  },
  {
    name: "Corporate & Services",
    icon: <FaRegBuilding />,
    description:
      "Professional service websites for businesses, agencies, and consultancies that need a strong digital identity.",
  },
];

export default function Category() {
  const [active, setActive] = useState(categories[0].name);
  const [desc, setDesc] = useState(categories[0].description);
  const [modalOpen, setModalOpen] = useState(false);

  const isLargeDevice = useMediaQuery({ minWidth: 1024 });

  const handleCategoryClick = (cat) => {
    setActive(cat.name);
    setDesc(cat.description);
    if (!isLargeDevice) {
      setModalOpen(true);
    }
  };

  const activeCategory = categories.find((cat) => cat.name === active);

  return (
    <section className="py-16 md:py-24 bg-white">
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

        {/* Grid + Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {categories.map((cat, index) => {
                const isActive = active === cat.name;
                return (
                  <motion.div
                    key={cat.name}
                    onClick={() => handleCategoryClick(cat)}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    className="cursor-pointer group"
                  >
                    <div
                      className={`rounded-xl border p-5 text-center transition-all duration-300 ${
                        isActive
                          ? "border-blue-200 bg-blue-50 shadow-sm"
                          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                      }`}
                    >
                      <div
                        className={`text-3xl md:text-4xl mb-2 ${
                          isActive ? "text-blue-700" : "text-gray-600"
                        }`}
                      >
                        {cat.icon}
                      </div>
                      <h3
                        className={`font-semibold text-xs md:text-sm poppins ${
                          isActive ? "text-blue-700" : "text-gray-700"
                        }`}
                      >
                        {cat.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Detail Panel (Desktop) */}
          <div className="hidden lg:block sticky top-24 h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl text-blue-700">
                    {activeCategory?.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 heroTitle">
                    {active}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed poppins">
                  {desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Modal */}
        <AnimatePresence>
          {modalOpen && !isLargeDevice && (
            <motion.div
              className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative border border-gray-200"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                >
                  <span className="text-xl">✕</span>
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl text-blue-700">
                    {activeCategory?.icon}
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 heroTitle">
                    {active}
                  </h2>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed poppins">
                  {desc}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

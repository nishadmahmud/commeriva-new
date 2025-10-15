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
import { Zap } from "lucide-react";

const categories = [
  {
    name: "Clothing",
    icon: <GiClothes />,
    description:
      "Clothing and fashion is consistently the largest and fastest-growing e-commerce category worldwide. It covers men's wear, women's and children's clothing. Customers in this segment often look for variety, seasonal collections, and affordable pricing.",
    pattern: "dots",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    name: "Electronics",
    icon: <HiWrenchScrewdriver />,
    description:
      "Electronics and gadgets represent a high-value category with strong demand across all age groups. This segment includes smartphones, tablets, laptops, desktops, and their accessories. Increasingly popular are wearables such as smartwatches and fitness trackers.",
    pattern: "lines",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Home",
    icon: <FaHouseUser />,
    description:
      "The home and living category is centered around lifestyle improvement and includes furniture, kitchen appliances, décor, and home essentials. Furniture ranges from beds, sofas, and dining tables to compact storage solutions designed for urban homes.",
    pattern: "grid",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "Health",
    icon: <MdHealthAndSafety />,
    description:
      "The health and wellness segment is a fast-expanding category driven by lifestyle changes and growing health awareness. It covers dietary supplements, vitamins, protein powders, and functional foods, alongside medical devices.",
    pattern: "waves",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Baby & Kids",
    icon: <GiBabyBottle />,
    description:
      "The baby and kids category is a high-engagement area for parents and families. It spans clothing, baby care products, toys, games, strollers, car seats, and educational supplies. Safety and quality are critical purchase drivers here.",
    pattern: "circles",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    name: "Groceries",
    icon: <RiShoppingBag3Fill />,
    description:
      "Groceries and everyday essentials form the backbone of daily commerce. This category includes fresh produce like fruits and vegetables, packaged goods such as snacks, rice, and cooking oil, beverages including tea, coffee, and juices.",
    pattern: "triangles",
    color: "from-lime-500/20 to-green-500/20",
  },
  {
    name: "Sports",
    icon: <IoMdFootball />,
    description:
      "The sports and outdoor category caters to athletes, fitness enthusiasts, and adventurers. It includes sportswear, athletic footwear, gym equipment such as treadmills and weights, and outdoor gear like tents, hiking kits, and camping accessories.",
    pattern: "dots",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    name: "Automotive",
    icon: <FaScrewdriverWrench size={25} />,
    description:
      "The automotive category focuses on products for car and motorcycle owners. It includes car accessories such as seat covers, floor mats, cameras, and GPS devices; motorcycle gear like helmets and riding jackets; and spare parts and repair tools.",
    pattern: "waves",
    color: "from-slate-500/20 to-gray-500/20",
  },
  {
    name: "Corporate",
    icon: <FaRegBuilding />,
    description:
      "A corporate website is more than just an online presence — it is the digital face of your brand. It represents your professionalism, communicates your services, and builds trust with your clients. Our Corporate Website Solutions are designed to give your business a strong online identity.",
    pattern: "lines",
    color: "from-violet-500/20 to-indigo-500/20",
  },
];

const features = [
  "User & Authentication",
  "Product & Catalog",
  "CMS",
  "Machine Learning",
  "Smart/Advanced Features",
  "AI",
  "Notifications",
  "Order & Delivery",
  "Security",
];

export default function Category() {
  const [active, setActive] = useState(categories[0].name);
  const [desc, setDesc] = useState(categories[0].description);
  const [modalOpen, setModalOpen] = useState(false);

  const isLargeDevice = useMediaQuery({ minWidth: 1024 });
  const [visibleCategories, setVisibleCategories] = useState([]);

  useEffect(() => {
    if (isLargeDevice) {
      setVisibleCategories(categories);
    } else {
      setVisibleCategories(categories);
    }
  }, [isLargeDevice]);

  const handleCategoryClick = (cat) => {
    setActive(cat.name);
    setDesc(cat.description);
    if (!isLargeDevice) {
      setModalOpen(true);
    }
  };

  const activeCategory = categories.find((cat) => cat.name === active);

  return (
    <section className="relative py-12 md:py-20 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Animated background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 size-[35rem] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-400/10 to-teal-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 size-[40rem] rounded-full bg-gradient-to-tl from-teal-400/20 via-cyan-400/10 to-blue-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 text-xs md:text-sm shadow-sm backdrop-blur mb-4">
            <Zap size={14} className="text-cyan-500" />
            E‑Commerce Suite
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-gray-100 heroTitle mb-4">
            Industry‑tailored{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 dark:from-cyan-300 dark:via-blue-300 dark:to-teal-300">
              commerce solutions
            </span>
      </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto poppins">
            Choose a vertical and explore a feature set designed for your market—from clothing to automotive, powered by AI and real‑time inventory.
          </p>
        </motion.div>

        {/* Grid + Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Category Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {visibleCategories.map((cat, index) => {
                const isActive = active === cat.name;
                return (
            <motion.div
              key={cat.name}
              onClick={() => handleCategoryClick(cat)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative cursor-pointer"
                  >
                    {/* Glow on hover */}
                    <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 ${isActive ? '!opacity-100' : ''}`} />
                    
                    {/* Card */}
                    <div className={`relative h-full rounded-xl overflow-hidden border transition-all duration-300 ${
                      isActive 
                        ? 'border-white/30 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-lg' 
                        : 'border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur hover:border-gray-300 dark:hover:border-white/20'
                    }`}>
                      <div className="p-6 text-center">
                  <motion.div
                          className="text-4xl md:text-5xl mb-3 text-gray-800 dark:text-gray-100"
                          whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {cat.icon}
                  </motion.div>
                        <h3 className={`font-semibold text-sm md:text-base poppins ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                    {cat.name}
                  </h3>
                </div>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
              </div>
            </motion.div>
                );
              })}
            </div>
        </div>

          {/* Right: Active Category Detail (Desktop) */}
          <div className="hidden lg:block sticky top-24 h-fit">
            <AnimatePresence mode="wait">
          <motion.div
            key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
                className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/80 backdrop-blur-xl p-6 shadow-xl"
              >
                {/* Glow accent */}
                <div className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-br ${activeCategory?.color} opacity-30 blur-xl -z-10`} />
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl text-gray-800 dark:text-gray-100">
                    {activeCategory?.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 heroTitle">
                    {active}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 poppins leading-relaxed text-sm">
                  {desc}
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2">
                  {features.map((feature, i) => (
                <motion.span
                  key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer shadow-sm"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Modal */}
      <AnimatePresence>
        {modalOpen && !isLargeDevice && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="backdrop-blur-3xl rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border border-white/10"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(15, 15, 20, 0.9) 50%, rgba(0, 0, 0, 0.85) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              }}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Frosted glass overlay with subtle noise texture */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-10 rounded-2xl"
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 50%, rgba(6, 182, 212, 0.06) 100%),
                    url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
                  `,
                  backgroundBlendMode: 'overlay',
                }}
              />
              {/* Additional frosted layer */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-white/1 to-transparent pointer-events-none rounded-2xl" />
              <div className="relative z-10">
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-0 right-0 text-red-500 hover:text-red-400 transition-colors p-1.5 hover:bg-white/5 rounded-lg"
                >
                  <span className="text-xl">✕</span>
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl text-white">{activeCategory?.icon}</div>
                  <h2 className="text-xl font-semibold text-white heroTitle">
                    {active}
                  </h2>
                </div>

                <p className="text-gray-200 text-sm leading-relaxed mb-5 poppins">
                  {desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {features.map((feature, i) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200 rounded-full text-xs font-medium hover:bg-white/15 hover:border-cyan-400/30 transition-all cursor-pointer"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

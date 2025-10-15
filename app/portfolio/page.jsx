// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import { ExternalLink } from "lucide-react"



// const categories = ["All", "Next.js", "React", "Firebase", "Laravel", "Php", "Tailwind", "API Integration", "HTML", "CSS", "JavaScript", "MySql", "Express"]

// export default function Portfolio() {
//   const [activeCategory, setActiveCategory] = useState("All")

//   const filteredProjects =
//     activeCategory === "All"
//       ? projects
//       : projects.filter((p) => p.technologies.includes(activeCategory))

//   return (
//     <div className="min-h-screen bg-white py-12 px-4 md:px-12 lg:px-24">
//       {/* Header */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 title">Our Portfolio</h1>
//         <p className="text-gray-600 poppins">Select a project to explore</p>
//       </div>

//       {/* Category Filter */}
//      <div className="flex gap-3 mb-12 w-full overflow-x-auto no-scrollbar scrollbar-hide">
//   {categories.map((category) => (
//     <button
//       key={category}
//       onClick={() => setActiveCategory(category)}
//       className={`px-4 py-2 text-sm whitespace-nowrap rounded-full border transition-all ${
//         activeCategory === category
//           ? "bg-gray-900 text-white border-gray-900"
//           : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//       }`}
//     >
//       {category}
//     </button>
//   ))}
// </div>


//       {/* Projects Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <AnimatePresence>
//           {filteredProjects.map((project) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
//             >
//               {/* Project Image */}
//               <div className="relative h-40 w-full">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 <div className="flex flex-wrap gap-2 mb-3">
//                   {project.technologies.slice(0, 2).map((tech, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
//                 <p className="text-sm text-gray-600 mb-4 line-clamp-2">
//                   {project.description}
//                 </p>
//                 <Link
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex justify-center items-center gap-2 w-full text-sm font-medium text-gray-900 border border-gray-900 px-4 py-2 rounded-sm hover:bg-gray-900 hover:text-white transition"
//                 >
//                   View Project
//                   <ExternalLink size={18}></ExternalLink>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }

'use client'

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Eye, ExternalLink } from "lucide-react"

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const projects = [
  {
    id: 1,
    title: "Gadget Bodda",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832351.jpg",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409080.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://www.gadgetboddaa.com/",
    technologies: ["Next.js", "React", "Laravel", "Php"],
  },
  {
    id: 2,
    title: "Mobile Club",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832398.jpg",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409274.png",
    description:
      "Mobile Club is a famous shop in Jamuna Future park in Bangladesh. They are sale used iPhone and Gadgets Accessories.",
    liveLink: "https://www.mobileclub.co/",
    technologies: ["Next.js", "Firebase", "Gsap"],
  },
  {
    id: 3,
    title: "Satsuna Corporation",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834457.png",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409303.jpg",
    description:
      "Satsuna is a Japanese blog website. They publish famous blogs on Japan.",
    liveLink: "https://www.satsuna.co.jp",
    technologies: ["Next.js", "API Integration", "React"],
  },
  {
    id: 4,
    title: "CeL TeL",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834023.png",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409240.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://www.celtelbd.com/",
    technologies: ["Next.js", "API Integration", "Tailwind"],
  },
  {
    id: 5,
    title: "Morshed Mart",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833877.png",
    image: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833724.png",
    description:
      "Morshed Mart is a fashion e-commerce store. They sell T-shirts and branded shirts.",
    liveLink: "https://www.morshedmart.com/",
    technologies: ["Next.js", "MySql"],
  },
  {
    id: 6,
    title: "Elite",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833939.png",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409329.png",
    description:
      "Elite is a quality laptop seller. They sell many 2nd hand and new laptops.",
    liveLink: "https://www.eliteebd.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Apple Newton Bd",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834132.jpg",
    image: "https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757409124.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://applenewtonbd.com/",
    technologies: ["React", "Express", "MySQL"],
  },
  {
    id: 8,
    title: "Shahensha Gadget",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834292.png",
    image: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834221.png",
    description:
      "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
    liveLink: "https://shahenshahgadgets.com",
    technologies: ["React", "Express", "MySQL"],
  },
  {
    id: 9,
    title: "Apple Mart BD",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834693.png",
    image: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834622.png",
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
]


export default function Portfolio() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 py-12 px-4 relative overflow-hidden" onMouseMove={handleMouse} style={{ ["--x"]: `${mousePos.x}px`, ["--y"]: `${mousePos.y}px` }}>
      {/* subtle mouse-follow glow */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{ background: `radial-gradient(650px circle at var(--x) var(--y), rgba(59,130,246,0.08), transparent 70%)` }} />
      <div className="pointer-events-none absolute inset-0 z-0 hidden dark:block" style={{ background: `radial-gradient(700px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 75%)` }} />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
      
      {/* Header */}
      <motion.div 
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-semibold heroTitle text-gray-900 dark:text-gray-100">Our Portfolio</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Select a project to explore</p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              className="group"
            >
              <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Technology badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-white/90 dark:bg-neutral-800/90 text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer Section (logo + title + button) */}
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-gray-200 dark:border-white/10 object-cover"
                      />
                      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 poppins">{project.title}</h3>
                    </div>

                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group/link"
                    >
                      <Eye size={18} />
                      <span className="hidden sm:inline">View</span>
                      <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

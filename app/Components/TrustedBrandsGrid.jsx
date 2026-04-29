"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const brands = [
  { name: "Dizmo", logo: "https://www.dizmo.com.bd/favicon.ico" },
  { name: "Gadget Bodda", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832351.jpg" },
  { name: "Mobile Club", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757832398.jpg" },
  { name: "CeL TeL", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834023.png" },
  { name: "Elite", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833939.png" },
  { name: "Apple Newton BD", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834132.jpg" },
  { name: "Shahensha Gadget", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834292.png" },
  { name: "Apple Mart BD", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834693.png" },
  { name: "Perfect Gadget BD", logo: "https://www.perfectgadgetbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPerfectGadgetBD-logo%20(1)%201.953d5536.png&w=128&q=75&dpl=dpl_Gnozm5sN5kDuE9hYgX68JMzafQty" },
  { name: "Apple Nation BD", logo: "https://www.applenationbd.com/logo.png" },
  { name: "Applex", logo: "https://www.applex.com.bd/favicon.ico" },
  { name: "Cellfix BD", logo: "https://www.cellfixbd.com/favicon.ico" },
  { name: "Celltech BD", logo: "https://www.celltechbd.com.bd/favicon.ico" },
  { name: "Pochondo Shop", logo: "https://pochondoshop.com/favicon.ico" },
  { name: "Morshed Mart", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757833877.png" },
  { name: "EmusFashion", logo: "https://www.outletexpense.xyz/uploads/238-MD.-Sarawer-Jahan-Evan/1758168402.png" },
  { name: "MKS Outfit", logo: "https://www.outletexpense.xyz/uploads/215-Rifat-Hasan/1762859683.png" },
  { name: "Brand Empire", logo: "https://www.brandempirebd.com/logo.png?dpl=dpl_H97nuooTcSkzyC8vR8MR9e4Kk3gv" },
  { name: "Allion", logo: "https://www.google.com/s2/favicons?domain=allion-appliance.com&sz=128" },
  { name: "Allion Plus", logo: "https://allion-plus.com/favicon.ico" },
  { name: "Satsuna Corporation", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834457.png" },
  { name: "Outlet Expense", logo: "https://outletexpense.com/favicon.ico" },
  { name: "Sports Shop", logo: "https://www.google.com/s2/favicons?domain=sportsshop.com.bd&sz=128" },
  { name: "HN Dental Supply", logo: "https://www.google.com/s2/favicons?domain=hndentalbd.com&sz=128" },
  { name: "Tarunya Prokashon", logo: "https://www.tarunyaprokashon.com/favicon.ico" },
];

export default function TrustedBrandsGrid() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_45%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold poppins mb-4">
            <ShieldCheck size={12} />
            Our Valuable Clients
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 heroTitle">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto poppins">
            We take pride in powering innovative businesses with websites that perform.
          </p>
        </motion.div>

        <div className="rounded-2xl border border-blue-100/70 bg-white/80 backdrop-blur-sm p-3 md:p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`group relative overflow-hidden border px-2 py-2.5 min-h-[86px] md:min-h-[96px] flex flex-col items-center justify-center gap-1.5 md:gap-2 transition-all duration-300 hover:-translate-y-0.5
                ${
                  index % 2 === 0
                    ? "bg-white border-gray-200 rounded-md hover:border-blue-300 hover:shadow-[0_10px_22px_rgba(37,99,235,0.16)]"
                    : "bg-gradient-to-br from-white to-blue-50/60 border-blue-100/70 rounded-md hover:border-blue-300 hover:shadow-[0_10px_22px_rgba(59,130,246,0.18)]"
                }`}
              title={brand.name}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-8 md:max-h-11 max-w-[90%] w-auto object-contain saturate-125 contrast-125"
                loading="lazy"
              />
              <p className="text-[9px] md:text-[11px] leading-tight text-gray-600 font-medium poppins text-center line-clamp-1 px-1">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}


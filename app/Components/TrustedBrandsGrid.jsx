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
  { name: "Allion Plus", logo: "https://allion-plus.com/favicon.ico" },
  { name: "Sevilla", logo: "https://www.sevilla-plus.com/favicon.ico" },
  { name: "Verona", logo: "https://www.verona-agt.com/favicon.ico" },
  { name: "Satsuna Corporation", logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757834457.png" },
  { name: "Outlet Expense", logo: "https://outletexpense.com/favicon.ico" },
  { name: "Sports Shop", logo: "https://www.google.com/s2/favicons?domain=sportsshop.com.bd&sz=128" },
  { name: "HN Dental Supply", logo: "https://www.google.com/s2/favicons?domain=hndentalbd.com&sz=128" },
  { name: "Tarunya Prokashon", logo: "https://www.tarunyaprokashon.com/favicon.ico" },
  { name: "PC DOCTOR BD", logo: "https://www.outletexpense.xyz/uploads/363-MD.SAYEED/1775474144_69d395e034687.png" },
  { name: "Reemac", logo: "https://www.outletexpense.xyz/uploads/348-Riaz-Khan/1771597710_69986f8e23921.png" },
  { name: "Royel Tech", logo: "https://www.outletexpense.xyz/uploads/347-Royel-Tech/1770953005_698e992df27dc.jpg" },
  { name: "Pixel bd", logo: "https://www.outletexpense.xyz/uploads/259-Shydul-Amir-Jihad/1761191508.jpg" },
  { name: "Borka Bazar", logo: "https://www.outletexpense.xyz/uploads/339-Hridoy-Hossen/1768897480_696f3bc8ba351.jpg" },
  { name: "LLB Fashion", logo: "https://www.outletexpense.xyz/uploads/338-Md.-Liakat-Ali/1768049707_69624c2b5af1f.jpg" },
  { name: "Honey Mart", logo: "https://www.outletexpense.xyz/uploads/279-Honey-Mart-Sathkira/1765607727_693d092f814a4.jpg" },
  { name: "AppleDream", logo: "https://www.outletexpense.xyz/uploads/207-MD.-A.B.-Siddique/1747482497.jpg" },
  { name: "MAC TECHNOLOGY", logo: "https://www.outletexpense.xyz/uploads/255-MD.-Saiful-Islam-Rubel/1760275902.jpg" },
  { name: "Khan Gadget BD", logo: "https://www.outletexpense.xyz/uploads/254-Sakib-Ali/1764238790_692825c64c2c6.jpg" },
  { name: "Emus Creation", logo: "https://www.outletexpense.xyz/uploads/244-Mehedi-Emu/1759339140.jpg" },
  { name: "Apple Daddy", logo: "https://www.outletexpense.xyz/uploads/228-Khalid-Hasan-Sifat/1756712699.jpg" },
  { name: "Bonzer", logo: "https://www.outletexpense.xyz/uploads/131-Monjurul-Islam-Palash/1731585999.jpg" },
  { name: "CAFE LASANA", logo: "https://www.outletexpense.xyz/uploads/208-Aftabnogor-(Branch)/1747630312.jpg" },
  { name: "i Station", logo: "https://www.outletexpense.xyz/uploads/198-M.M-SOJIB-MAHMUD/1745220650.jpg" },
  { name: "Faizan International", logo: "https://www.outletexpense.xyz/uploads/184-Nazmul-Hasan-Rafi/1745673306.jpg" },
  { name: "Haque Pharma & Departmental Store", logo: "https://www.outletexpense.xyz/uploads/154-Haque-Pharma/1754285544.jpg" },
  { name: "Brothers Mobile & Accessories", logo: "https://www.outletexpense.xyz/uploads/135-MD.-Nahid-Hossain-Faisal/1733852092.jpg" },
  { name: "Accessories World", logo: "https://www.outletexpense.xyz/uploads/132-MD.-Haris-Naved/1731054817.jpg" },
  { name: "Bhai Bhai Sewing Corner", logo: "https://www.outletexpense.xyz/uploads/129-Moinuddin-Khan/1731158069.jpg" },
  { name: "Afrin Pharma", logo: "https://www.outletexpense.xyz/uploads/43-Md.-Sohel/1711179507.jpg" },
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


// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// // logos
// import company01 from "../../public/bodda.png";
// import company04 from "../../public/satsuna.png";
// import company05 from "../../public/brothers.png";
// import bonzer from "../../public/bonzer.png";

// const logos = [
//   { src: company01, alt: "Bodda" },
//   { src: company04, alt: "Satsuna" },
//   { src: company05, alt: "Brothers" },
//   { src: bonzer, alt: "Bonzer" },
// ];

// export default function TestSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % logos.length);
//     }, 2000); // main logo changes every 2s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full flex justify-center gap-10 items-center">
//       {logos.map((logo, i) => (
//         <motion.div
//           key={i}
//           animate={
//             i === activeIndex
//               ? {
//                   scale: [1, 1.2, 1], // bigger pulse
//                   y: [0, -10, 0], // bounce up
//                   opacity: 1,
//                 }
//               : {
//                   scale: [1, 1.05, 1], // gentle small pulse
//                   y: [0, -3, 0], // small movement
//                   opacity: 0.8,
//                 }
//           }
//           transition={{ duration: 0.8 }}
//           className="flex items-center justify-center"
//         >
//           <Image src={logo.src} alt={logo.alt} width={144} height={32}  unoptimized/>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

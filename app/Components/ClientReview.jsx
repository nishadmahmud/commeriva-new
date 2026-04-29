"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    company: "Satsuna",
    logo: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757702171.jpg",
    review:
      "Our new corporate website gives a strong impression to clients. It feels modern, professional, and perfectly represents our brand.",
    author: "Atsushi Shimoikura",
    role: "Managing Director / CEO",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    review:
      "Since launching my e-commerce site, I've seen a big boost in sales. The product pages look professional and are very easy to manage.",
    author: "MD. Mizanur Rahman",
    role: "Owner, Mobile Club",
    avatar: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757701872.jpg",
  },
  {
    review:
      "Updating my projects and achievements is super easy. I don't need technical skills to keep my portfolio up to date.",
    author: "Mehedi Emu",
    role: "CEO",
    avatar: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757701980.png",
  },
  {
    company: "MKS Outfit",
    review:
      "Since launching our fashion e-commerce store, we've seen a huge jump in sales. Customers really like the clean design.",
    author: "Motiur Rahman",
    role: "Founder",
    avatar: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757701779.jpg",
  },
  {
    review:
      "I really like the way the site is structured. Visitors can find information quickly, and it helps us look more credible in the market.",
    author: "M.A Matin",
    role: "Managing Director",
    avatar: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757702087.png",
  },
  {
    review:
      "The online store runs smoothly, and the checkout process is super easy. My customers love the clean design and fast loading speed.",
    author: "SAMI",
    role: "Owner & CEO",
    avatar: "https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757702013.jpg",
  },
];

export default function ClientReview() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold poppins mb-4">
            <Star size={12} className="fill-blue-500 text-blue-500" />
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 heroTitle">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto poppins">
            Real feedback from businesses who transformed their digital presence
            with Commeriva.
          </p>
        </motion.div>

        {/* Testimonials Marquee (All Devices) */}
        <div className="mt-4 overflow-hidden">
          <Marquee
            gradient={true}
            gradientColor="#ffffff"
            gradientWidth={120}
            speed={28}
            direction="right"
            pauseOnHover={false}
            className="py-4 no-scrollbar"
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div
                // Duplicate list for seamless loop
                key={`${testimonial.author}-${i}`}
                className="w-[86vw] max-w-[360px] md:max-w-[380px] mx-3 h-full"
              >
                <div className="relative bg-white/90 rounded-2xl border border-gray-200 p-5 min-h-[220px] flex flex-col shadow-sm hover:shadow-md transition-all duration-300">
                  <Quote
                    size={18}
                    className="absolute top-4 right-4 text-blue-500/30"
                  />

                  {/* Company name (keep height even when missing) */}
                  <p
                    className="text-sm font-bold text-gray-900 mb-3 poppins leading-tight"
                    aria-hidden={!testimonial.company}
                  >
                    {testimonial.company ? (
                      testimonial.company
                    ) : (
                      <span className="opacity-0">Company</span>
                    )}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        size={12}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-xs text-gray-600 leading-relaxed poppins mb-4 flex-grow line-clamp-4">
                    "{testimonial.review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
                    <img
                      src={testimonial.avatar}
                      className="w-9 h-9 rounded-full object-cover shrink-0 ring-2 ring-blue-50"
                      alt={testimonial.author}
                    />
                    <div>
                      <p className="font-semibold text-xs text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-semibold poppins mb-4">
            <Star size={12} className="fill-orange-500" />
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

        {/* Testimonials Grid (Desktop) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full flex flex-col hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                {/* Company name */}
                {testimonial.company && (
                  <p className="text-sm font-bold text-gray-900 mb-3 poppins">
                    {testimonial.company}
                  </p>
                )}

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm text-gray-500 leading-relaxed poppins mb-5 flex-grow">
                  "{testimonial.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                    alt={testimonial.author}
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Marquee (Mobile) */}
        <div className="block md:hidden mt-4">
          <Marquee gradient={false} speed={40} className="py-4">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="w-[85vw] max-w-[320px] mx-3 h-full">
                <div className="bg-white rounded-xl border border-gray-200 p-5 h-full flex flex-col shadow-sm">
                  {/* Company name */}
                  {testimonial.company && (
                    <p className="text-sm font-bold text-gray-900 mb-2 poppins">
                      {testimonial.company}
                    </p>
                  )}

                  {/* Stars */}
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        size={12}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-xs text-gray-500 leading-relaxed poppins mb-4 flex-grow">
                    "{testimonial.review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
                    <img
                      src={testimonial.avatar}
                      className="w-8 h-8 rounded-full object-cover shrink-0"
                      alt={testimonial.author}
                    />
                    <div>
                      <p className="font-semibold text-xs text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-[10px] text-gray-400">{testimonial.role}</p>
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

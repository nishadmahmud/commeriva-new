"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    details: "",
    captcha: "",
  });
  const [mouseGlow, setMouseGlow] = useState({ x: 50, y: 50 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouseGlow({ x, y });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 relative overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
      
      {/* Subtle mouse-follow neon glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(650px at ${mouseGlow.x}% ${mouseGlow.y}%, rgba(59,130,246,0.10), rgba(147,51,234,0.06) 40%, transparent 70%)`,
        }}
      />
      
      {/* Header Section */}
      <div className="relative z-10 text-center py-16 px-6 bg-gradient-to-r from-gray-100 to-teal-100 dark:from-neutral-800 dark:to-teal-900/20">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-full text-sm mb-6">
            <Mail size={16} className="mr-2" />
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-4 heroTitle">
            Get In Touch With Our Commeriva Sales Team
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl poppins mx-auto">
            Commeriva offers a complete business automation fulfillment system,
            designed for businesses like yours — so you can manage your inventory easily and efficiently.
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 pb-20 mt-10">
        {/* Left Side */}
        <motion.div
          variants={cardVariants}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 title my-4 mt-6">
            Contact Sales Team About Commeriva
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 poppins">
            Transform Your Sales Game! Curious about how Commeriva can elevate
            your team's performance? Our sales gurus are eager to show you the
            magic! Reach out to us by filling in the form on the right, and one
            of our experts will get in touch with you shortly.
          </p>

          <div className="space-y-6">
            <motion.div 
              variants={cardVariants}
              custom={1}
              className="poppins flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-200"
            >
              <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30">
                <MapPin className="text-teal-600 dark:text-teal-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Dhaka Office</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                 Aftabnagar, Dhaka, Bangladesh
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              custom={2}
              className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-200"
            >
              <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30">
                <Mail className="text-teal-600 dark:text-teal-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Email Address</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">info@commeriva.com</p>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              custom={3}
              className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-200"
            >
              <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30">
                <Phone className="text-teal-600 dark:text-teal-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Phone Number</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">+880 1677 182084</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div 
          variants={cardVariants}
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-2xl p-8 border border-gray-200 dark:border-white/10"
        >
          <h2 className="text-2xl md:text-3xl title font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30">
              <AiOutlineMessage className="text-teal-600 dark:text-teal-400 text-xl"></AiOutlineMessage>
            </div>
            Send Us A Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 poppins">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your phone number"
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject of your message"
                value={form.subject}
                onChange={handleChange}
                className="border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
            </div>

            <textarea
              name="details"
              placeholder="Write your message in details"
              value={form.details}
              onChange={handleChange}
              rows={4}
              className="border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 resize-none"
            />

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href='mailto: info@commeriva.com'
                className="w-full bg-gradient-to-r from-gray-800 to-gray-900 dark:from-teal-600 dark:to-teal-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 poppins cursor-pointer flex items-center gap-2 justify-center shadow-lg hover:shadow-xl"
              >
                Send Message 
                <Send size={18} />
              </Link>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}




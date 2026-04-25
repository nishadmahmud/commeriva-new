"use client";

import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    details: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center py-16 px-6 bg-gray-50 border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold poppins mb-4">
            <Mail size={14} />
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 heroTitle">
            Get In Touch With Our Team
          </h1>
          <p className="text-gray-500 max-w-2xl poppins mx-auto">
            Commeriva offers a complete business automation fulfillment system,
            designed for businesses like yours — so you can manage your inventory
            easily and efficiently.
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 pb-20 mt-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 heroTitle my-4 mt-6">
            Contact Sales Team
          </h2>
          <p className="text-gray-500 mb-8 poppins">
            Transform Your Sales Game! Curious about how Commeriva can elevate
            your team&apos;s performance? Our sales gurus are eager to show you
            the magic! Reach out to us by filling in the form, and one of our
            experts will get in touch with you shortly.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: MapPin,
                title: "Dhaka Office",
                text: "Aftabnagar, Dhaka, Bangladesh",
              },
              {
                icon: Mail,
                title: "Email Address",
                text: "info@commeriva.com",
              },
              {
                icon: Phone,
                title: "Phone Number",
                text: "+880 1677 182084",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="poppins flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="p-2 rounded-lg bg-blue-50">
                  <item.icon className="text-blue-600" size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 heroTitle mb-6 flex items-center gap-2">
            <div className="p-2 rounded-lg bg-orange-50">
              <AiOutlineMessage className="text-orange-600 text-xl" />
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
                className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 transition-all duration-200"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your phone number"
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 transition-all duration-200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 poppins">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 transition-all duration-200"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject of your message"
                value={form.subject}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 transition-all duration-200"
              />
            </div>

            <textarea
              name="details"
              placeholder="Write your message in details"
              value={form.details}
              onChange={handleChange}
              rows={4}
              className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400 transition-all duration-200 resize-none poppins"
            />

            <Link
              href="mailto: info@commeriva.com"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors poppins cursor-pointer flex items-center gap-2 justify-center shadow-sm"
            >
              Send Message
              <Send size={18} />
            </Link>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const IntegrationsPage = () => {

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        {/* <div className="text-center h-[75vh] flex md:flex-row flex-col gap-20 md:gap-0 md:justify-between  items-center md:mb-16 mb-10">
          <div>
            <h1 className="text-3xl md:text-5xl md:text-start font-semibold heroTitle text-gray-900 mb-4 text-center">
            Powerful <span className="text-teal-600">Integrations</span>
          </h1>
          <p className="md:text-lg text-sm poppins text-gray-600 max-w-2xl md:text-start leading-relaxed">
            Connect your favorite e-commerce platforms and courier services to
            streamline your operations with seamless automation.
          </p>
          </div>
          <div>

            <Image src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757703023.png" alt="integration" width={1000} height={1000} className="w-56 md:w-96 h-56 md:h-96" unoptimized></Image>
        
          </div>
        </div> */}

        {/* Payment Gateway Integrations */}
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold poppins mb-4">
            ✦ Integrations
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 heroTitle">
            Powerful Integrations
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto poppins">
            Connect your favorite e-commerce platforms and courier services to
            streamline your operations.
          </p>
        </motion.div>

        <section id="payment" className="mb-10">
          <motion.div 
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl heroTitle font-bold text-gray-900 mb-2">
              Payment Gateway Integrations
            </h2>
            <p className="text-gray-500 poppins">
              Secure and reliable payment processing with leading payment
              gateways
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 poppins"
          >
            {/* PayPal */}
            <motion.div 
              variants={cardVariants}
              custom={0}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="paypal"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408583.png"
                   unoptimized></Image>
                </div>
                <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full text-xs poppins font-medium">
                  Available
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                PayPal
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Global payment solution with buyer protection and seamless
                checkout.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Features:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• One-click Payments</li>
                  <li>• Buyer Protection</li>
                  <li>• Multi-currency Support</li>
                </ul>
              </div>
            </motion.div>

            {/* Stripe */}
            <motion.div 
              variants={cardVariants}
              custom={1}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="stripe"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408506.png"
                   unoptimized></Image>
                </div>
                <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full text-xs poppins font-medium">
                  Available
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Stripe
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Advanced payment infrastructure for businesses of all sizes.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Features:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Advanced APIs</li>
                  <li>• Fraud Detection</li>
                  <li>• Subscription Billing</li>
                </ul>
              </div>
            </motion.div>

            {/* SSL Commerz */}
            <motion.div 
              variants={cardVariants}
              custom={2}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="ssl"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408529.png"
                   unoptimized></Image>
                </div>
                <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full text-xs poppins font-medium">
                  Available
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SSL Commerz
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Leading payment gateway in Bangladesh with local banking
                support.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Features:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Local Bank Cards</li>
                  <li>• Mobile Banking</li>
                  <li>• Instant Settlement</li>
                </ul>
              </div>
            </motion.div>

            {/* Razorpay */}
            <motion.div 
              variants={cardVariants}
              custom={3}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="stripe"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408554.png"
                   unoptimized></Image>
                </div>

                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full poppins font-medium text-xs">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Razorpay
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete payment solution with smart routing and analytics.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Features:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Smart Routing</li>
                  <li>• Payment Analytics</li>
                  <li>• Auto Reconciliation</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Courier Service Integrations */}
        <section id="courier" className="my-20">
          <motion.div 
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold title text-gray-900 mb-2">
              Courier Service Integrations
            </h2>
            <p className="text-gray-600 poppins">
              Ship with Bangladesh's top courier companies for reliable
              nationwide delivery
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Pathao */}
            <motion.div 
              variants={cardVariants}
              custom={0}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="pathao"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408642.png"
                   unoptimized></Image>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium block mb-1">
                    Available
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pathao
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Fast and reliable delivery across Bangladesh with real-time
                tracking.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Same-day Delivery</li>
                  <li>• Cash on Delivery</li>
                  <li>• Live Tracking</li>
                </ul>
              </div>
            </motion.div>

            {/* dhl */}
            <motion.div 
              variants={cardVariants}
              custom={1}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="dhl"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408610.png"
                   unoptimized></Image>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium block mb-1">
                    Available
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">DHL</h3>
              <p className="text-gray-600 text-sm mb-4">
                Technology-driven courier service with advanced tracking
                capabilities.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Smart Routing</li>
                  <li>• Digital Receipts</li>
                  <li>• Customer Portal</li>
                </ul>
              </div>
            </motion.div>

            {/* fedex */}
            <motion.div 
              variants={cardVariants}
              custom={2}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="fedex"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408675.png"
                   unoptimized></Image>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium block mb-1">
                    Available
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FedEx</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive logistics solutions with nationwide coverage.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Warehouse Solutions</li>
                  <li>• Custom Delivery</li>
                  <li>• Nationwide Network</li>
                </ul>
              </div>
            </motion.div>

            {/* steadfast */}
            <motion.div 
              variants={cardVariants}
              custom={3}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="pathao"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408952.png"
                   unoptimized></Image>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium block mb-1">
                    Available
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Steadfast
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Fast and reliable delivery across Bangladesh with real-time
                tracking.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Same-day Delivery</li>
                  <li>• Cash on Delivery</li>
                  <li>• Live Tracking</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl title font-semibold text-gray-900 mb-2">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 poppins">
            Connect your platforms and grow your online store today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link target="_blank" href="https://wa.me/+8801677182084">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full poppins font-semibold text-sm cursor-pointer transition-colors shadow-sm group"
              >
                Get Started Today
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </Link>

            <Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform'>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border border-gray-300 text-gray-700 hover:bg-gray-100 px-8 py-3 rounded-full poppins font-semibold text-sm cursor-pointer transition-colors"
              >
                View Documentation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrationsPage;


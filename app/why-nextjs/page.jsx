"use client";
import {
  ArrowRight,
  Zap,
  Layers,
  Database,
  Shield,
  Rocket,
  Code,
  Server,
  Smartphone,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
} from "lucide-react";
import Globe from "../Components/Globe";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { TbTruckDelivery, TbWorld } from "react-icons/tb";
import { MdOutlineDocumentScanner } from "react-icons/md";
import Link from "next/link";

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
export default function WhyNextJS() {
  const [mouseGlow, setMouseGlow] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMouseGlow({ x, y })
  }
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description:
        "Automatic code splitting, image optimization, and performance enhancements out of the box for blazing fast load times.",
      highlight: "Up to 10x faster",
    },
    {
      icon: <TbWorld className="w-8 h-8" />,
      title: "Dynamic HTML Streaming",
      description:
        "Stream HTML as it's generated for faster perceived performance and superior user experience.",
      highlight: "Real-time rendering",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "React Server Components",
      description:
        "Render components on the server to dramatically reduce bundle size and improve performance.",
      highlight: "Smaller bundles",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Advanced Data Fetching",
      description:
        "Flexible data fetching with built-in caching, revalidation, and comprehensive error handling.",
      highlight: "Smart caching",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Universal CSS Support",
      description:
        "Built-in support for CSS Modules, Sass, CSS-in-JS, Tailwind, and all popular styling solutions.",
      highlight: "Any CSS framework",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Flexible Rendering",
      description:
        "Choose between static generation, server-side rendering, or client-side rendering per page.",
      highlight: "Your choice",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Capabilities",
      description:
        "Build complete applications with API routes using Web Standard Request and Response APIs.",
      highlight: "Frontend + Backend",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Powerful Middleware",
      description:
        "Run code before requests complete to modify responses, redirect, rewrite URLs, and more.",
      highlight: "Request control",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Advanced Routing System",
      description:
        "File-system based routing with nested layouts, loading states, error boundaries, and parallel routes.",
      highlight: "Intuitive structure",
    },
  ];

  const features2 = [
    {
      icon: <Code size={60}></Code>,
      title: "Web Order Management",
      description:
        "Simplify order management with Web Order Monitoring. Track sales orders and KPIs effortlessly.",
    },
    {
      icon: <MdOutlineDocumentScanner size={60}></MdOutlineDocumentScanner>,
      title: "Scan & Trace Technology",
      description:
        "Elevate your warehouse experience with Scan & Trace Technology. Enjoy superior inventory control.",
    },
    {
      icon: <TbTruckDelivery size={60}></TbTruckDelivery>,
      title: "Delivery Management",
      description:
        "Elevate your delivery operations with Dispatch & Delivery Management and save your valuable time.",
    },
  ];

  const feature1Ref = useRef(null);
    const feature2Ref = useRef(null);
    const feature3Ref = useRef(null);
  
    const feature1InView = useInView(feature1Ref, {
      once: true,
      margin: "-100px 0px -100px 0px",
    });
    const feature2InView = useInView(feature2Ref, {
      once: true,
      margin: "-100px 0px -100px 0px",
    });
    const feature3InView = useInView(feature3Ref, {
      once: true,
      margin: "-100px 0px -100px 0px",
    });
  
    const featureRefs = [feature1Ref, feature2Ref, feature3Ref];
    const featureInView = [feature1InView, feature2InView, feature3InView];
  

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Developer Experience",
      points: [
        "Hot reloading",
        "TypeScript support",
        "Built-in ESLint",
        "Zero config setup",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Production Ready",
      points: [
        "Enterprise scale",
        "Security best practices",
        "Performance monitoring",
        "Edge deployment",
      ],
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Standard",
      points: [
        "Used by Fortune 500",
        "Active community",
        "Regular updates",
        "Long-term support",
      ],
    },
  ];

  const companies = [
    { 
      name: "Netflix", 
      logo: (
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-red-600">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" 
            alt="Netflix" 
            className="w-7 h-7"
          />
        </div>
      ), 
      users: "230M+" 
    },
    { 
      name: "TikTok", 
      logo: (
        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        </div>
      ), 
      users: "1B+" 
    },
    { 
      name: "Twitch", 
      logo: (
        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
          </svg>
        </div>
      ), 
      users: "140M+" 
    },
    { 
      name: "Spotify", 
      logo: (
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
      ), 
      users: "500M+" 
    },
    { 
      name: "OpenAI", 
      logo: (
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border" style={{ borderColor: '#74aa9c' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" 
            alt="OpenAI" 
            className="w-7 h-7"
          />
        </div>
      ), 
      users: "100M+" 
    },
    { 
      name: "Vercel", 
      logo: (
        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 22.525H0l12-21.05 12 21.05z"/>
          </svg>
        </div>
      ), 
      users: "1M+" 
    },
  ];

  const stats = [
    {
      number: "10x",
      label: "Faster builds with Turbopack",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      number: "700ms",
      label: "Faster local server startup",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      number: "4x",
      label: "Faster code updates",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      number: "2M+",
      label: "Active developers",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
      {/* Subtle mouse-follow neon glow (above bg, below content) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            `radial-gradient(650px at ${mouseGlow.x}% ${mouseGlow.y}%, rgba(59,130,246,0.10), rgba(147,51,234,0.06) 40%, transparent 70%)`,
        }}
      />
      
      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center h-[90vh] flex flex-col justify-center items-center mb-10"
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 dark:border-white/10 rounded-full px-4 py-2 mb-8 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              The React Framework for Production
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium heroTitle text-gray-700 dark:text-gray-300 mb-8">
            Why Choose{" "}
            <span className="relative font-semibold text-gray-900 dark:text-gray-100">
              Next.js
              <div className="absolute -bottom-4 left-0 right-0 h-1 border-b-4 border-dashed border-gray-300 dark:border-gray-600"></div>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            The React framework that gives you the best developer experience
            with all the features you need for production: hybrid static &
            server rendering, smart bundling, route pre-fetching, and more.
          </p>

          <div className="flex flex-col sm:flex-row md:gap-6 gap-3 justify-center items-center">
            <Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform' className="group relative overflow-hidden border-2 border-gray-300 dark:border-white/20 text-teal-500 dark:text-teal-400 md:px-10 px-12 md:py-3 py-2 rounded-full hover:text-white transition-colors duration-300 flex items-center gap-2 text-lg font-semibold cursor-pointer">
              <span className="absolute inset-0 bg-primary-color transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative md:text-base text-sm">Get Started</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border-2 border-gray-300 dark:border-white/20 text-teal-500 dark:text-teal-400 px-8 md:py-3 py-2 rounded-full hover:border-gray-200 dark:hover:border-white/30 transition-colors font-semibold cursor-pointer md:text-base text-sm">
              View Documentation
            </button>
          </div>
        </motion.div>

         <motion.div 
           variants={titleVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="md:mb-20 mb-10"
         >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl title font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
           Boost your supply chain efficiency
        </h2>
        <p className="mt-4 md:text-lg poppins text-gray-600 dark:text-gray-300">
         Comprehensive android app for distribution management: orders, SKU scanning, tracking, metrics, and vehicle monitoring in one solution
        </p>
      </div>
      <div className="flex mt-10 justify-between md:flex-row-reverse items-center flex-col-reverse">
        {/* Left Side - Scrollable Content */}
        <div className="overflow-y-auto">
          <div className="max-w-xl w-full">
             {features2.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                className="group md:p-6 p-4 border-b last:border-b-0 border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-neutral-800/30 dark:to-neutral-900/40 md:bg-transparent md:dark:bg-transparent md:from-transparent md:to-transparent hover:bg-gray-50 dark:hover:bg-neutral-800/50 active:bg-gray-100 dark:active:bg-neutral-800/70 transition-colors duration-200"
              >
                <div className="md:flex md:items-center justify-start space-x-6">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="rounded-full flex items-center md:justify-center transition-shadow duration-300 primary-text-color">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 my-2 text-start transition-colors duration-300 poppins">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-3 text-start max-w-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Sticky Image */}
        <div className="md:w-1/2 md:sticky top-0">
          <div className="md:flex items-center justify-center md:overflow-hidden">
            {/* Background Pattern */}
            <div>
              <Globe></Globe>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6 leading-11 title">
              Everything you need to build
              <br />
              <span className="text-gray-500 dark:text-gray-400">great products on the web</span>
            </h2>
            <div className="w-24 h-1 bg-gray-900 dark:bg-gray-100 mx-auto"></div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                className="group relative p-8 rounded-2xl border-2 border-gray-100 dark:border-white/10 shadow-md md:shadow-none dark:shadow-lg dark:md:shadow-none hover:border-teal-600 dark:hover:border-teal-400 active:border-teal-600 dark:active:border-teal-400 active:shadow-xl transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-gray-50/50 dark:from-neutral-900 dark:to-neutral-950/80 md:bg-white md:dark:bg-neutral-900"
              >
                <div className="absolute top-4 right-4 text-xs font-bold text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-white/10 rounded-full px-3 py-1 bg-gray-50 dark:bg-neutral-800">
                  {feature.highlight}
                </div>

                <div className="mb-6">
                  <div className="inline-flex p-3 border-2 border-gray-200 dark:border-white/10 rounded-xl text-gray-700 dark:text-gray-300 group-hover:border-teal-600 dark:group-hover:border-teal-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-all">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 w-[97%] mx-auto left-0 right-0 h-[2px] bg-teal-600 dark:bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-full"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center mb-16 title">
            Why developers and companies choose{" "}
            <span className="text-gray-600 dark:text-gray-400">Next.js ?</span>
          </h3>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                custom={index}
                className="text-center poppins"
              >
                <div className="flex flex-col items-center">
                  <div className="inline-flex p-4 border-2 border-gray-200 dark:border-white/10 rounded-full mb-6 bg-white dark:bg-neutral-900">
                    {benefit.icon}
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                      {benefit.title}
                    </h4>
                    <ul className="space-y-3 text-left inline-block">
                      {benefit.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <span className="text-gray-600 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <h3 className="text-2xl md:text-3xl title font-semibold text-gray-900 dark:text-gray-100 text-center mb-2">
            Trusted by teams at
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12">
            Powering applications used by millions worldwide
          </p>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                className="group text-center p-6 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm md:shadow-none dark:shadow-md dark:md:shadow-none hover:border-gray-400 dark:hover:border-white/20 active:border-gray-400 dark:active:border-white/20 hover:shadow-lg active:shadow-lg transition-all bg-gradient-to-br from-white to-gray-50/40 dark:from-neutral-900 dark:to-neutral-950/60 md:bg-white md:dark:bg-neutral-900"
              >
                <div className="flex justify-center mb-3">{company.logo}</div>
                <div className="font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {company.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {company.users} users
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Performance Stats */}
        <motion.div 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="md:text-4xl text-3xl font-semibold title text-gray-900 dark:text-gray-100 mb-6">
              Built on a foundation of fast,
              <br />
              production-grade tooling
            </h3>
            <div className="w-24 h-1 bg-gray-900 dark:bg-gray-100 mx-auto"></div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 poppins"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                className="text-center p-8 border-2 border-gray-200 dark:border-white/10 rounded-2xl shadow-md md:shadow-none dark:shadow-lg dark:md:shadow-none hover:border-gray-400 dark:hover:border-white/20 active:border-gray-400 dark:active:border-white/20 hover:shadow-lg active:shadow-xl transition-all group bg-gradient-to-br from-white to-gray-50/40 dark:from-neutral-900 dark:to-neutral-950/60 md:bg-white md:dark:bg-neutral-900"
              >
                <div className="inline-flex p-3 border border-gray-300 dark:border-white/10 rounded-full mb-4 group-hover:border-gray-500 dark:group-hover:border-white/20 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center border-2 border-gray-200 dark:border-white/10 rounded-3xl p-16 shadow-lg md:shadow-none dark:shadow-xl dark:md:shadow-none hover:border-gray-400 dark:hover:border-white/20 active:border-gray-400 dark:active:border-white/20 transition-colors bg-gradient-to-br from-white to-gray-50/30 dark:from-neutral-900 dark:to-neutral-950/50 md:bg-white md:dark:bg-neutral-900"
        >
          <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-6 heroTitle">
            Ready to get started?
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto poppins">
            Join millions of developers building the future of the web with
            Next.js. Start your journey today and experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform'>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden border-2 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 px-12 py-4 cursor-pointer rounded-full hover:text-white transition-colors duration-300 flex items-center gap-3 text-lg font-semibold"
              >
              <span className="absolute inset-0 bg-primary-color transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative">Start Building Today</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-neutral-900"></div>
                <div className="w-8 h-8 bg-gray-400 dark:bg-gray-500 rounded-full border-2 border-white dark:border-neutral-900"></div>
                <div className="w-8 h-8 bg-gray-500 dark:bg-gray-400 rounded-full border-2 border-white dark:border-neutral-900"></div>
              </div>
              <span className="text-sm">Join 1M+ developers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

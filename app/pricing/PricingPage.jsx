"use client";
import { useEffect, useState } from "react";
import { Check, X, Star, Zap, Crown } from "lucide-react";
import { CircleDot } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function Pricing() {
  const categories = ["Corporate-Website", "E-Commerce", "Portfolio"];
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "E-Commerce";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && categories.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

   const pricingPlans = {

    "Corporate-Website": [
      {
        name: "Starter",
        description: "Perfect for small shops just starting their journey",
      priceUSD: "$199",
      priceBDT: "৳19999",
        period: "/one time",
        features: [
          "5 Pages (Home, About, Services, Contact, Portfolio)",
          "All Static Pages",
          "Mobile Responsive Design",
          "Standard Speed Optimization",
          "Basic SEO Setup",
        ],
        serviceCharge: [
        {priceBDT: '৳300'},
        {priceUSD: '$5'}
        ],
        buttonText: "Choose Plan",
        popular: false,
        icon: Star,
        color: "from-slate-50 to-slate-100",
        borderColor: "border-slate-200",
      },
      {
        name: "Professional",
        description: "For growing businesses & agencies",
        priceUSD: "$499",
      priceBDT: "৳49999",
      serviceCharge: [
        {priceBDT: '৳800'},
        {priceUSD: '$15'}
        ],
        period: "/one time",
        features: [
          "10+ Custom Pages",
          "Advanced Responsive UI/UX Design",
          "SEO Optimization + Sitemap",
          "Fast Loading & Security Setup",
          "Blog Module",
          
        ],
        buttonText: "Choose Plan",
        popular: true,
        icon: Zap,
        color: "from-blue-50 to-indigo-50",
        borderColor: "border-blue-200",
      },
      {
        name: "Enterprise",
        description: "Everything you need for established businesses",
        priceUSD: "$1049",
      priceBDT: "৳1,49,999",
     serviceCharge: [
        {priceBDT: '৳1200'},
        {priceUSD: '$25'}
        ],
        period: "/one time",
        features: [
          "Tailored for large businesses & corporations",
          "Unlimited Pages & Features",
          "Custom Design & Functionality",
          "Advanced SEO & Analytics Integration",
          "API & Third-Party Integrations",
          "Ongoing Maintenance & Support",
          "Dedicated Project Manager"
        ],
        buttonText: "Choose Plan",
        popular: false,
        icon: Crown,
        color: "from-purple-50 to-pink-50",
        borderColor: "border-purple-200",
      },
      
    ],

    "E-Commerce": [
      {
        name: "Starter",
        description: "Perfect for small shops just starting their journey",
        priceUSD: "$499",
      priceBDT: "৳49,999",
      serviceCharge: [
        {priceBDT: '৳300'},
        {priceUSD: '$5'}
        ],
        period: "/one time",
        features: [
          "Up to 500 products",
          "Best for new online shops",
          "Online store fronts",
          "1 Staff Account",
          "Mobile responsive",
        ],
        buttonText: "Choose Plan",
        popular: false,
        icon: Star,
        color: "from-slate-50 to-slate-100",
        borderColor: "border-slate-200",
      },
      {
        name: "Growth",
        description: "Ideal for growing online stores with more needs",
        priceUSD: "$999",
      priceBDT: "৳99,999",
      serviceCharge: [
        {priceBDT: '৳800'},
        {priceUSD: '$15'}
        ],
        period: "/one time",
        features: [
          "Up to 1,000 products",
          "Permium Online Stores",
          "3 Staff Account",
          "Discount Coupon & Campaigns",
          "Advanced analytics",
          "Admin Dashboard (CMS Advanced)",
        ],
        buttonText: "Choose Plan",
        popular: true,
        icon: Zap,
        color: "from-blue-50 to-indigo-50",
        borderColor: "border-blue-200",
      },
      {
        name: "Professional",
        description: "Everything you need for established businesses",
        priceUSD: "$2499",
      priceBDT: "৳2,50,000",
      serviceCharge: [
        {priceBDT: '৳1200'},
        {priceUSD: '$25'}
        ],
        period: "/one time",
        features: [
          "Unlimited products",
          "Advance Custom theme (UI/UX)",
          "Advanced analytics dashboard",
          "10 Staff Account",
          "Marketing Tools (Email & SMS Marketing)",
          "Admin Dashboard (CMS Pro)",
        ],
        buttonText: "Choose Plan",
        popular: false,
        icon: Crown,
        color: "from-purple-50 to-pink-50",
        borderColor: "border-purple-200",
      },
      {
        name: "Enterprise",
        description: "Everything you need for established businesses",
       priceUSD: "Lets Discuss",
      priceBDT: "Lets Discuss",
        period: "",
        features: [
          "Unlimited products",
          "Multi-store ",
          "AI Product recommendation & smart search",
          "CMS Enterprise",
          "Unlimited Staff Accounts",
          "Custom Integration & Feature Per Buisness",
          "Custom Mobile App (Android & IOS)",
        ],
        buttonText: "Choose Plan",
        popular: false,
        icon: Crown,
        color: "from-purple-50 to-pink-50",
        borderColor: "border-purple-200",
      },
    ],

    "Portfolio": [
      {
        name: "Starter",
        description: "Perfect for small shops just starting their journey",
        priceUSD: "$199",
      priceBDT: "৳18,999",
      serviceCharge: [
        {priceBDT: '৳300'},
        {priceUSD: '$5'}
        ],
        period: "/one time",
        features: [
          "5 Pages (Home, About, Services, Contact, Portfolio)",
          "All Static Pages",
          "Mobile Responsive Design",
          "Standard Speed Optimization",
          "Basic SEO Setup",
        ],
        buttonText: "Choose Plan",
        popular: false,
        icon: Star,
        color: "from-slate-50 to-slate-100",
        borderColor: "border-slate-200",
      },
      {
        name: "Professional",
        description: "For growing businesses & agencies",
        priceUSD: "$499",
      priceBDT: "৳28,999",
      serviceCharge: [
        {priceBDT: '৳800'},
        {priceUSD: '$15'}
        ],
        period: "/one time",
        features: [
          "10+ Custom Pages",
          "Advanced Responsive UI/UX Design",
          "SEO Optimization + Sitemap",
          "Fast Loading & Security Setup",
          "Blog Module",
          
        ],
        buttonText: "Choose Plan",
        popular: true,
        icon: Zap,
        color: "from-blue-50 to-indigo-50",
        borderColor: "border-blue-200",
      },
      {
        name: "Enterprise",
        description: "Everything you need for established businesses",
        priceUSD: "$1049",
      priceBDT: "৳1,49,999",
      serviceCharge: [
        {priceBDT: '৳1200'},
        {priceUSD: '$25'}
        ],
        period: "/one time",
        features: [
          "Tailored for large businesses & corporations",
          "Unlimited Pages & Features",
          "Custom Design & Functionality",
          "Advanced SEO & Analytics Integration",
          "API & Third-Party Integrations",
          "Ongoing Maintenance & Support",
          "Dedicated Project Manager"
        ],
        buttonText: "Choose Plan",
        popular: false,
        icon: Crown,
        color: "from-purple-50 to-pink-50",
        borderColor: "border-purple-200",
      },
      
    ],

    
   
    
  };

   const [userCountry, setUserCountry] = useState(null);

     const [ip, setIp] = useState("");

  useEffect(() => {
   
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(data => setIp(data.ip))
      .catch(() => setIp("Could not fetch IP"));
  }, []);

  // console.log(ip);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch( `https://ipapi.co/${ip}/json`);
        const data = await res.json();
        setUserCountry(data?.country); 
        console.log(data);
      } catch (err) {
        console.error("Error fetching location:", err);
        setUserCountry("US"); // fallback to USD
      }
    };
    
    if(ip){
      fetchLocation();
    }
  }, [ip]);


// console.log(pricingPlans);
 

  // Comparison Table Features
  const comparisonFeatures = [
    {
      category: "Core Features",
      items: [
        { name: "Responsive design (mobile + tablet + desktop)", basic: true, standard: true, premium: true },
        { name: "Contact form + social links", basic: true, standard: true, premium: true },
        { name: "Advanced performance optimization", basic: false, standard: false, premium: true },
        { name: "Google Analytics", basic: false, standard: true, premium: true },
        { name: "Speed & security baseline setup (SSL guidance)", basic: true, standard: true, premium: true },
        { name: "Performance (CDN, caching) & security hardening", basic: false, standard: false, premium: true },
        { name: "Mobile App", basic: false, standard: false, premium: true },
      ],
    },
    {
      category: "SEO",
      items: [
        { name: "Basic on-page SEO", basic: true, standard: true, premium: true },
        {
          name: "Advanced SEO setup (structured data + sitemap)",
          basic: false,
          standard: true,
          premium: true,
        },
        {
          name: "SEO strategy + content recommendations",
          basic: false,
          standard: false,
          premium: true,
        },
        
       
      ],
    },
    {
      category: "CMS",
      items: [
        
        {
          name: "Blog / News CMS integration",
          basic: false,
          standard: true,
          premium: true,
        },
        {
          name: "Advance POS",
          basic: false,
          standard: true,
          premium: true,
        },
        {
          name: "Multi language",
          basic: false,
          standard: false,
          premium: true,
        },
        {
          name: "CMS Premium",
          basic: false,
          standard: false,
          premium: true,
        },
        {
          name: "Basic AI Chatbot  integration",
          basic: false,
          standard: false,
          premium: true,
        },
      ],
    },
    {
      category: "Support",
      items: [
        {
          name: "Community Support",
          basic: true,
          standard: false,
          premium: false,
        },
        { name: "Email Support", basic: false, standard: true, premium: true },
        {
          name: "24/7 Phone Support",
          basic: false,
          standard: false,
          premium: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
      
      {/* Header Section */}
      <div className="relative z-10 md:py-16 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm mb-6">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-1.5 mt-0.5"></span>
              Building Websites That Grow With You
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 leading-snug heroTitle">
              Start for Free, Scale as You <br className="hidden sm:block" />
              Grow with{" "}
              <span className="bg-yellow-300 px-2 text-gray-700">
                Commeriva
              </span>{" "}
              Solutions
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We only charge for what you use. If you have a quiet month, pay
              less. If your workload spikes, we can handle it. And no matter how
              simple or complex an operation is, it counts as one and costs the
              same.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex bg-gray-100 rounded-3xl p-1"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`md:px-6 px-4 py-2 rounded-3xl font-medium transition-all cursor-pointer duration-300 md:text-base text-xs ${
                  selectedCategory === cat
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`grid grid-cols-1 md:grid-cols-2 ${selectedCategory !== 'E-Commerce' ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6 md:gap-8`}
          >
            {pricingPlans[selectedCategory].map((plan, index) => {
              const IconComponent = plan.icon;
              return (
               <motion.div
                 key={plan.name}
                 variants={cardVariants}
                 custom={index}
                 whileHover="hover"
                 className={`relative flex flex-col h-full w-full rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl bg-gradient-to-br poppins border-2 ${
                   plan.popular ? "ring-2 ring-blue-100 shadow-xl md:scale-105 z-10" : "shadow-md scale-100 z-0"
                 } ${
                   plan.popular 
                     ? "from-blue-50 to-indigo-50 border-blue-200" 
                     : "from-slate-50 to-slate-100 border-slate-200"
                 }`}
               >
                 {plan.popular && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                     <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs md:text-sm font-semibold px-4 py-1.5 md:py-2 rounded-full shadow-lg whitespace-nowrap">
                       Most Popular
                     </span>
                   </div>
                 )}

                 {/* header */}
                 <div className="flex items-center mb-4">
                   <div
                     className={`p-3 rounded-2xl ${
                       plan.popular ? "bg-blue-100" : "bg-white"
                     } shadow-sm`}
                   >
                     <IconComponent
                       className={`w-6 h-6 ${
                         plan.popular ? "text-teal-500" : "text-gray-700"
                       }`}
                     />
                   </div>
                   <div className="ml-4">
                     <h3 className="text-2xl font-semibold text-gray-900">
                       {plan.name}
                     </h3>
                   </div>
                 </div>

                 {/* description */}
                 <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                   {plan.description}
                 </p>

                 {/* price */}
                 <div className="mb-8">
                   <div className="flex items-baseline">
                     <span className="md:text-3xl text-2xl font-semibold text-gray-900">
                       {userCountry === "BD" ? plan.priceBDT : plan.priceUSD}
                     </span>
                     <span className="text-gray-500 ml-2 text-sm">{plan.period}</span>
                   </div>
                 </div>

                 {/* features */}
                 <ul className="space-y-4 mb-8 text-sm">
                 {plan.features.map((feature, i) => (
                   <li key={i} className="flex items-start">
                     <div className="flex-shrink-0 mt-1">
                       <CircleDot className="w-4 h-4 text-gray-800" />
                     </div>
                     <span className="ml-3 text-gray-700 leading-relaxed">{feature}</span>
                   </li>
                 ))}

                 {plan?.serviceCharge && (
                   <li className="flex items-start">
                     <div className="flex-shrink-0 mt-1">
                       <CircleDot className="w-4 h-4 text-gray-800" />
                     </div>
                     <span className="ml-3 text-gray-700 leading-relaxed">
                       Monthly Charge:{" "}
                       {userCountry === "BD"
                         ? plan.serviceCharge.find(c => c.priceBDT)?.priceBDT
                         : plan.serviceCharge.find(c => c.priceUSD)?.priceUSD}
                       {" "}
                      
                     </span>
                   </li>
                 )}
               </ul>

                 {/* button pinned to bottom */}
                 <div className="mt-auto">
                   <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform" className="cursor-pointer block">
                     <motion.button
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className={`w-full py-3 rounded-full font-semibold text-base transition-all duration-200 ${
                         plan.popular
                           ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl"
                           : "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
                       }`}
                     >
                       {plan.buttonText}
                     </motion.button>
                   </Link>
                 </div>
               </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 title">
              Compare All Features
            </h2>
            <p className="text-lg text-gray-600">
              See what's included in each plan
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 p-6 border-b border-gray-200 bg-gray-50">
              <div className="font-semibold text-gray-900 text-lg">
                Features
              </div>
              <div className="text-center font-semibold text-gray-900">
                Basic
              </div>
              <div className="text-center font-semibold text-gray-900">
                Standard
              </div>
              <div className="text-center font-semibold text-gray-900">
                Premium
              </div>
            </div>

            {comparisonFeatures.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <div className="bg-slate-50 px-6 py-4 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {section.category}
                  </h4>
                </div>
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="grid grid-cols-4 p-6 border-b border-gray-100 hover:bg-slate-50 transition-colors duration-150"
                  >
                    <div className="text-gray-700 font-medium">{item.name}</div>
                    <div className="flex justify-center">
                      {item.basic ? (
                        <Check className="w-6 h-6 text-green-500" />
                      ) : (
                        <X className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {item.standard ? (
                        <Check className="w-6 h-6 text-green-500" />
                      ) : (
                        <X className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {item.premium ? (
                        <Check className="w-6 h-6 text-green-500" />
                      ) : (
                        <X className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 heroTitle mb-1">
              Ready to get started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 poppins">
              Join thousands of satisfied customers who trust our platform
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-color text-white px-10 py-3 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 shadow-lg"
            >
              Start Your Free Trial
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

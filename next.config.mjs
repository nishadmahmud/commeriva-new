/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.outletexpense.xyz",
        pathname: "/uploads/**",
      },
      { protocol: "https", hostname: "www.appledaddybd.com" },
      { protocol: "https", hostname: "perfectgadgetbd.com" },
      { protocol: "https", hostname: "www.brothersmobilebd.com" },
      { protocol: "https", hostname: "squadinnovators.com" },
      { protocol: "https", hostname: "outletexpense.com" },
      { protocol: "https", hostname: "www.perfectgadgetbd.com" },
      { protocol: "https", hostname: "www.emusfashion.com" },
      { protocol: "https", hostname: "taibamart.com" },
    ],
  },
};

export default nextConfig;

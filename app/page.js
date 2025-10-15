"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import HeroPage from "./Components/HeroPage";
import TrustedBy from "./Components/TrustedBy";
import OurProducts from "./Components/OurProducts";
import Category from "./Components/Category";
import OurStacks from "./Components/OurStacks";
import Timeline from "./Components/Timeline";
import SupplyChain from "./Components/SupplyChain";
import ClientReview from "./Components/ClientReview";
import Blog from "./Components/Blog";
import FAQSection from "./Components/FAQSection";
import TestSection from "./Components/TestSection";
import OurServices from "./Components/OurService";
import Navbar from "./Components/Navbar";

export const userId = 217;
export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative">
      {/* Mouse-tracking gradient overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.08), transparent 80%)`,
        }}
      />

      <HeroPage />
      <OurServices />
      <Category />
      <OurStacks />
      <SupplyChain />
      <ClientReview />
      <Blog />
      <FAQSection />
    </div>
  );
}

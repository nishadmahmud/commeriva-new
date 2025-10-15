"use client";

import { Suspense, useEffect, useState } from "react";
import Pricing from "./PricingPage";

export default function PricingPage() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const onMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div className="relative overflow-hidden" onMouseMove={onMouse} style={{ ["--x"]: `${pos.x}px`, ["--y"]: `${pos.y}px` }}>
      {/* subtle mouse-follow glow */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{ background: `radial-gradient(650px circle at var(--x) var(--y), rgba(59,130,246,0.08), transparent 70%)` }} />
      <div className="pointer-events-none absolute inset-0 z-0 hidden dark:block" style={{ background: `radial-gradient(700px circle at var(--x) var(--y), rgba(255,255,255,0.06), transparent 75%)` }} />
      <Suspense fallback={<div>Loading...</div>}>
        <Pricing />
      </Suspense>
    </div>
  );
}

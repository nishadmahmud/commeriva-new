"use client";
import React, { useState } from "react";

export default function SectionGlow({ children, from = "rgba(99,102,241,0.12)", mid = "rgba(99,102,241,0.06)", radius = 600, className = "" }) {
  const [pos, setPos] = useState({ x: 50, y: 40 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div className={`relative overflow-x-hidden ${className}`} onMouseMove={onMove}>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(${radius}px at ${pos.x}% ${pos.y}%, ${from}, ${mid} 35%, transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}

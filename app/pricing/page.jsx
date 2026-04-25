"use client";

import { Suspense } from "react";
import Pricing from "./PricingPage";

export default function PricingPage() {
  return (
    <div className="bg-white">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        }
      >
        <Pricing />
      </Suspense>
    </div>
  );
}

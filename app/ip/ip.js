"use client";

import { useEffect, useState } from "react";

export default function ShowMyIp() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    // Get public IP from ipify
    fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(data => setIp(data.ip))
      .catch(() => setIp("Could not fetch IP"));
  }, []);

  return (
    <div className="p-4 text-lg font-mono">
      🌐 Your IP: {ip || "Loading..."}
    </div>
  );
}

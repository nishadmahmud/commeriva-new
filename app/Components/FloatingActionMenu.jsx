'use client'

import { Headset } from "lucide-react";
import React, { useState } from "react";
import { ChildButton, FloatingMenu, MainButton } from "react-floating-button-menu";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const FloatingActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ zIndex: 9999 }}>
      <FloatingMenu
        style={{ zIndex: 9999 }}
        slideSpeed={500}
        direction="up"
        spacing={8}
        isOpen={isOpen}
      >
        <MainButton
          iconResting={<Headset style={{ fontSize: 20, color: "#262626" }} />}
          iconActive={<MdClose style={{ fontSize: 20, color: "#262626" }} />}
          backgroundColor="#ffffff"
          onClick={() => setIsOpen(!isOpen)}
          size={50}
        />
        {/* Facebook */}
        <ChildButton
          icon={<FaFacebook style={{ fontSize: 18, color: "#ffffff" }} />}
          backgroundColor="#1877F2"
          size={40}
          onClick={() => window.open("https://www.facebook.com/profile.php?id=61579322220482", "_blank")}
        />
        {/* WhatsApp */}
        <ChildButton
          icon={<IoLogoWhatsapp style={{ fontSize: 20, color: "#ffffff" }} />}
          backgroundColor="#25D366"
          size={40}
          onClick={() => window.open("https://wa.me/+8801677182084", "_blank")}
        />
        {/* Phone */}
        <ChildButton
          icon={<FaPhoneAlt style={{ fontSize: 14, color: "#ffffff" }} />}
          backgroundColor="#0f766e"
          size={40}
          onClick={() => window.open("tel: +8801677182084")}
        />
      </FloatingMenu>
    </div>
  );
};

export default FloatingActionMenu;

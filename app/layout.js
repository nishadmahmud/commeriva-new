import {
  Geist,
  Geist_Mono,
  Poppins,
  Libertinus_Math,
  Montserrat,
  Saira,
} from "next/font/google";
import "./globals.css";

import Component from "./Components/AvatarChat";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  display: "swap",
});

const heroTitle = Montserrat({
  variable: "--font-herotitle",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  display: "swap",
});

const title = Saira({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  display: "swap",
});

const logoFont = Libertinus_Math({
  variable: "--font-logoFont",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Commeriva",
  description: "Your Custom E-commerce Solution",
   icons: {
    icon: '/fav.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <Component />
      <body
        className={`${geistMono.variable} ${title.variable} ${heroTitle.variable} ${logoFont.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative">
            <Navbar />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

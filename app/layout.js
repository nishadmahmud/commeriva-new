import {
  Geist,
  Geist_Mono,
  Poppins,
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

const logoFont = { variable: "--font-logoFont" }; // Placeholder or remove if not needed

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Commeriva – Smart Web & Digital Solutions',
    template: '%s | Commeriva',
  },
  description:
    'Commeriva builds powerful, conversion-driven websites using modern frameworks like Next.js, React, and Laravel. Elevate your digital presence with us.',
  keywords: [
    'Next.js Web Development',
    'Commeriva',
    'React Development',
    'Corporate Website Bangladesh',
    'E-commerce Website',
    'Web Agency Dhaka',
  ],
  openGraph: {
    title: 'Commeriva – Smart Web & Digital Solutions',
    description:
      'We help businesses grow through cutting-edge websites and digital solutions. Experience performance, design, and growth with Commeriva.',
    url: 'https://www.commeriva.com',
    siteName: 'Commeriva',
    images: [
      {
        url: 'https://www.commeriva.com/fav.png',
        width: 1200,
        height: 630,
        alt: 'Commeriva Website Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@commeriva',
    title: 'Commeriva – Smart Web & Digital Solutions',
    description:
      'Modern, scalable websites built with performance in mind. Let’s grow your business digitally.',
    images: ['https://www.commeriva.com/fav.png'],
  },
  alternates: {
    canonical: 'https://www.commeriva.com',
  },
  icons: {
    icon: '/fav.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${title.variable} ${heroTitle.variable} ${logoFont.variable} ${poppins.variable} antialiased`}
      >
        <Component />
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

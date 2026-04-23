import { GoogleReCaptchaProvider } from "@/components/providers/GoogleReCaptchaProvider";
import type { Metadata } from "next";
import { Abril_Fatface, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const abrilFatface = Abril_Fatface({
  variable: "--font-abril-fatface",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "OpenSixty",
  description:
    "OpenSixty Zimbabwe provides trusted security solutions including guarding services, rapid response, smart monitoring and risk prevention for businesses and homes across Zimbabwe.",
  keywords: [
    "security services Zimbabwe",
    "guarding services",
    "smart monitoring",
    "rapid response security",
    "corporate security Zimbabwe",
    "home security Zimbabwe",
  ],
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title:
      "OpenSixty Zimbabwe | 25+ Years of Quality & Professional Security Services",
    description:
      "Trusted security solutions including rapid response, guarding services and smart monitoring across Zimbabwe.",
    url: "https://opensixty.co.zw",
    siteName: "OpenSixty Zimbabwe",
    images: [
      {
        url: "https://OpenSixty.co.zw/wp-content/uploads/2024/07/how-we-make_-1024x682.jpg",
        width: 1200,
        height: 630,
        alt: "OpenSixty Zimbabwe - Trusted Security Services",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abrilFatface.variable} antialiased flex flex-col min-h-screen`}
      >
        <GoogleReCaptchaProvider>
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </GoogleReCaptchaProvider>
      </body>
    </html>
  );
}

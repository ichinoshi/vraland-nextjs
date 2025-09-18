import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "VRA Land - Premium Real Estate Developments",
  description:
    "Discover exceptional living experiences with VRA Land's premium real estate developments including Fairfield Residence, Sotera Township, and Lazule Resort.",
  keywords:
    "real estate, property development, condominium, resort, township, VRA Land, Oriental Mindoro, Philippines",
  authors: [{ name: "VRA Land" }],
  openGraph: {
    title: "VRA Land - Premium Real Estate Developments",
    description:
      "Discover exceptional living experiences with VRA Land's premium real estate developments including Fairfield Residence, Sotera Township, and Lazule Resort.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-primary-900">
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

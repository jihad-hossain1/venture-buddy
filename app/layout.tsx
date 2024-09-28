import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Venture Buddy - IT Solutions",
  description: "Innovative IT solutions to drive your business forward. Discover our range of technology services and expertise.",
  keywords: [
    "IT solutions",
    "technology consulting",
    "software development",
    "cloud services",
    "IT support",
    "cybersecurity",
    "enterprise solutions",
    "business technology",
    "Venture Buddy",
  ].join(", "),
  openGraph: {
    title: "Venture Buddy - Innovative IT Solutions",
    description: "Partner with Venture Buddy for cutting-edge IT solutions and technology services that empower your business.",
    url: "https://venturebuddy.vercel.app",
    images: [
      {
        url: "https://venturebuddy.vercel.app/og-image-it.jpg",
        width: 1200,
        height: 630,
        alt: "Venture Buddy - Innovative IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venture Buddy - IT Solutions for Business",
    description: "Providing tailored IT solutions and technology consulting to help businesses achieve their goals.",
    images: [
      {
        url: "https://venturebuddy.vercel.app/twitter-image-it.jpg",
        alt: "Venture Buddy - IT Solutions for Business",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

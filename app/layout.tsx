import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://ocean-dew-logistics-qg3q.vercel.app"),

  title: "Ocean Dew Logistics | Container Import & Shipping Services to Nigeria",

  description:
    "Ocean Dew Logistics provides reliable container import, freight forwarding and international shipping services into Nigeria. Fast customs clearance and trusted global partners.",

  keywords: [
    "logistics Nigeria",
    "container import Nigeria",
    "freight forwarding",
    "cargo shipping",
    "customs clearance",
    "ocean freight",
    "Ocean Dew Logistics",
  ],

  authors: [{ name: "Ocean Dew Logistics" }],

  openGraph: {
    title: "Ocean Dew Logistics",
    description:
      "Secure and reliable container import services into Nigeria.",
    url: "https://ocean-dew-logistics-qg3q.vercel.app",
    siteName: "Ocean Dew Logistics",
    images: [
      {
        url: "/images/ship3.png",
        width: 1200,
        height: 630,
        alt: "Container ship sailing with cargo containers",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ocean Dew Logistics",
    description:
      "Trusted container import and freight forwarding services into Nigeria.",
    images: ["/images/ship3.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  themeColor: "#0B3C5D",

  alternates: {
    canonical: "/",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LogisticsBusiness",
    name: "Ocean Dew Logistics",
    url: "https://oceandewlogistics.com",
    description:
      "Container import and freight forwarding services into Nigeria.",
    areaServed: "Nigeria",
    serviceType: [
      "Container Import",
      "Freight Forwarding",
      "Ocean Freight",
      "Customs Clearance",
    ],
  };
  return (
    <html lang="en">
      <body
        className={` ${inter.className}   antialiased`}>
         <script
       type="application/ld+json"
       dangerouslySetInnerHTML={{
         __html: JSON.stringify(structuredData),
       }}
     />
        {children}</body>
    </html>
  );
}

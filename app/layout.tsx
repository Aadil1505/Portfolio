import type { Metadata } from "next";
import { Geist, Geist_Mono, Kode_Mono } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import FooterSection from "@/components/global/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aadil's Portfolio",
    template: "%s | Aadil's Portfolio", // For page-specific titles
  },
  description: "A portfolio site explaining my projects and passion.",
  keywords: ["portfolio", "web developer", "projects", "Aadil"], // Add relevant keywords
  authors: [{ name: "Aadil Alli" }],
  creator: "Aadil Alli",
  
  // Open Graph metadata (for Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com", // Replace with your actual URL
    siteName: "Aadil's Portfolio",
    title: "Aadil's Portfolio",
    description: "A portfolio site explaining my projects and passion.",
    images: [
      {
        url: "https://i.imgur.com/sfAgStq.png", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Aadil's Portfolio Preview",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Aadil's Portfolio",
    description: "A portfolio site explaining my projects and passion.",
    creator: "@yourhandle", // Replace with your Twitter handle
    images: ["https://i.imgur.com/sfAgStq.png"], // Replace with your image
  },
  
  // Additional metadata
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
  
  // Icons
  icons: {
    icon: "/favicon.ico",
  },
  
  // Category
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kodeMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHeader />
          {children}
          <FooterSection/>
        </ThemeProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PreloaderProvider } from "@/components/providers/preloader-context";
import { Preloader } from "@/components/common/preloader";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://wisdomobioma.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Wisdom Obioma | Frontend Engineer",
    template: "%s | Wisdom Obioma",
  },
  description:
    "Frontend Engineer with 5 years of experience building performant, accessible, and deeply engaging web applications using React, Next.js, and TypeScript.",
  keywords: [
    "Wisdom Obioma",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "UI Engineer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Wisdom Obioma", url: BASE_URL }],
  creator: "Wisdom Obioma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Wisdom Obioma",
    title: "Wisdom Obioma | Frontend Engineer",
    description:
      "Frontend Engineer with 5 years of experience building performant, accessible, and deeply engaging web applications using React, Next.js, and TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wisdom Obioma — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Obioma | Frontend Engineer",
    description:
      "Frontend Engineer building performant, accessible, and deeply engaging web applications.",
    images: ["/og-image.png"],
    creator: "@wisdomobioma",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/favicon_io/favicon.ico",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
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
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased text-neutral-900 dark:text-[#F3F3F3]">
        <PreloaderProvider>
          <Preloader />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </PreloaderProvider>
      </body>
    </html>
  );
}

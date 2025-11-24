import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TechVenture - 혁신을 만드는 스타트업",
    template: "%s | TechVenture",
  },
  description: "최첨단 기술로 세상을 바꾸는 테크 스타트업. AI, 빅데이터, 클라우드 솔루션으로 비즈니스 혁신을 이끕니다.",
  keywords: ["스타트업", "테크 스타트업", "IT 기업", "혁신", "AI", "빅데이터", "클라우드", "벤처", "기술 기업"],
  authors: [{ name: "TechVenture" }],
  creator: "TechVenture",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://techventure.io",
    siteName: "TechVenture",
    title: "TechVenture - 혁신을 만드는 스타트업",
    description: "최첨단 기술로 세상을 바꾸는 테크 스타트업",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TechVenture" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechVenture - 혁신을 만드는 스타트업",
    description: "최첨단 기술로 세상을 바꾸는 테크 스타트업",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="canonical" href="https://techventure.io" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

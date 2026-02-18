import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NeuralX - AI 기반 비즈니스 인텔리전스 플랫폼",
    template: "%s | NeuralX",
  },
  description:
    "차세대 인공지능 기술로 비즈니스 인사이트를 자동화하는 AI 플랫폼. 실시간 데이터 분석, 예측 모델링, 자동화 워크플로우를 제공합니다.",
  keywords: [
    "AI 플랫폼",
    "인공지능",
    "비즈니스 인텔리전스",
    "데이터 분석",
    "머신러닝",
    "자동화",
    "SaaS",
    "스타트업",
    "딥러닝",
    "예측 분석",
  ],
  authors: [{ name: "NeuralX" }],
  creator: "NeuralX",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://neuralx.io",
    siteName: "NeuralX",
    title: "NeuralX - AI 기반 비즈니스 인텔리전스 플랫폼",
    description:
      "차세대 인공지능 기술로 비즈니스 인사이트를 자동화하는 AI 플랫폼",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NeuralX AI Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralX - AI 기반 비즈니스 인텔리전스 플랫폼",
    description:
      "차세대 인공지능 기술로 비즈니스 인사이트를 자동화하는 AI 플랫폼",
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
        <link rel="canonical" href="https://neuralx.io" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#09090b]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

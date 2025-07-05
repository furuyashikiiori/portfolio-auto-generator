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
  title: "Autofolio - ポートフォリオ自動生成",
  description: "簡単な入力で美しいポートフォリオサイトを自動生成。学生や開発者のための無料ツール。",
  keywords: ["ポートフォリオ", "履歴書", "CV", "自動生成", "学生", "開発者", "就活"],
  authors: [{ name: "Autofolio Team" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" }
    ]
  },
  openGraph: {
    title: "Autofolio - ポートフォリオ自動生成",
    description: "簡単な入力で美しいポートフォリオサイトを自動生成",
    type: "website",
    locale: "ja_JP"
  },
  twitter: {
    card: "summary_large_image",
    title: "Autofolio - ポートフォリオ自動生成",
    description: "簡単な入力で美しいポートフォリオサイトを自動生成"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

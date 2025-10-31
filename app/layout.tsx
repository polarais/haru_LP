import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Haru - AI-Powered Personal Diary",
  description: "A new kind of journaling experience that listens, writes, and understands. Switch between AI chat and traditional writing instantly.",
  keywords: ["diary", "journal", "AI", "mental health", "personal growth", "mood tracking"],
  authors: [{ name: "Haru Team" }],
  openGraph: {
    title: "Haru - AI-Powered Personal Diary",
    description: "Don't know what to write? Just talk. Haru listens, writes, and understands.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR", "ja_JP", "zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haru - AI-Powered Personal Diary",
    description: "Don't know what to write? Just talk. Haru listens, writes, and understands.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "next/navigation"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kiran Sadanand Rai - Data Analyst Portfolio",
  description:
    "Microsoft-certified Data Analyst with 3+ years of experience driving product and policy decisions through data. Specialized in healthcare and government analytics with expertise in SQL, Power BI, and experimentation.",
  keywords: [
    "Data Analyst",
    "Power BI",
    "SQL",
    "Healthcare Analytics",
    "Product Analytics",
    "Microsoft Certified",
    "Data Visualization",
  ],
  authors: [{ name: "Kiran Sadanand Rai" }],
  creator: "Kiran Sadanand Rai",
  openGraph: {
    title: "Kiran Sadanand Rai - Data Analyst Portfolio",
    description: "Microsoft-certified Data Analyst specializing in healthcare and government analytics",
    url: "https://your-portfolio-url.vercel.app",
    siteName: "Kiran Sadanand Rai Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Sadanand Rai - Data Analyst Portfolio",
    description: "Microsoft-certified Data Analyst specializing in healthcare and government analytics",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}

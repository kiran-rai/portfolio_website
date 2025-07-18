import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kiran Rai - Data Analyst Portfolio",
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
    title: "Kiran Rai - Data Analyst Portfolio",
    description: "Microsoft-certified Data Analyst specializing in healthcare and government analytics",
    url: "https://kiran-rai-portfolio.vercel.app/",
    siteName: "Kiran Rai Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Rai - Data Analyst Portfolio",
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
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JLGME7XD50" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JLGME7XD50');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

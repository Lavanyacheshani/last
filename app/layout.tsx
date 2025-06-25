import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-context"
import Script from "next/script"
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Explorative Tours - Sri Lanka Travel Agency",
  description: "Experience the beauty and culture of Sri Lanka with the island's leading travel agency",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Explorative Tours</title>
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <SpeedInsights />
        <Script id="scroll-reveal">
          {`
            function reveal() {
              var reveals = document.querySelectorAll(".reveal");
              for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                  reveals[i].classList.add("active");
                }
              }
            }
            window.addEventListener("scroll", reveal);
            reveal();
          `}
        </Script>
      </body>
    </html>
  )
}

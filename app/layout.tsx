import type { Metadata } from "next"
import { Young_Serif, Outfit } from "next/font/google"
import "./globals.css"

const young_serif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-young-serif",
})
const outfit = Outfit({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Frontend Mentor | Recipe page",
  description:
    "This is a solution for the Frontend Mentor 'Recipe page' challenge, coded by Darrick Fauvel.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${young_serif.variable} ${outfit.variable}`}>
      <body className="bg-fem-stone-100">{children}</body>
    </html>
  )
}

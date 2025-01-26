import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mohammad Ausaf Ali Haqqani - AI Research Scientist & Student",
  description: "Personal portfolio of Mohammad Ausaf Ali Haqqani, showcasing AI research, projects, and expertise",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}


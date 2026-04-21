import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Web Drug Twinn - TB Therapy Assistant",
  description: "AI-powered TB therapy monitoring for patients, nurses, admins, doctors",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b p-4 bg-background">
          <div className="container mx-auto flex justify-between">
            <Link href="/" className="text-2xl font-bold">
              💊 Drug Twinn TB
            </Link>
            <div>
              <Link href="/patients" className="mr-4">Patients</Link>
              <Link href="/alerts">Alerts</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-8">
          {children}
        </main>
      </body>
    </html>
  )
}


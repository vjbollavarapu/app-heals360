import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AuthProvider } from "@/lib/auth"
import { AppLayout } from "@/components/layout/app-layout"
import { AuthGuard } from "@/components/auth/auth-guard"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body>
        <AuthProvider>
          <AuthGuard>
            <Suspense fallback={<div>Loading...</div>}>
              <AppLayout>{children}</AppLayout>
            </Suspense>
          </AuthGuard>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}

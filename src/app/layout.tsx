import type React from "react"
import { Google_Sans_Code } from "next/font/google"

import "../styles/globals.css"
import HeaderComponent from "@/components/ui/header"
import { ThemeProvider } from "./providers"

const gSans = Google_Sans_Code({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="es-PE">
      <body className={gSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="mx-auto max-w-[1000px]">
            <HeaderComponent />

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
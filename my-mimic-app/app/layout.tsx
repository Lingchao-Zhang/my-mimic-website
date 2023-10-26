import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'My Car Hub',
  description: 'This is the first car hub website created by myself',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      
    </html>
  )
}

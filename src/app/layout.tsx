import type { Metadata } from 'next'
import { Inter, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
})

export const metadata: Metadata = {
  title: 'Imagify',
  description: 'AI-powered Image Generator'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('font-IBMPlex antialiased', ibmPlex.variable)}>{children}</body>
    </html>
  )
}

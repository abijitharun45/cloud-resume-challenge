import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Abijith Arun | Cybersecurity & Cloud Specialist',
  description: 'Final-year CS Engineering student specializing in Cybersecurity with AI and Cloud integration. Building AI-powered security solutions.',
  keywords: ['cybersecurity', 'cloud computing', 'AI security', 'machine learning', 'AWS', 'Python', 'portfolio'],
  authors: [{ name: 'Abijith Arun' }],
  creator: 'Abijith Arun',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abijitharun.com',
    title: 'Abijith Arun | Cybersecurity & Cloud Specialist',
    description: 'Building AI-powered security solutions. CompTIA Security+ certified with expertise in cloud computing and machine learning.',
    siteName: 'Abijith Arun Portfolio',
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

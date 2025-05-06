
import "./globals.css";
import { Toaster } from 'react-hot-toast'
import type { Metadata } from 'next'
import WhatsAppButton from '@/components/common/WhatsAppButton '
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
// import { DarkModeProvider } from '@/context/DarkModeContext'
import { Nunito } from 'next/font/google'
const nunito = Nunito({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  })
  export const metadata: Metadata = {
    title: 'Travel Booking',
    description: 'Book your next adventure',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={`${nunito.className} dark:bg-gray-900`}>
          {/* <DarkModeProvider> */}
            <Header />
            <main>{children}</main>
            <Toaster position="top-center" />
            <Footer />
            <WhatsAppButton />
          {/* </DarkModeProvider> */}
        </body>
      </html>
    )
  }

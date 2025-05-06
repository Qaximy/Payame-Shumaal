// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import { DarkModeProvider } from '@/context/DarkModeContext'
// import Header from '@/components/common/Header'
// import Footer from '@/components/common/Footer'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Travel Booking',
//   description: 'Book your next adventure',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.className} dark:bg-gray-900`}>
//         <DarkModeProvider>
//           <Header />
//           <main>{children}</main>
//           <Footer />
//         </DarkModeProvider>
//       </body>
//     </html>
//   )
// }
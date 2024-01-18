import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thrashtech',
  description: 'A global digital collaborator (Web, Mobile & AI) dedicated to guiding businesses through transformative journeys, fostering innovation in product development, and supporting team expansion initiatives.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph tags for social media sharing */}
        <meta property="og:title" content={"Thrashtech"} />
        <meta property="og:description" content={"A global digital collaborator (Web, Mobile & AI) dedicated to guiding businesses through transformative journeys, fostering innovation in product development, and supporting team expansion initiatives."} />
        <meta property="og:image" content={"https://i.ibb.co/jhR3rWw/t.png"} />
        <meta property="og:url" content={"thrashtech.vercel.app"} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <script src="https://kit.fontawesome.com/09f450a9ac.js" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

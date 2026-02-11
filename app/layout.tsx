import type { Metadata } from 'next'
import { Exo } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { NuqsAdapter } from 'nuqs/adapters/next'
import { Suspense } from 'react'

const fontDefault = Exo({
  variable: '--font-exo',
  subsets: ['latin'],
  weight: ['300', '500', '900'],
})

export const metadata: Metadata = {
  title: 'Plan Marketing - Countries',
  description: 'Teste frontend',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${fontDefault.variable} bg-orange-gradient min-h-screen flex flex-col`}
      >
        <Suspense>
          <NuqsAdapter>
            <Header />
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 py-4 lg:py-8 overflow-auto pt-24 sm:pt-28">
              {children}
            </main>
            <Footer />
          </NuqsAdapter>
        </Suspense>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Exo } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const fontDefault = Exo({
  variable: '--font-exo',
  subsets: ['latin'],
  weight: ['300', '500', '900'],
})

export const metadata: Metadata = {
  title: 'Plan Marketing',
  description: 'Teste frontend',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontDefault.variable} bg-orange-gradient`}>
        <Header />
        <div className="max-w-screen mx-auto px-12 py-6 lg:py-8">
          {children}
        </div>
      </body>
    </html>
  )
}

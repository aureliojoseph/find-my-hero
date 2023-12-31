import './globals.scss'
import { Heebo } from 'next/font/google'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata = {
  title: 'Find my Hero',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={heebo.className}>{children}</body>
    </html>
  )
}

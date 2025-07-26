import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trainslate',
  description: 'Blazing-fast translation agent with a clean, familiar interface',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
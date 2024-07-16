import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SPACE D',
  description: '소통의 간격을 줄이다, 스페이스디',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

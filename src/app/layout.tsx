import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

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
      <body className={`flex justify-center min-h-dvh ${pretendard.variable} font-pretendard`}>
        <div className="w-full max-w-[430px] bg-black">
          {children}
        </div>
      </body>
    </html >
  )
}

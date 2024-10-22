import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { Noto_Sans_KR } from 'next/font/google'
import QueryProvider from '@/provider/QueryProvider'
import { headers } from 'next/headers'
import Snackbar from '@/components/shared/Snackbar'

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-notoSans',
})

export const metadata: Metadata = {
  title: 'SPACE D',
  description: '소통의 간격을 줄이다, 스페이스디',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const heads = headers()
  const pathname = heads.get('x-current-path')
  const isAdminPage = pathname?.startsWith('/admin')

  return (
    <html lang="en">
      <body
        className={`flex justify-center min-h-dvh ${pretendard.variable} font-pretendard ${notoSansKr.variable}`}
      >
        <div
          className={`w-full ${isAdminPage ? '' : 'max-w-[430px]'} bg-black whitespace-pre-wrap`}
        >
          <QueryProvider>{children}</QueryProvider>
        </div>
        <Snackbar />
      </body>
    </html>
  )
}

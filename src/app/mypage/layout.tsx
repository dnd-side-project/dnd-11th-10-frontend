import Header from '@/components/shared/Header'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}
export default function MyPageLayout({ children }: LayoutProps) {
  return (
    <div className="pb-4 h-full">
      <Header title={'마이페이지'} />
      <div className="h-[calc(100%-80px)]">{children}</div>
    </div>
  )
}

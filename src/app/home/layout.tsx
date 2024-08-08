import Header from '@/components/domain/home/Header'
import Tabs from '@/components/domain/home/Tabs'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function HomeLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Tabs />
      <div className="h-fit">{children}</div>
    </>
  )
}

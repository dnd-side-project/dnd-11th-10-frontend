import React from 'react'
import Header from '../components/domain/home/Header'
import Tabs from '../components/domain/home/Tabs'

type LayoutProps = {
  children: React.ReactNode
}

export default function HomeLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Tabs />
      <div className="h-fit px-4">{children}</div>
    </>
  )
}

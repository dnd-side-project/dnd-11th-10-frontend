import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}
export default function ProfileLayout({ children }: LayoutProps) {
  return (
    <div className="pb-4 h-full">
      <div className="h-[calc(100%-80px)]">{children}</div>
    </div>
  )
}

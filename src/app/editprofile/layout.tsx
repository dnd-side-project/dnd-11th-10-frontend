import Header from '@/components/shared/Header'

type LayoutProps = {
  children: React.ReactNode
}
export default function EditProfileLayout({ children }: LayoutProps) {
  return (
    <div className="pb-4 h-full">
      <Header title={'프로필 수정'} />
      <div className="h-[calc(100%-80px)]">{children}</div>
    </div>
  )
}

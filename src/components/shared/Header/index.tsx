'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type HeaderProps = {
  title: string
  path?: string // 이동하고 싶은 특정 경로가 존재하는 경우에만 전달. default-> router.back()
  rightItem?: React.ReactNode
}

export default function Header({ title, path, rightItem }: HeaderProps) {
  const router = useRouter()
  return (
    <header className="w-full h-[90px] flex justify-between items-start pt-8 pb-4 px-4 text-onSurface-300">
      <Image
        alt="back"
        src={'/icons/left_arrow.svg'}
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={path ? () => router.push(path) : () => router.back()}
      />
      <p className="text-sub1">{title}</p>
      {rightItem ?? <div className="text-center w-6 h-6"></div>}
    </header>
  )
}

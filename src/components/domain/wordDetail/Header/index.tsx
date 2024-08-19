'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type HeaderProps = {
  markedCount: number
}

export default function Header({ markedCount }: HeaderProps) {
  const router = useRouter()
  return (
    <>
      <header className="w-full h-[90px] flex justify-between items-center px-4 border-b-[1px] border-outline">
        <Image
          alt="back"
          src={'/icons/left_arrow.svg'}
          width={24}
          height={24}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
        <p className="text-sub1">실무 영어</p>
        <div className="text-center">
          <Image
            alt="bookmark"
            src={'/icons/bookmark.svg'}
            width={24}
            height={24}
          />
          <p className="text-caption text-onSurface-200">{markedCount}</p>
        </div>
      </header>
    </>
  )
}

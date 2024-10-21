'use client'
import { cn } from '@/lib/core'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function SearchHeader({
  disabled = false,
}: {
  disabled?: boolean
}) {
  const router = useRouter()

  const handleClick = () => {
    disabled && router.push('/search')
  }

  return (
    <>
      <div className="max-w-[430px] w-full flex gap-4 px-4 py-6 fixed top-0 bg-background">
        <Image
          alt="back"
          src={'/icons/left_arrow.svg'}
          width={24}
          height={24}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
        <div
          className={cn('relative w-full', { 'cursor-pointer': disabled })}
          onClick={handleClick}
        >
          <Image
            className="absolute left-3 h-full"
            alt="검색"
            src={'/icons/search.svg'}
            width={24}
            height={24}
          />
          {disabled && <div className="absolute inset-0 z-10" />}
          <input
            className="w-full pl-12 py-[10px] pr-3 bg-gray-800 rounded-lg outline-none text-body3 focus:outline-primary-400"
            placeholder="단어, 뜻, 예문, 발음으로 검색하기"
            disabled={disabled}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  )
}

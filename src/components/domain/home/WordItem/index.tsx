'use client'
import CategoryTag, { CategoryProps } from '@/components/shared/CategoryTag'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export type WordItemProps = {
  id: number
  name: string
  meaning: string
  pronunciationInfo: {
    korean: string
  }
} & CategoryProps

export default function WordItem({
  id,
  name,
  meaning,
  pronunciationInfo,
  category,
}: WordItemProps) {
  const anchorRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(150)

  useEffect(() => {
    if (anchorRef.current) {
      const anchorWidth = anchorRef.current.offsetWidth
      setWidth(anchorWidth)
    }
  }, [])

  return (
    <Link
      href={`/word/${id}`}
      className={`w-max max-h-[152px] flex flex-col gap-3 py-5 rounded-xl px-5 text-white bg-[#212830] bg-opacity-outline`}
    >
      <div className={`flex gap-6`}>
        <div ref={anchorRef} className={'flex gap-1 items-center shrink-0'}>
          <p className="text-lg font-medium leading-6">{name}</p>
        </div>
        <Image
          alt="북마크"
          src={'/icons/bookmark.svg'}
          width={24}
          height={24}
        />
      </div>
      {width !== 0 && (
        <p
          style={{ width: width + 24 }}
          className="text-sm leading-[18px] text-onSurface-200 mr-6 break-keep overflow-hidden line-clamp-2"
        >
          {meaning}
        </p>
      )}
      <CategoryTag category={category} />
    </Link>
  )
}

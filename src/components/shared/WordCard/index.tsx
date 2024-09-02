'use client'
import CategoryTag from '@/components/shared/CategoryTag'
import { CategoryType } from '@/types/word'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export type WordCardProps = {
  id: number
  name: string
  meaning: string
} & CategoryType

export default function WordCard({
  id,
  name,
  meaning,
  category,
}: WordCardProps) {
  const anchorRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(180)

  useEffect(() => {
    if (anchorRef.current) {
      const anchorWidth = anchorRef.current.offsetWidth
      setWidth(anchorWidth)
    }
  }, [])

  return (
    <Link
      href={`/words/${id}`}
      className="w-min-[200px] w-max h-[140px] py-5 rounded-xl px-5 text-white bg-gray-800 hover:bg-gray-700 bg-opacity-outline"
    >
      <div className="w-max flex flex-col gap-2">
        <CategoryTag category={category} />
        <div ref={anchorRef} className={'flex gap-1 items-center shrink-0'}>
          <p className="text-body1 shrink-0">{name}</p>
        </div>
        {width !== 0 && (
          <p
            style={{ width: width }}
            className="text-body3 text-onSurface-200 break-keep overflow-hidden line-clamp-2"
          >
            {meaning}
          </p>
        )}
      </div>
    </Link>
  )
}

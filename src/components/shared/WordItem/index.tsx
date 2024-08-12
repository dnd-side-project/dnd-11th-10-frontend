import CategoryTag from '@/components/shared/CategoryTag'
import { CategoryType } from '@/types/word'
import Image from 'next/image'
import Link from 'next/link'

export type WordItemProps = {
  id: number
  name: string
  meaning: string
} & CategoryType

export default function WordItem({
  id,
  name,
  meaning,
  category,
}: WordItemProps) {
  return (
    <Link
      href={`/word/${id}`}
      className="min-w-full max-h-[152px] flex flex-col justify-between gap-3 py-5 rounded-xl px-5 text-white bg-gray-800 bg-opacity-outline"
    >
      <div className="flex flex-col justify-between">
        <div className="flex justify-between mb-2">
          <p className="text-lg font-medium leading-6">{name}</p>
          <Image
            alt="북마크"
            src={'/icons/bookmark.svg'}
            width={24}
            height={24}
          />
        </div>
        <p className="text-sm leading-[18px] text-onSurface-200 mr-6 break-keep overflow-hidden line-clamp-2">
          {meaning}
        </p>
      </div>

      <CategoryTag category={category} />
    </Link>
  )
}

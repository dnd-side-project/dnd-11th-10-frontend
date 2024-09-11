import HighlightText from '@/components/common/HighlightText'
import CategoryTag from '@/components/shared/CategoryTag'
import { DetailWordType } from '@/types/word'
import { getFormattedDate } from '@/utils/date'
import Image from 'next/image'

export default function WordInfo({ word }: { word: DetailWordType }) {
  const {
    id,
    name,
    pronunciationInfo,
    meaning,
    category,
    viewCount,
    example,
    source,
    createdAt,
    updatedAt,
  } = word

  return (
    <>
      {/* 용어 상세 기본 정보 */}
      <div className="py-7 border-b-[1px] border-outline px-4">
        <CategoryTag category={category} />
        <div className="flex flex-col gap-1 mt-3">
          <p className="text-h2">{name}</p>
          <p className="text-phonetic text-onSurface-200">{`[${pronunciationInfo.english}]`}</p>
          <p>{meaning}</p>
        </div>
        <p className="text-caption text-onSurface-200 mt-3">
          지금까지 <span className="text-primary-400">{viewCount}</span>번
          조회됐어요.
        </p>
        <div className="flex justify-between text-caption text-onSurface-200 mt-5">
          <p>{`출처: ${source}`}</p>
          <p>{`등록: ${getFormattedDate(createdAt.toString())}`}</p>
        </div>
      </div>
      {/* 용어 예문 */}
      <div className="w-full py-7 px-4">
        <p className="text-h3 mb-5">예문</p>
        <div className="max-w-[calc(100%-9px)] h-fit relative bg-gray-200 text-background text-sub2 py-6 px-5 rounded-2xl">
          <HighlightText
            text={`"${example}"`}
            target={name}
            variant={category}
          />
          <Image
            alt="bubble"
            src={'/images/bubble_tail.svg'}
            width={18}
            height={18}
            className="absolute -right-[5.6px] bottom-0"
          />
        </div>
      </div>
    </>
  )
}

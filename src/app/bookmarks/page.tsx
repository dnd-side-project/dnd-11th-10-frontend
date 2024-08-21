'use client'
import { words } from '@/components/shared/WordListItem/data'
import TabFilter from '@/components/domain/dictionary/TabFilter'
import Header from '@/components/shared/Header'
import TopButton from '@/components/shared/TopButton'
import { FilterType, SimpleWordType } from '@/types/word'
import { useSearchParams } from 'next/navigation'
import WordListItem from '@/components/shared/WordListItem'
import Link from 'next/link'
import Image from 'next/image'
import EmptyLayout from '@/components/shared/EmptyLayout'

export default function BookmarksPage() {
  const searchParams = useSearchParams()
  const filters: FilterType[] = ['전체', '개발', '디자인', '비즈니스']
  const category: any = searchParams.get('category') ?? '전체'
  const wordCount = words.length

  return (
    <>
      <Header title="별별 저장소" />
      {wordCount === 0 ? (
        <div className="h-[calc(100%-90px)]">
          <EmptyLayout target="bookmarks" />
        </div>
      ) : (
        <div className="relative overflow-y-auto bg-background text-onSurface-300">
          <div className="flex gap-2 px-4 pt-1 mb-5">
            {filters.map((filter: FilterType, idx: number) => (
              <TabFilter
                isSelected={filter === category}
                filter={filter}
                key={idx}
              />
            ))}
          </div>
          <div className="px-4 mb-2">
            <p className="text-body3 text-onSurface-200 mb-4">
              나만의 별 단어 {wordCount}
            </p>
            <Link
              href={'/dictionary'}
              className="flex justify-between p-4 rounded-lg bg-gray-800 hover:bg-gray-700"
            >
              <p className="text-sub3">
                <span className="text-primary-400">별 단어</span>라고 생각이
                드는 실무 용어를 더 추가해보세요.
              </p>
              <Image
                alt="dictionary"
                width={20}
                height={20}
                src={'/icons/right_arrow.svg'}
              />
            </Link>
          </div>

          {words.map((word: SimpleWordType, idx: number) => (
            <WordListItem key={word.id} word={word} isMarked showBookmarkBtn />
          ))}
        </div>
      )}

      <TopButton />
    </>
  )
}

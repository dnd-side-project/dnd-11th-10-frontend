'use client'
import TabFilter from '@/components/domain/dictionary/TabFilter'
import Header from '@/components/shared/Header'
import TopButton from '@/components/shared/TopButton'
import { FilterType, SimpleWordType } from '@/types/word'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import EmptyLayout from '@/components/shared/EmptyLayout'
import { useGetBookmarks } from '@/hooks/bookmark/useGetBookmarks'
import WordsList from '@/components/domain/dictionary/WordsList'

export default function BookmarksPage() {
  const searchParams = useSearchParams()
  const filters: FilterType[] = ['전체', '개발', '디자인', '비즈니스']
  const category: string = searchParams.get('category') ?? '전체'
  const { words } = useGetBookmarks(category as FilterType)
  const wordsCount = words && words.length
  return (
    <>
      <Header title="별별 저장소" />
      {
        <div className="relative overflow-y-auto h-[calc(100%-90px)] flex flex-col bg-background text-onSurface-300">
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
              나만의 별 단어 {wordsCount}
            </p>
            <Link
              href={'/dictionary'}
              className="flex justify-between p-4 rounded-lg bg-gray-800 hover:bg-gray-700"
            >
              <p className="text-sub3">
                <span className="text-primary-400">별 단어</span>라고 생각이
                드는 용어를 더 추가해보세요.
              </p>
              <Image
                alt="dictionary"
                width={20}
                height={20}
                src={'/icons/right_arrow.svg'}
              />
            </Link>
          </div>
          {wordsCount === 0 ? (
            <div className="flex-grow">
              <EmptyLayout target="bookmarks" />
            </div>
          ) : (
            <WordsList words={words as SimpleWordType[]} showBookmarkBtn />
          )}
        </div>
      }
      <TopButton />
    </>
  )
}

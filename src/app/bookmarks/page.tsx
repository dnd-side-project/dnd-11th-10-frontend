'use client'
import { words } from '@/components/shared/WordListItem/data'
import TabFilter from '@/components/domain/dictionary/TabFilter'
import Header from '@/components/shared/Header'
import TopButton from '@/components/shared/TopButton'
import { FilterType, SimpleWordType } from '@/types/word'
import { useSearchParams } from 'next/navigation'
import WordListItem from '@/components/shared/WordListItem'

export default function BookmarksPage() {
  const searchParams = useSearchParams()
  const filters: FilterType[] = ['전체', '개발', '디자인', '비즈니스']
  const category: any = searchParams.get('category') ?? '전체'

  return (
    <>
      <div className="relative overflow-y-auto bg-background text-onSurface-300">
        <Header title="별별 저장소" />
        <div className="flex gap-2 px-4 mt-[92px]">
          {filters.map((filter: FilterType, idx: number) => (
            <TabFilter
              isSelected={filter === category}
              filter={filter}
              key={idx}
            />
          ))}
        </div>
        {words.map((word: SimpleWordType, idx: number) => (
          <WordListItem key={word.id} word={word} isMarked showBookmarkBtn />
        ))}
      </div>
      <TopButton />
    </>
  )
}

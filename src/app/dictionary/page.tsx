'use client'
import SortButton from '@/components/common/SortButton'
import TabFilter from '@/components/domain/dictionary/TabFilter'
import WordsList from '@/components/domain/dictionary/WordsList'
import FilterBottomSheet from '@/components/shared/FilterBottomSheet'
import SearchHeader from '@/components/shared/SearchHeader'
import TopButton from '@/components/shared/TopButton'
import { sortValue, useGetAllWords } from '@/hooks/word/useGetAllWords'
import useUIStore from '@/store/useUIStore'
import { FilterType, SimpleWordType, WordSortType } from '@/types/word'
import { useSearchParams } from 'next/navigation'

export default function DictionaryPage() {
  const searchParams = useSearchParams()
  const filters: FilterType[] = ['전체', '개발', '디자인', '비즈니스']
  const { bottomSheetType, openBottomSheet } = useUIStore()

  const category: string = searchParams.get('category') ?? '전체'
  const sortBy: string = searchParams.get('sortBy') ?? 'name'
  const { words } = useGetAllWords(
    category as FilterType,
    sortBy as WordSortType,
  )

  return (
    <>
      <div className="relative overflow-y-auto bg-background text-onSurface-300">
        <SearchHeader disabled={true} />
        <div className="flex flex-col px-4 gap-5 mt-[90px]">
          <div className="flex justify-between">
            <p className="text-h2">
              등록된 용어
              <span className="text-primary-400 ml-2">
                {words && words.length}
              </span>
            </p>
            <SortButton
              sortBy={sortValue[sortBy] ?? '사전순'}
              onClick={() => openBottomSheet('filter')}
            />
          </div>

          <div className="flex gap-2">
            {filters.map((filter: FilterType, idx: number) => (
              <TabFilter
                isSelected={filter === category}
                filter={filter}
                key={idx}
              />
            ))}
          </div>
        </div>
        <WordsList words={words as SimpleWordType[]} />
      </div>
      <TopButton />
      <FilterBottomSheet
        isOpen={bottomSheetType === 'filter'}
        selected={sortValue[sortBy] ?? '사전순'}
        target="words"
      />
    </>
  )
}

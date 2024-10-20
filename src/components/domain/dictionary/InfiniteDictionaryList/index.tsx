'use client'
import { getAllWords } from '@/api/words'
import SortButton from '@/components/common/SortButton'
import SearchHeader from '@/components/shared/SearchHeader'
import { sortValue } from '@/hooks/word/useGetAllWords'
import useUIStore from '@/store/useUIStore'
import { FilterType } from '@/types/word'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import TabFilter from '../TabFilter'
import WordsList from '@/components/shared/WordsList'
import Image from 'next/image'
import TopButton from '@/components/shared/TopButton'
import FilterBottomSheet from '@/components/shared/FilterBottomSheet'

type DictionaryListProps = {
  category: FilterType
  sortBy: string
}

export default function InfiniteDictionaryList({
  category,
  sortBy,
}: DictionaryListProps) {
  const filters: FilterType[] = ['전체', '개발', '디자인', '비즈니스']

  const { bottomSheetType, openBottomSheet } = useUIStore()
  const { ref, inView } = useInView({ threshold: 0.9 })

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['words', category],
      queryFn: ({ pageParam = '' }) => getAllWords(category, sortBy, pageParam),
      initialPageParam: '',
      getNextPageParam: (lastPage) => {
        if (lastPage.words.length === 0) {
          return undefined
        }
        return lastPage.lastWordName
      },
    })

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage()
  }, [inView, fetchNextPage, hasNextPage])

  return (
    <>
      <div className="relative overflow-y-auto min-h-full bg-background text-onSurface-300">
        <SearchHeader disabled={true} />
        <div className="flex flex-col px-4 gap-5 mt-[90px] ">
          <div className="flex justify-between">
            <p className="text-h2">
              등록된 용어
              <span className="text-primary-400 ml-2">
                {/* {data && data.pages[0].words.length} */}
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
        {data?.pages?.map((page) => (
          <WordsList key={page.lastWordName} words={page.words} />
        ))}
        {isFetchingNextPage ? (
          <Image
            src={'/gif/loading.gif'}
            alt="loading.gif"
            width={64}
            height={64}
            className="text-center"
          />
        ) : (
          data && hasNextPage && <div className="h-1" ref={ref} />
        )}
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

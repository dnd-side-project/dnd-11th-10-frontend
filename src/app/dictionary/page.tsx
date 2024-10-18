'use client'
import { getAllWords } from '@/api/words'
import SortButton from '@/components/common/SortButton'
import TabFilter from '@/components/domain/dictionary/TabFilter'
import WordsList from '@/components/domain/dictionary/WordsList'
import FilterBottomSheet from '@/components/shared/FilterBottomSheet'
import SearchHeader from '@/components/shared/SearchHeader'
import TopButton from '@/components/shared/TopButton'
import { sortValue } from '@/hooks/word/useGetAllWords'
import useUIStore from '@/store/useUIStore'
import { FilterType } from '@/types/word'
import { useInfiniteQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Loading from '../loading'

export default function DictionaryPage() {
  const searchParams = useSearchParams()
  const filters: FilterType[] = ['전체', '개발', '디자인', '비즈니스']
  const { bottomSheetType, openBottomSheet } = useUIStore()
  const { ref, inView } = useInView({ threshold: 0.9 })

  const category: FilterType =
    (searchParams.get('category') as FilterType) ?? '전체'
  const sortBy: string = searchParams.get('sortBy') ?? 'name'
  const { data, fetchNextPage, isFetchingNextPage, isLoading, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['words', category, sortBy],
      queryFn: (lastPage) => getAllWords(category, sortBy, lastPage.pageParam),
      initialPageParam: '',
      getNextPageParam: (lastPage) => {
        return lastPage.words.length > 0 ? lastPage.lastWordName : undefined
      },
    })

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage()
  }, [inView, fetchNextPage, data, hasNextPage])

  if (isLoading) return <Loading />

  return (
    <>
      <div className="relative overflow-y-auto min-h-full bg-background text-onSurface-300">
        <SearchHeader disabled={true} />
        <div className="flex flex-col px-4 gap-5 mt-[90px] ">
          <div className="flex justify-between">
            <p className="text-h2">
              등록된 용어
              <span className="text-primary-400 ml-2">
                {data?.pages[0].words.length}
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
        <div className="h-[calc(100vh-172px)]">
          {data?.pages.map((page) => (
            <WordsList key={page.lastWordName} words={page.words} />
          ))}
          {isFetchingNextPage ? (
            <Image
              src={'/gif/loading.gif'}
              alt="loading.gif"
              width={64}
              height={64}
            />
          ) : (
            <div className="h-1" ref={ref} />
          )}
        </div>
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

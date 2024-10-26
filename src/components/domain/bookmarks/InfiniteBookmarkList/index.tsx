'use client'
import TopButton from '@/components/shared/TopButton'
import WordsList from '../../dictionary/WordsList'
import { useInfiniteQuery } from '@tanstack/react-query'
import { FilterType } from '@/types/word'
import { getBookmarks } from '@/api/bookmark'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import TabFilter from '../../dictionary/TabFilter'
import Link from 'next/link'

export default function InfiniteBookmarkList({
  category,
}: {
  category: FilterType
}) {
  const filters: FilterType[] = ['전체', '개발', '디자인', '비즈니스']
  const { inView, ref } = useInView({ threshold: 0.9 })
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['bookmarks', category],
      queryFn: ({ pageParam = '' }) => getBookmarks(category, pageParam),
      initialPageParam: '',
      getNextPageParam: (lastPage) => {
        if (lastPage.words.length === 0) {
          return undefined
        }
        return lastPage.lastBookmarkId
      },
    })

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage()
  }, [inView, fetchNextPage, hasNextPage])

  return (
    <div className="flex flex-col bg-background">
      <div className="flex gap-2 px-4 pt-1 mb-3">
        {filters.map((filter: FilterType, idx: number) => (
          <TabFilter
            isSelected={filter === category}
            filter={filter}
            key={idx}
          />
        ))}
      </div>
      <div className="px-4">
        <p className="text-body3 text-onSurface-200 mb-4">
          {/* 나만의 별 단어 {wordsCount} */}
        </p>
        <Link
          href={'/dictionary'}
          className="flex justify-between p-4 rounded-lg bg-gray-800 hover:bg-gray-700"
        >
          <p className="text-sub3 text-onSurface-300">
            <span className="text-primary-400">별 단어</span>라고 생각이 드는
            용어를 더 추가해보세요.
          </p>
          <Image
            alt="dictionary"
            width={20}
            height={20}
            src={'/icons/right_arrow.svg'}
          />
        </Link>
      </div>
      {data?.pages.map((page) => (
        <WordsList
          key={page.lastBookmarkId}
          words={page.words}
          showBookmarkBtn
        />
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
        data && hasNextPage && <div ref={ref} className="h-1" />
      )}
      <TopButton />
    </div>
  )
}

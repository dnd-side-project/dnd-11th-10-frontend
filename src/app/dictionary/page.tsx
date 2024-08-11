'use client'
import TabFilter from '@/components/domain/dictionary/TabFilter'
import WordsList from '@/components/domain/dictionary/WordsList'
import SearchHeader from '@/components/shared/SearchHeader'
import { FilterType } from '@/types/word'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function DictionaryPage() {
  const searchParams = useSearchParams()
  const totalCnt = 100
  const filters: FilterType[] = ['전체', '개발', '디자인', '비즈니스']
  const category: any = searchParams.get('category') ?? '전체'

  return (
    <>
      <div className="relative overflow-y-auto bg-background text-onSurface-300">
        <SearchHeader disabled={true} />
        <div className="flex flex-col px-4 gap-5 mt-[90px]">
          <p className="text-xl font-semibold">
            등록된 실무 용어
            <span className="text-primary-400 ml-2">{totalCnt}</span>
          </p>
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
        <WordsList category={category} />
      </div>
      {/* floating button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-4 w-14 h-14 p-4 rounded-full bg-gray-800"
      >
        <Image alt="up" src={'/icons/arrow_up.svg'} width={24} height={24} />
      </button>
    </>
  )
}

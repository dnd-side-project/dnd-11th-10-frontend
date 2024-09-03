import { getAllWords } from '@/api/words'
import TabFilter from '@/components/domain/dictionary/TabFilter'
import WordsList from '@/components/domain/dictionary/WordsList'
import SearchHeader from '@/components/shared/SearchHeader'
import TopButton from '@/components/shared/TopButton'
import { FilterType, SimpleWordType } from '@/types/word'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function DictionaryPage({ searchParams }: Props) {
  const filters: FilterType[] = ['전체', '개발', '디자인', '비즈니스']
  const { category = '전체' } = searchParams
  const words = await getAllWords(category as FilterType)

  return (
    <>
      <div className="relative overflow-y-auto bg-background text-onSurface-300">
        <SearchHeader disabled={true} />
        <div className="flex flex-col px-4 gap-5 mt-[90px]">
          <p className="text-h2">
            등록된 용어
            <span className="text-primary-400 ml-2">{words.length}</span>
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
        <WordsList words={words as SimpleWordType[]} />
      </div>
      <TopButton />
    </>
  )
}

import WordListItem from '@/components/shared/WordListItem'
import { words } from '@/components/shared/WordListItem/data'
import { FilterType, SimpleWordType } from '@/types/word'

type WordsListProps = {
  category: FilterType
}

export default function WordsList({ category }: WordsListProps) {
  return (
    <>
      {words.map((word: SimpleWordType, idx: number) => (
        <WordListItem key={word.id} word={word} />
      ))}
    </>
  )
}

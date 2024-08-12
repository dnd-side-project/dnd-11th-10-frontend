import { FilterType, SimpleWordType } from '@/types/word'
import { words } from '../OneWordItem/data'
import OneWordItem from '../OneWordItem'

type WordsListProps = {
  category: FilterType
}

export default function WordsList({ category }: WordsListProps) {
  return (
    <>
      {words.map((word: SimpleWordType, idx: number) => (
        <OneWordItem key={word.id} word={word} />
      ))}
    </>
  )
}

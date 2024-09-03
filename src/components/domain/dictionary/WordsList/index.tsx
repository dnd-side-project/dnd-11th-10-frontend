import WordListItem from '@/components/shared/WordListItem'
import { SimpleWordType } from '@/types/word'

type WordsListProps = {
  words: SimpleWordType[]
}

export default function WordsList({ words }: WordsListProps) {
  return (
    <>
      {words &&
        words.map((word: SimpleWordType, idx: number) => (
          <WordListItem key={word.id} word={word} />
        ))}
    </>
  )
}

import WordListItem from '@/components/shared/WordListItem'
import { SimpleWordType } from '@/types/word'

type WordsListProps = {
  words: SimpleWordType[]
  showBookmarkBtn?: boolean
}

export default function WordsList({
  words,
  showBookmarkBtn = false,
}: WordsListProps) {
  return (
    <>
      {words &&
        words.map((word: SimpleWordType, idx: number) => (
          <WordListItem
            key={word.id}
            word={word}
            showBookmarkBtn={showBookmarkBtn}
          />
        ))}
    </>
  )
}

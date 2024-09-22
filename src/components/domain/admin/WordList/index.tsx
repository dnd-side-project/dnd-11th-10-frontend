import { AdminWordType } from '@/types/word'
import WordListItem from './WordListItem'

export default function AdminWordList({ words }: { words: AdminWordType[] }) {
  return (
    <>
      <div>
        {words.map((word, idx) => (
          <WordListItem key={word.id} word={word} />
        ))}
      </div>
    </>
  )
}

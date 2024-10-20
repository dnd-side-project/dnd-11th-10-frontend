'use client'
import WordListItem from './WordListItem'
import useGetAllWords from '@/hooks/admin/useGetAllWords'
import { AdminWordType } from '@/types/word'

export default function AdminWordList() {
  const { words } = useGetAllWords()

  return (
    <>
      <div>
        {words &&
          words.map((word: AdminWordType, idx) => (
            <WordListItem key={word.id} word={word} />
          ))}
      </div>
    </>
  )
}

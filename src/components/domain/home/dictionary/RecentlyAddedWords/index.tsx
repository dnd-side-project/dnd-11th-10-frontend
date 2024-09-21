'use client'
import HorizontalScrollArea from '@/components/common/HorizontalScrollArea'
import WordCard from '@/components/shared/WordCard'
import { useGetRecentWords } from '@/hooks/word/useGetRecentWords'

export default function RecentlyAddedWords() {
  const { words } = useGetRecentWords()
  if (typeof words === 'string' || !words) return
  return (
    <>
      <HorizontalScrollArea title="최근 등록된 용어 🌟" scrollDivisor={2}>
        {words.map(({ id, name, meaning, category }, idx) => (
          <WordCard
            key={id}
            id={id}
            name={name}
            meaning={meaning}
            category={category}
          />
        ))}
      </HorizontalScrollArea>
    </>
  )
}

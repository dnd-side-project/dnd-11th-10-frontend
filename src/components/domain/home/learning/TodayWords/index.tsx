'use client'
import HorizontalScrollArea from '@/components/common/HorizontalScrollArea'
import WordCard from '@/components/shared/WordCard'
import { useGetTodayWords } from '@/hooks/word/useGetTodayWords'

export default function TodayWords() {
  const { words } = useGetTodayWords()
  if (typeof words === 'string' || !words) return
  return (
    <>
      <HorizontalScrollArea title="오늘의 용어 🔭" scrollDivisor={2}>
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

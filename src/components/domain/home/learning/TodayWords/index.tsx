import HorizontalScrollArea from '@/components/common/HorizontalScrollArea'
import WordCard, { WordCardProps } from '@/components/shared/WordCard'

export default function TodayWords({
  wordsList,
}: {
  wordsList: WordCardProps[]
}) {
  return (
    <>
      <HorizontalScrollArea title="오늘의 용어 🔭" scrollDivisor={2}>
        {wordsList.map(({ id, name, meaning, category }, idx) => (
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

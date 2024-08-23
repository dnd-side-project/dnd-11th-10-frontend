import HorizontalScrollArea from '@/components/common/HorizontalScrollArea'
import WordCard, { WordCardProps } from '@/components/shared/WordCard'

export default function RecentlyAddedWords({
  wordsList,
}: {
  wordsList: WordCardProps[]
}) {
  return (
    <>
      <HorizontalScrollArea title="최근 등록된 업무 용어 🌟" scrollDivisor={2}>
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

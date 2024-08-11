import HorizontalScrollArea from '@/components/common/HorizontalScrollArea'
import WordItem, { WordItemProps } from '../../../../shared/WordItem'

export default function TodayWords({
  wordsList,
}: {
  wordsList: WordItemProps[]
}) {
  return (
    <>
      <HorizontalScrollArea title="오늘의 실무 용어 세 가지 🔭">
        {wordsList.map(({ id, name, meaning, category }, idx) => (
          <WordItem
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

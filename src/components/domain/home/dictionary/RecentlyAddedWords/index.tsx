import HorizontalScrollArea from '@/components/common/HorizontalScrollArea'
import WordItem, { WordItemProps } from '../../../../shared/WordItem'

export default function RecentlyAddedWords({
  wordsList,
}: {
  wordsList: WordItemProps[]
}) {
  return (
    <>
      <HorizontalScrollArea title="최근 등록된 업무 용어 🌟">
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

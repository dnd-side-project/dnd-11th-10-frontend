import HorizontalScrollArea from '@/components/common/HorizontalScrollArea'
import WordItem, { WordItemProps } from '../../WordItem'

export default function RecentlyAddedWords({
  WordsList,
}: {
  WordsList: WordItemProps[]
}) {
  return (
    <>
      <HorizontalScrollArea title="최근 등록된 업무 용어 🌟">
        {WordsList.map(
          ({ id, name, meaning, pronunciationInfo, category }, idx) => (
            <WordItem
              key={id}
              id={id}
              name={name}
              meaning={meaning}
              pronunciationInfo={pronunciationInfo}
              category={category}
            />
          ),
        )}
      </HorizontalScrollArea>
    </>
  )
}

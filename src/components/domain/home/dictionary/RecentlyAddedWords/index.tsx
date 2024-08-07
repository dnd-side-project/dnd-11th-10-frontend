import HorizontalScrollArea from '@/components/common/HorizontalScrollArea'
import WordItem from '../../WordItem'
import { WordsList } from './data'

export default function RecentlyAddedWords() {
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

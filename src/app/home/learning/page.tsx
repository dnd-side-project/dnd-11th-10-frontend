import { WordsList } from '@/components/domain/home/dictionary/RecentlyAddedWords/data'
import CommunicationStats from '@/components/domain/home/learning/CommunicationStats'
import TodayQuiz from '@/components/domain/home/learning/TodayQuiz'
import TodayWords from '@/components/domain/home/learning/TodayWords'

export default function LearningTab() {
  return (
    <div className="w-full my-12 flex flex-col items-center gap-[60px]">
      <TodayQuiz todaySolvedCnt={50} />
      <TodayWords wordsList={WordsList} />
      <CommunicationStats />
    </div>
  )
}

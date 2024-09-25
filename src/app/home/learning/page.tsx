import { getTodayWords } from '@/api/words'
import { WordsList } from '@/components/domain/home/dictionary/RecentlyAddedWords/data'
import CommunicationStats from '@/components/domain/home/learning/CommunicationStats'
import TodayQuiz from '@/components/domain/home/learning/TodayQuiz'
import TodayWords from '@/components/domain/home/learning/TodayWords'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

export default async function LearningTab() {
  const queryClient = new QueryClient()

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['words', 'today'],
      queryFn: getTodayWords,
    }),
  ])

  return (
    <div className="w-full my-12 flex flex-col items-center gap-[60px]">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TodayQuiz />
        <TodayWords />
        <CommunicationStats />
      </HydrationBoundary>
    </div>
  )
}

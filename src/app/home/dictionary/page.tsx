import { getPopularComments } from '@/api/comment'
import { getRecentWords } from '@/api/words'
import Bookmarks from '@/components/domain/home/dictionary/Bookmarks'
import PopularCommentsList from '@/components/domain/home/dictionary/PopularCommentsList'
import RecentlyAddedWords from '@/components/domain/home/dictionary/RecentlyAddedWords'
import ViewAllWords from '@/components/domain/home/dictionary/ViewAllWords'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

export default async function DictionaryTab() {
  const queryClient = new QueryClient()

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['words', 'recent'],
      queryFn: getRecentWords,
    }),
    queryClient.prefetchQuery({
      queryKey: ['comments', 'popular'],
      queryFn: getPopularComments,
    }),
  ])

  return (
    <div className="w-full my-12 flex flex-col gap-[60px]">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ViewAllWords />
        <RecentlyAddedWords />
        <Bookmarks />
        <PopularCommentsList />
      </HydrationBoundary>
    </div>
  )
}

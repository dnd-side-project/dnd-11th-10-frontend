import { getPopularComments } from '@/api/comment'
import Bookmarks from '@/components/domain/home/dictionary/Bookmarks'
import PopularCommentsList from '@/components/domain/home/dictionary/PopularCommentsList'
import { PopularComments } from '@/components/domain/home/dictionary/PopularCommentsList/data'
import RecentlyAddedWords from '@/components/domain/home/dictionary/RecentlyAddedWords'
import { WordsList } from '@/components/domain/home/dictionary/RecentlyAddedWords/data'
import ViewAllWords from '@/components/domain/home/dictionary/ViewAllWords'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

export default async function DictionaryTab() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['comments', 'admin'],
    queryFn: getPopularComments,
  })

  return (
    <div className="w-full my-12 flex flex-col gap-[60px]">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ViewAllWords />
        <RecentlyAddedWords wordsList={WordsList} />
        <Bookmarks />
        <PopularCommentsList />
      </HydrationBoundary>
    </div>
  )
}

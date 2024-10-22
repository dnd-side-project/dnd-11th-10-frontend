import Header from '@/components/shared/Header'
import { FilterType } from '@/types/word'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import { getBookmarks } from '@/api/bookmark'
import InfiniteBookmarkList from '@/components/domain/bookmarks/InfiniteBookmarkList'

export default async function BookmarksPage({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const category: FilterType = (searchParams.category as FilterType) ?? '전체'

  const queryClient = new QueryClient()
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['bookmarks', category],
    queryFn: ({ pageParam }) => getBookmarks(category, pageParam),
    initialPageParam: '',
  })

  return (
    <>
      <Header title="별별 저장소" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <InfiniteBookmarkList category={category} />
      </HydrationBoundary>
    </>
  )
}

import { getAllWords } from '@/api/words'
import InfiniteDictionaryList from '@/components/domain/dictionary/InfiniteDictionaryList'
import { FilterType } from '@/types/word'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

export default async function DictionaryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const category: FilterType = (searchParams.category as FilterType) ?? '전체'
  const sortBy: string = searchParams.sortBy ?? 'name'

  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['words', category],
    queryFn: ({ pageParam }) => getAllWords(category, sortBy, pageParam),
    initialPageParam: '',
  })

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <InfiniteDictionaryList category={category} sortBy={sortBy} />
      </HydrationBoundary>
    </>
  )
}

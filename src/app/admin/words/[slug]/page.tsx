import { getWordDetailById } from '@/api/admin/words'
import WordDetail from '@/components/domain/admin/WordDetail'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

export default async function WordDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const wordId = parseInt(params.slug.split('/').at(-1) ?? '')
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['words', 'admin', wordId],
    queryFn: () => getWordDetailById(wordId),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WordDetail wordId={wordId} />
    </HydrationBoundary>
  )
}

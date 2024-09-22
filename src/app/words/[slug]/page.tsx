import WordInfo from '@/components/domain/wordDetail/WordInfo'
import ContactButton from '@/components/domain/wordDetail/ContactButton'
import CommentsList from '@/components/domain/wordDetail/CommentsList'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import { getWordDetailById } from '@/api/words'
import WordDetailHeader from '@/components/domain/wordDetail/Header'

export default async function WordDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const wordId = parseInt(params.slug.split('/').at(-1) ?? '')
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['words', wordId],
    queryFn: () => getWordDetailById(wordId),
  })

  return (
    <div className="text-onSurface-300">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <WordDetailHeader wordId={wordId} />
        <WordInfo wordId={wordId} />
      </HydrationBoundary>
      <ContactButton />
      <CommentsList wordId={wordId} />
    </div>
  )
}

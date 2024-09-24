import { getCommentsByWordId } from '@/api/comment'
import { useQuery } from '@tanstack/react-query'

export const useGetComments = (wordId: number) => {
  const {
    data: comments,
    isFetching,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['words', 'comments', wordId],
    queryFn: () => getCommentsByWordId(wordId),
  })
  return { comments, isFetching, isLoading, refetch }
}

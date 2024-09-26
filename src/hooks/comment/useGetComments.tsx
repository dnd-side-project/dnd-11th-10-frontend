import { getCommentsByWordId } from '@/api/comment'
import { useQuery } from '@tanstack/react-query'

export const useGetComments = (wordId: number, sortBy: string) => {
  const {
    data: comments,
    isFetching,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['words', 'comments', wordId, sortBy],
    queryFn: () => getCommentsByWordId(wordId, sortBy),
  })
  return { comments, isFetching, isLoading, refetch }
}

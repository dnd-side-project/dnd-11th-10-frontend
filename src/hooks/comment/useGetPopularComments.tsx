import { getPopularComments } from '@/api/comment'
import { useQuery } from '@tanstack/react-query'

// 반응이 뜨거운 댓글 목록 조회
export const useGetPopularComments = () => {
  const { data: comments, isLoading } = useQuery({
    queryKey: ['comments', 'popular'],
    queryFn: getPopularComments,
  })

  return { comments, isLoading }
}

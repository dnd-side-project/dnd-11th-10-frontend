import { toggleCommentLike } from '@/api/comment'
import { queryClient } from '@/provider/QueryProvider'
import { useMutation } from '@tanstack/react-query'

export default function useToggleCommentLike(wordId: number) {
  const { mutate } = useMutation({
    mutationFn: async ({ commentId }: { commentId: number }) => {
      return await toggleCommentLike(commentId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['words', 'comments', wordId],
      })
    },
  })

  return { mutate }
}

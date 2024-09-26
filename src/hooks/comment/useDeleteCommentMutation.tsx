import { deleteComment } from '@/api/comment'
import useUIStore from '@/store/useUIStore'
import { QueryClient, useMutation } from '@tanstack/react-query'

export default function useDeleteCommentMutation(
  wordId: number,
  commentId: number,
) {
  const { closeBottomSheet, showSnackbar } = useUIStore()
  const queryClient = new QueryClient()
  const { mutate: delComment } = useMutation({
    mutationFn: () => deleteComment(wordId, commentId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['words', 'comments', wordId],
        exact: false,
      })
      showSnackbar('commentDelete')
      closeBottomSheet()
    },
  })
  return { delComment }
}

import { deleteComment } from '@/api/comment'
import useUIStore from '@/store/useUIStore'
import { QueryClient, useMutation } from '@tanstack/react-query'

export default function useDeleteComment(wordId: number) {
  const { closeBottomSheet, showSnackbar } = useUIStore()
  const queryClient = new QueryClient()
  const { mutate } = useMutation({
    mutationFn: (commentId: number) => deleteComment(wordId, commentId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['words', 'comments', wordId],
        exact: false,
      })
      showSnackbar('commentDelete')
      closeBottomSheet()
    },
  })
  return { mutate }
}

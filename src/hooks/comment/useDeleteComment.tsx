import { deleteComment } from '@/api/comment'
import { queryClient } from '@/provider/QueryProvider'
import useUIStore from '@/store/useUIStore'
import { useMutation } from '@tanstack/react-query'

export default function useDeleteComment(wordId: number) {
  const { closeBottomSheet, showSnackbar } = useUIStore()
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

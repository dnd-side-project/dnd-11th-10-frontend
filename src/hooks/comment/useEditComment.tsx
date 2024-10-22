import { editComment } from '@/api/comment'
import { queryClient } from '@/provider/QueryProvider'
import useCommentForm from '@/store/useCommentForm'
import useUIStore from '@/store/useUIStore'
import { useMutation } from '@tanstack/react-query'

export const useEditComment = (wordId: number) => {
  const { showSnackbar } = useUIStore()
  const { setEditingId, setEditingText } = useCommentForm()
  const { mutate } = useMutation({
    mutationFn: async ({
      editingId: commentId,
      value,
    }: {
      editingId: number
      value: string
    }) => {
      return await editComment(commentId, value)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['words', 'comments', wordId],
      })
      setEditingId(null)
      setEditingText(null)
      showSnackbar('commentEdit')
    },
  })

  return { mutate }
}

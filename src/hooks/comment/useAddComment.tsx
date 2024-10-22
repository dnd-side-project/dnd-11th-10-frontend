import { addComment } from '@/api/comment'
import { queryClient } from '@/provider/QueryProvider'
import useUIStore from '@/store/useUIStore'
import { useMutation } from '@tanstack/react-query'

export default function useAddComment(wordId: number) {
  const { showSnackbar } = useUIStore()
  const { mutate } = useMutation({
    mutationFn: async ({
      wordId,
      value,
    }: {
      wordId: number
      value: string
    }) => {
      return await addComment(wordId, value)
    },
    onSuccess: () => {
      showSnackbar('commentAdd')
      queryClient.invalidateQueries({
        queryKey: ['words', 'comments', wordId],
        exact: false,
      })
    },
  })

  return { mutate }
}

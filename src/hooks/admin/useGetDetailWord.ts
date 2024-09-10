import { getWordDetailById } from '@/api/admin/words'
import { useQuery } from '@tanstack/react-query'

export const useGetWordDetail = (wordId: number) => {
  const { data: word, isLoading } = useQuery({
    queryKey: ['words', 'admin', wordId],
    queryFn: () => getWordDetailById(wordId),
  })
  return { word, isLoading }
}

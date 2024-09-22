import { getRecentWords } from '@/api/words'
import { useQuery } from '@tanstack/react-query'

export const useGetRecentWords = () => {
  const { data: words, isLoading } = useQuery({
    queryKey: ['words', 'recent'],
    queryFn: getRecentWords,
  })
  return { words, isLoading }
}

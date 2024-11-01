import { getPopularWords } from '@/api/search'
import { useQuery } from '@tanstack/react-query'

export const useGetPopularWords = () => {
  const { data: words, isLoading } = useQuery({
    queryKey: ['words', 'popular'],
    queryFn: getPopularWords,
  })

  return { words, isLoading }
}

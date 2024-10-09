import { getTodayWords } from '@/api/words'
import { useQuery } from '@tanstack/react-query'

export const useGetTodayWords = () => {
  const { data: words, isLoading } = useQuery({
    queryKey: ['words', 'today'],
    queryFn: getTodayWords,
  })
  return { words, isLoading }
}

import { getAllWords } from '@/api/words'
import { FilterType } from '@/types/word'
import { useQuery } from '@tanstack/react-query'

export const useGetAllWords = (category: FilterType) => {
  const { data: words, isLoading } = useQuery({
    queryKey: ['words', category],
    queryFn: () => getAllWords(category),
  })

  return { words, isLoading }
}

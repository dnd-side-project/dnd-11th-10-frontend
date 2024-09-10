import { getAllWords } from '@/api/words'
import { FilterType, WordSortType } from '@/types/word'
import { useQuery } from '@tanstack/react-query'

export const sortValue: any = {
  사전순: 'name',
  name: '사전순',
  조회순: 'viewCount',
  viewCount: '조회순',
}

export const useGetAllWords = (category: FilterType, sortBy: WordSortType) => {
  const { data: words, isLoading } = useQuery({
    queryKey: ['words', category, sortBy],
    queryFn: () => getAllWords(category, sortValue[sortBy]),
  })

  return { words, isLoading }
}

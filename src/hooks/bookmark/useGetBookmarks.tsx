import { getBookmarks } from '@/api/bookmark'
import { FilterType } from '@/types/word'
import { useQuery } from '@tanstack/react-query'

export const useGetBookmarks = (category: FilterType) => {
  const {
    data: words,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['bookmarks', category],
    queryFn: () => getBookmarks(category),
  })
  return { words, isLoading, isFetching }
}

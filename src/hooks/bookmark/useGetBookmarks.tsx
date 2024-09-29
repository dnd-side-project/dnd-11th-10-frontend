import { getBookmarks } from '@/api/bookmark'
import { useQuery } from '@tanstack/react-query'

export default function useGetBookmarks() {
  const {
    data: words,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: getBookmarks,
  })
  return { words, isLoading, isFetching }
}

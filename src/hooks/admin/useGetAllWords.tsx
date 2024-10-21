import { getAllWords } from '@/api/admin/words'
import { useQuery } from '@tanstack/react-query'

export default function useGetAllWords() {
  const { data: words } = useQuery({
    queryKey: ['admin', 'words'],
    queryFn: getAllWords,
  })
  return { words }
}

import { getUserPrecedence } from '@/api/auth/skill'
import { useQuery } from '@tanstack/react-query'

export default function useGetPrecedence() {
  const { data: precedence, isFetched } = useQuery({
    queryKey: ['skill', 'precedence'],
    queryFn: getUserPrecedence,
  })

  return { precedence, isFetched }
}

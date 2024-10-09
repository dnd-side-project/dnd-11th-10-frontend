import { getUserAbility, getUserPrecedence } from '@/api/auth/skill'
import { useQuery } from '@tanstack/react-query'

export function useGetPrecedence() {
  const { data: precedence, isFetched } = useQuery({
    queryKey: ['skill', 'precedence'],
    queryFn: getUserPrecedence,
  })

  return { precedence, isFetched }
}

export function useGetAbility() {
  const { data: ability, isFetched } = useQuery({
    queryKey: ['skill', 'ability'],
    queryFn: getUserAbility,
  })

  return { ability, isFetched }
}

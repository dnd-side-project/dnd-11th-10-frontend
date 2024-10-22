import { getTodayParticipants } from '@/api/quiz'
import { useQuery } from '@tanstack/react-query'

export const useGetTodayParticipants = () => {
  const { data: participants } = useQuery({
    queryKey: ['today', 'participants'],
    queryFn: getTodayParticipants,
  })
  return { participants }
}

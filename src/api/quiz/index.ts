import { get } from '@/lib/axios'

export async function getTodayParticipants() {
  const res = await get<number>('/learnings/today/participants')
  return res
}

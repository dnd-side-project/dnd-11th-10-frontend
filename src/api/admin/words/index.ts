import { get } from '@/lib/axios'
import { AdminWordType } from '@/types/word'

export async function getWordDetailById(wordId: number) {
  const res = await get<AdminWordType>(`/admin/words/${wordId}`)
  return res
}

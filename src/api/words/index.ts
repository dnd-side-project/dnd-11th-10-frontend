import { get } from '@/lib/axios'
import { SuccessResponse } from '@/types/response'
import { FilterType, SimpleWordType } from '@/types/word'

export async function getAllWords(category: FilterType) {
  const res = await get<SuccessResponse<SimpleWordType[]>>(
    `/words?category=${category}`,
  )
  return res.words
}

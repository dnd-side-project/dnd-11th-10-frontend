import { get } from '@/lib/axios'
import { SuccessResponse } from '@/types/response'
import { DetailWordType, FilterType, SimpleWordType } from '@/types/word'

export async function getAllWords(
  category: FilterType,
  sortBy: string | undefined,
) {
  const res = await get<SuccessResponse<SimpleWordType[]>>(
    `/words?category=${category}&sortBy=${sortBy}`,
  )
  return res.words
}

export async function getWordDetailById(wordId: number) {
  const res = await get<DetailWordType>(`/words/${wordId}`)
  return res
}

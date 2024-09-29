import { get } from '@/lib/axios'
import { SuccessResponse } from '@/types/response'
import { FilterType, SimpleWordType } from '@/types/word'

// 사용자 북마크 목록 조회
export async function getBookmarks(category: FilterType) {
  const res = await get<SuccessResponse<SimpleWordType[]>>(
    `/bookmarks?category=${category}`,
  )
  return res.words
}

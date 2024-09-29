import { get } from '@/lib/axios'
import { SuccessResponse } from '@/types/response'
import { SimpleWordType } from '@/types/word'

// 사용자 북마크 목록 조회
export async function getBookmarks() {
  const res = await get<SuccessResponse<SimpleWordType[]>>(`/bookmarks`)
  return res.words
}

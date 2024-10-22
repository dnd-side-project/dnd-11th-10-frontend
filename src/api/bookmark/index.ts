import { get } from '@/lib/axios'
import { BookmarkListResponse } from '@/types/response'
import { FilterType } from '@/types/word'

// 사용자 북마크 목록 조회
export async function getBookmarks(category: FilterType, pageParam: string) {
  const res = await get<BookmarkListResponse>(
    `/bookmarks?category=${category}?lastBookmarkId=${pageParam}`,
  )
  return res
}

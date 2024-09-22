import { get } from '@/lib/axios'
import { DetailCommentType, SimpleCommentType } from '@/types/comment'
import { SuccessResponse } from '@/types/response'

export async function getPopularComments() {
  const res =
    await get<SuccessResponse<SimpleCommentType[]>>('/comments/popular')
  return res.comments
}

// 용어 상세 페이지 댓글 목록 조회
export async function getCommentsByWordId(wordId: number) {
  const res = await get<SuccessResponse<DetailCommentType[]>>(
    `/words/${wordId}/comments`,
  )
  return res.comments as DetailCommentType[]
}

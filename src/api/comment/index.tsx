import { del, get, post } from '@/lib/axios'
import { DetailCommentType, SimpleCommentType } from '@/types/comment'
import { SuccessResponse } from '@/types/response'

export async function getPopularComments() {
  const res =
    await get<SuccessResponse<SimpleCommentType[]>>('/comments/popular')
  return res.comments
}

// 용어 상세 페이지 댓글 목록 조회
export async function getCommentsByWordId(
  wordId: number,
  sortBy: string | null,
) {
  const res = await get<SuccessResponse<DetailCommentType[]>>(
    `/words/${wordId}/comments?sortBy=${sortBy}`,
  )
  return res.comments as DetailCommentType[]
}

// 댓글 등록
export async function addComment(wordId: number, comment: string) {
  const res = await post(`/words/${wordId}/comments`, { content: comment })
  return res
}

// 댓글 삭제
export async function deleteComment(wordId: number, commentId: number) {
  const res = await del(`/words/${wordId}/comments/${commentId}`)
  return res
}

// 댓글 좋아요
export async function toggleCommentLike(commentId: number) {
  const res = await post(`/comments/${commentId}/like`)
  return res
}

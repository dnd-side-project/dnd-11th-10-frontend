import { get } from '@/lib/axios'
import { SimpleCommentType } from '@/types/comment'
import { SuccessResponse } from '@/types/response'

export async function getPopularComments() {
  const res =
    await get<SuccessResponse<SimpleCommentType[]>>('/comments/popular')
  return res.comments
}

import { post } from '@/lib/axios'
import { SuccessResponse } from '@/types/response'

export async function postRefreshToken(): Promise<SuccessResponse<string>> {
  return await post(`${process.env.NEXT_PUBLIC_BASE_URL}/refresh-token`)
}

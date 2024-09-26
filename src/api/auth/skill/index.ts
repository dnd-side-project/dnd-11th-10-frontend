import { get } from '@/lib/axios'

// 유저 상위 퍼센트 조회
export async function getUserPrecedence() {
  const res = await get<number>('/skill/precedence')
  return res
}

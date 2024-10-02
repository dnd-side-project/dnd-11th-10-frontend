import { post } from '@/lib/axios'
import { ProfileData } from '@/types/profile'
import { SuccessResponse } from '@/types/response'

export async function postProfileData(
  profileData: ProfileData,
): Promise<SuccessResponse<any>> {
  return await post(`${process.env.NEXT_PUBLIC_BASE_URL}/profile`, profileData)
}

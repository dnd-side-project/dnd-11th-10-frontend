import { post } from '@/lib/axios'
import { useAuthStore } from '@/store/useAuthStore'

export const refreshToken = async () => {
  try {
    const { accessToken } = await post<{ accessToken: string }>(
      '/refresh-token',
    )
    useAuthStore.setState({ accessToken })
    return accessToken
  } catch (error) {
    throw error
  }
}

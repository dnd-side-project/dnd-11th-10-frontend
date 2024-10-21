import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  accessToken: string | null
  userId: number | null
  setUserId: (id: number | null) => void
  setAccessToken: (token: string | null) => void
  clearAccessToken: () => void
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      accessToken: null,
      userId: null,
      setUserId: (id) => set({ userId: id }),
      setAccessToken: (token) => set({ accessToken: token }),
      clearAccessToken: () => set({ accessToken: null }),
    }),
    {
      name: 'userStorage',
    },
  ),
)

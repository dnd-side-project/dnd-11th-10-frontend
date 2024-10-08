import { create } from 'zustand'

interface AuthState {
  accessToken: string | null
  setAccessToken: (token: string | null) => void
  clearAccessToken: () => void
  userId: number | null
  setUserId: (userId: number) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
  userId: null,
  setUserId: (id) => set({ userId: id }),
}))

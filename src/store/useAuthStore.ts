import { create } from 'zustand'

interface AuthState {
  accessToken: string | null
  userId: number | null
  setUserId: (id: number | null) => void
  setAccessToken: (token: string | null) => void
  clearAccessToken: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  userId: null,
  setUserId: (id) => set({ userId: id }),
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
}))

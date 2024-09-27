import { create } from 'zustand'

interface AuthState {
  accessToken: string | null
  role: string | null
  setAccessToken: (token: string | null) => void
  setRole: (role: string | null) => void
  clearAccessToken: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  role: null,
  setAccessToken: (token) => set({ accessToken: token }),
  setRole: (role) => set({ role: role }),
  clearAccessToken: () => set({ accessToken: null }),
}))

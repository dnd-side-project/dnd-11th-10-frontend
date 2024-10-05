import { create } from 'zustand'

interface SearchState {
  keyword: string
  setKeyword: (newKeyword: string) => void
}

export const useSearchStore = create<SearchState>((set) => ({
  keyword: '',
  setKeyword: (newKeyword: string) => set({ keyword: newKeyword }),
}))

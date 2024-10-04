import { create } from 'zustand'

interface SearchState {
  keyword: string
  setKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const useSearchStore = create<SearchState>((set) => ({
  keyword: '',
  setKeyword: (e) => set({ keyword: e.target.value }),
}))

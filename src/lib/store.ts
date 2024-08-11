import create from 'zustand'

export interface CurrentProblemState {
  currentProblem: number
  setCurrentProblem: (index: number) => void
  currentPersent: number
  setCurrentPersent: (index: number) => void
}

export const useStore = create<CurrentProblemState>()((set) => ({
  currentProblem: 1,
  setCurrentProblem: () =>
    set((index) => ({ currentProblem: index.currentProblem + 1 })),

  currentPersent: 20,
  setCurrentPersent: () =>
    set((index) => ({ currentPersent: index.currentProblem * 20 })),
}))

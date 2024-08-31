import { create } from 'zustand'

interface QuizState {
  problemIndex: number
  currentProblem: number
  currentPercent: number
  answer: number[]

  setProblemIndex: (index: number) => void
  setCurrentProblem: (problem: number) => void
  setCurrentPercent: (percent: number) => void
  addAnswer: (optionWordId: number) => void
}

export const useQuizStore = create<QuizState>((set) => ({

  problemIndex: 0,
  currentProblem: 1,
  currentPercent: 20,
  answer: [],

  setProblemIndex: (index: number) => set({ problemIndex: index }),
  setCurrentProblem: (problem: number) => set({ currentProblem: problem }),
  setCurrentPercent: (percent: number) => set({ currentPercent: percent }),
  addAnswer: (optionWordId: number) =>
    set((state) => ({ answer: [...state.answer, optionWordId] })),
}))

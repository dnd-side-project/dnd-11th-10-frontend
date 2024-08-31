import create from 'zustand'

export interface CurrentProblemState {
  currentProblem: number
  setCurrentProblem: (index: number) => void
  currentPercent: () => number
}

export interface SelectQuizTypeState {
  selectedQuiz: number | null
  setSelectedQuiz: (quizType: number | null) => void
}

export const useQuizStore = create<CurrentProblemState>()((set, get) => ({
  currentProblem: 1,
  setCurrentProblem: (index: number) => set(() => ({ currentProblem: index })),
  currentPercent: () => {
    const totalProblems = 5
    return get().currentProblem / totalProblems
  },
}))

export const useSelectQuizTypeStore = create<SelectQuizTypeState>()((set) => ({
  selectedQuiz: null,
  setSelectedQuiz: (quizType: number | null) =>
    set(() => ({ selectedQuiz: quizType })),
}))

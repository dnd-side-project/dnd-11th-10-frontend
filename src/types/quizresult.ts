export interface ExplanationInfo {
  wordId: number
  isCorrect: boolean
  isMarked: boolean
  name: string
  selectedOptionDescription: string
  answerOptionDescription: string
}

export interface QuizResult {
  id: number
  correctCount: number
  explanationInfo: ExplanationInfo[]
}

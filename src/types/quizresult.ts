export interface ExplantionInfoType {
  wordId: number
  isCorrect: boolean
  isMarked: boolean
  name: 'string'
  selectedOptionDescription: 'string'
  answerOptionDescription: 'string'
}

export interface QuizResultType {
  id: number
  correctCount: number
  explanationInfo: ExplantionInfoType[]
}

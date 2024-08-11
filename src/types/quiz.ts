export interface OptionInfoType {
  optionWordId: number
  meaning: string
}

export interface ProblemInfoType {
  answerId: number
  question: string
  name: string
  category: string
  correctPercent: number
  wrongPercent: number
  optionInfo: OptionInfoType[]
}

export interface QuizType {
  id: number
  problemInfo: ProblemInfoType[]
}

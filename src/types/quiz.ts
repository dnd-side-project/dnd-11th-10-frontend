export interface OptionInfoType {
  optionWordId: number
  meaning: string
}

export interface ProblemInfoType {
  answerId: number
  question: string
  name: string
  category: "비즈니스" | "개발" | "디자인"
  correctPercent: number
  wrongPercent: number
  optionInfo: OptionInfoType[]
}

export interface QuizType {
  id: number
  problemInfo: ProblemInfoType[]
}

export interface SearchWord {
  id: number
  name: string
  pronunciationInfo: {
    english: string
  }
  meaning: string
  category: "비즈니스" | "개발" | "디자인"
  viewCount: number
  commentCount: number
}

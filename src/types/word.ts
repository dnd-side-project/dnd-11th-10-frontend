export type CategoryType = {
  category: '비즈니스' | '디자인' | '개발'
}

export type FilterType = '전체' | CategoryType['category']

export type SimpleWordType = {
  id: number
  name: string
  meaning: string
  viewCnt: number
  commentCnt: number
} & CategoryType

export type DetailWordType = {
  id: number
  name: string
  pronunciationInfo: {
    english: string
  }
  meaning: string
  viewCount: number
  commentCount: number
  isMarked: boolean
  markedCount: number
  example: { text: string; source: string; createdAt: Date }[]
  source: string
  createdAt: Date
  updatedAt: Date
} & CategoryType

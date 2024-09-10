export type CategoryType = {
  category: '비즈니스' | '디자인' | '개발'
}

export type FilterType = '전체' | CategoryType['category']

export type WordSortType = 'name' | 'viewCount'

export type SimpleWordType = {
  id: number
  name: string
  meaning: string
  viewCount: number
  commentCount: number
} & CategoryType

export type DetailWordType = {
  pronunciationInfo: {
    english: string
  }
  isMarked: boolean
  bookmarkCount: number
  example: { text: string; source: string; createdAt: Date }[]
  source: string
  createdAt: Date
  updatedAt: Date
} & SimpleWordType

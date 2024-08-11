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

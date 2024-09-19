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
  example: string
  resource: string
  createdAt: Date
  updatedAt: Date
} & SimpleWordType

// 관리자 용어 조회
export type AdminWordType = Pick<
  DetailWordType,
  'id' | 'name' | 'pronunciationInfo' | 'meaning' | 'category' | 'example'
>

// 관리자 용어 등록 폼 타입
export type AddWordType = Omit<AdminWordType, 'id'>

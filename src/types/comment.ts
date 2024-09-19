import { CategoryType } from './word'

export interface SimpleCommentType {
  id: number
  content: string
  likeCount: number
  createdAt: string
  updatedAt: string
  isLike: boolean
  wordInfo: {
    id: number
    name: string
    categoryName: CategoryType['category']
  }
}

export type DetailCommentType = {
  commentId: number
  wordId: number
  writerInfo: {
    id: number
    nickname: string
    profileImage: string
    company: string
    jobGroup: string
    experience: string
  }
} & Omit<SimpleCommentType, 'wordInfo'>

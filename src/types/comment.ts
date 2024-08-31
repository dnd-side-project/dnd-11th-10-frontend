import { CategoryType } from './word'

export interface SimpleCommentType {
  id: number
  content: string
  likeCount: number
  createdAt: string
  isLike: boolean
  wordInfo: {
    id: number
    name: string
    pronunciationInfo: {
      korean: string
    }
  } & CategoryType
}

export type DetailCommentType = {
  writerInfo: {
    id: number
    nickname: string
    profileImage: string
    company: string
    jobGroup: string
    experience: string
  }
} & SimpleCommentType

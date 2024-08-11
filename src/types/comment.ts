import { CategoryType } from './word'

export interface SimpleCommentType {
  id: number
  content: string
  likeCount: number
  createdAt: string
  isLike: boolean
  writerInfo: {
    id: number
    nickname: string
    profileImage: string
    company: string
    jobGroup: string
    experience: string
  }
  wordInfo: {
    id: number
    name: string
    pronunciationInfo: {
      korean: string
    }
  } & CategoryType
}

export type CommentType = {}

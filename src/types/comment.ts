import { CategoryProps } from '@/components/shared/CategoryTag'

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
  } & CategoryProps
}

export type CommentType = {}

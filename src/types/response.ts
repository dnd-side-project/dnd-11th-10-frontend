import { SimpleWordType } from './word'

export type SuccessResponse<T> = {
  code: string
  [key: string]: T | string
}

export type FailResponse<T> = {
  code: string
  message: string
}

export type BookmarkListResponse = {
  words: SimpleWordType[]
  lastBookmarkId: string
}

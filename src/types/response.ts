export type SuccessResponse<T> = {
  code: string
  data: T
}

export type FailResponse<T> = {
  code: string
  message: string
}

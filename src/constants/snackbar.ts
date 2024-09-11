export type SNACKBAR_TYPE =
  | 'commentAdd'
  | 'commentEdit'
  | 'commentDelete'
  | 'commentBlock'
  | 'commentReport'
  | 'bookmarkAdd'

export const SNACKBAR: Record<
  SNACKBAR_TYPE,
  { text: string; actionText?: string }
> = {
  commentAdd: {
    text: '댓글이 등록되었어요',
  },
  commentEdit: {
    text: '댓글이 수정되었어요',
  },
  commentDelete: {
    text: '댓글이 삭제되었어요',
  },

  commentBlock: {
    text: '댓글이 차단되었어요',
    actionText: '실행취소',
  },

  commentReport: {
    text: '댓글이 신고되었어요',
  },
  bookmarkAdd: {
    text: '⭐️ 별별 저장소에 등록되었어요',
    actionText: '저장소 가기',
  },
}

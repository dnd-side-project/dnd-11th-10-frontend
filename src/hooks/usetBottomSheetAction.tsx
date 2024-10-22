'use client'
import useUIStore from '@/store/useUIStore'
import useDeleteComment from './comment/useDeleteComment'
import useCommentForm from '@/store/useCommentForm'

// CommentBottom 각 목록마다 다른 액션 처리하기 위한 커스텀 훅
export default function useBottomSheetAction(
  commentId: number,
  wordId?: number,
) {
  const { openBottomSheet, closeBottomSheet, showSnackbar } = useUIStore()
  const { setEditingId } = useCommentForm()
  const { mutate: deleteComment } = useDeleteComment(wordId!)

  const editComment = () => {
    setEditingId(commentId)
    closeBottomSheet()
  }

  const reportComment = (id: number) => {
    console.log('comment id', id)
    openBottomSheet('checkbox')
  }

  return [
    { menu: '수정하기', onClick: editComment },
    { menu: '삭제하기', onClick: () => deleteComment(commentId) },
    { menu: '신고하기', onClick: reportComment },
  ]
}

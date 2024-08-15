'use client'

import useUIStore from '@/store/useUIStore'

// CommentBottom 각 목록마다 다른 액션 처리하기 위한 커스텀 훅
export default function useBottomSheetAction() {
  const { openBottomSheet, closeBottomSheet } = useUIStore()
  const editComment = () => {
    // 댓글 수정 UI 상태 조작 필요
    alert('댓글 수정')
    closeBottomSheet()
  }

  const deleteComment = () => {
    alert('댓글 삭제')
    closeBottomSheet()
  }

  const reportComment = (id: number) => {
    console.log('comment id', id)
    openBottomSheet('checkbox')
  }

  return [
    { menu: '수정하기', onClick: editComment },
    { menu: '삭제하기', onClick: deleteComment },
    { menu: '신고하기', onClick: reportComment },
  ]
}

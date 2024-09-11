import { useRouter } from 'next/navigation'

export default function useSnackbarAction() {
  const router = useRouter()

  const undoCommentBlock = () => {
    alert('댓글 차단 실행 취소')
  }

  const goToBookmark = () => {
    alert('저장소 보러가기')
    router.push('/bookmarks')
  }

  return [
    { type: 'commentBlock', onClick: undoCommentBlock },
    { type: 'bookmarkAdd', onClick: goToBookmark },
  ]
}

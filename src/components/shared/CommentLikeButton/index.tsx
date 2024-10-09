import useToggleCommentLike from '@/hooks/comment/useToggleCommentLike'
import { useAuthStore } from '@/store/useAuthStore'
import useUIStore from '@/store/useUIStore'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type CommentLikeButtonProps = {
  commentId: number
  isLike: boolean
  likeCount?: number
}

export default function CommentLikeButton({
  commentId,
  isLike,
  likeCount,
}: CommentLikeButtonProps) {
  const pathname = usePathname()
  const wordId = parseInt(pathname.split('/').at(-1)!)
  const { mutate: toggleCommentLike } = useToggleCommentLike(wordId)
  const { userId } = useAuthStore()
  const { openBottomSheet } = useUIStore()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!userId) {
      openBottomSheet('login')
      return
    }
    toggleCommentLike({ commentId })
  }
  return (
    <button className="flex gap-1">
      <Image
        alt="좋아요"
        src={isLike ? '/icons/heart_fill.svg' : '/icons/heart_outline.svg'}
        width={16}
        height={16}
        onClick={handleClick}
      />
      <p className="text-caption text-onSurface-200">{likeCount}</p>
    </button>
  )
}

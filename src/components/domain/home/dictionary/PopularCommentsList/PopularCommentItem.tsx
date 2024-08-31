import CategoryTag from '@/components/shared/CategoryTag'
import WordTag from '@/components/shared/WordTag'
import useUIStore from '@/store/useUIStore'
import { SimpleCommentType } from '@/types/comment'
import { getTimeAgo } from '@/utils/date'
import Image from 'next/image'
import Link from 'next/link'

export type CommentItemProps = {
  comment: SimpleCommentType
  setTargetId: (id: number) => void
}

export default function PopularCommentItem({
  comment,
  setTargetId,
}: CommentItemProps) {
  const {
    id,
    content,
    isLike,
    likeCount,
    createdAt,
    wordInfo: { id: wordId, name, category, pronunciationInfo },
  } = comment
  const { openBottomSheet } = useUIStore()

  const handleClickMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    openBottomSheet('comment')
    setTargetId(id)
  }

  return (
    <>
      <Link
        href={`/words/${wordId}`}
        className="flex flex-col gap-3 justify-between py-6 px-5 bg-gray-800 rounded-2xl"
      >
        <div className="flex justify-between">
          <div className="flex gap-2">
            <WordTag text={name} />
            <WordTag text={pronunciationInfo.korean} />
            <CategoryTag category={category} />
          </div>
          <Image
            alt="menu"
            src={'/icons/vertical_menu.svg'}
            width={24}
            height={24}
            onClick={handleClickMenu}
          />
        </div>
        <p className="text-onSurface-300 break-keep overflow-hidden line-clamp-3">
          {content}
        </p>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <Image
              alt="좋아요"
              src={'/icons/heart_outline.svg'}
              width={16}
              height={16}
            />
            <p className="text-caption text-onSurface-200">{likeCount}</p>
          </div>
          <p className="text-caption text-onSurface-200">
            {getTimeAgo(createdAt)}
          </p>
        </div>
      </Link>
    </>
  )
}

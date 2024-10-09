import { DetailCommentType } from '@/types/comment'
import { getTimeAgo } from '@/utils/date'
import Image from 'next/image'
import useUIStore from '@/store/useUIStore'
import CommentLikeButton from '../CommentLikeButton'
import useCommentForm from '@/store/useCommentForm'

export type CommentItemProps = {
  comment: DetailCommentType
  setTargetId: (id: number) => void
  setWriterId: (id: number) => void
}

export default function CommentItem({
  comment,
  setTargetId,
  setWriterId,
}: CommentItemProps) {
  const {
    commentId,
    content,
    isLike,
    likeCount,
    createdAt,
    writerInfo: {
      id: writerId,
      nickname,
      profileImage,
      company,
      jobGroup,
      experience,
    },
  } = comment
  const { openBottomSheet } = useUIStore()
  const { setEditingText } = useCommentForm()
  return (
    <>
      <div className="flex flex-col gap-3 justify-between py-8 px-4 border-b-[1.5px] border-outline">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Image
              // 프로필 이미지 url 변경 필요
              src={'/images/logo.svg'}
              width={38}
              height={38}
              alt="profile"
            />
            <div>
              <p className="text-onSurface-300 text-body3">{nickname}</p>
              <p className="text-onSurface-200 text-caption">
                {jobGroup + ' · ' + company + ' · ' + experience}
              </p>
            </div>
          </div>
          <Image
            alt="menu"
            src={'/icons/vertical_menu.svg'}
            width={24}
            height={24}
            onClick={() => {
              setTargetId(commentId)
              setWriterId(writerId)
              setEditingText(content)
              openBottomSheet('comment')
            }}
            className="cursor-pointer"
          />
        </div>
        <p className="text-onSurface-300 break-keep overflow-hidden line-clamp-3">
          {content}
        </p>
        <div className="flex justify-between">
          <CommentLikeButton
            commentId={commentId}
            isLike={isLike}
            likeCount={likeCount}
          />
          <p className="text-caption text-onSurface-200">
            {getTimeAgo(createdAt)}
          </p>
        </div>
      </div>
    </>
  )
}

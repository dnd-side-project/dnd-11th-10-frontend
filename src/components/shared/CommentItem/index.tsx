import { DetailCommentType } from '@/types/comment'
import { getTimeAgo } from '@/utils/date'
import Image from 'next/image'
import useUIStore from '@/store/useUIStore'

export type CommentItemProps = {
  comment: DetailCommentType
  setTargetId: (id: number) => void
}

export default function CommentItem({
  comment,
  setTargetId,
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
              openBottomSheet('comment')
            }}
            className="cursor-pointer"
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
      </div>
    </>
  )
}

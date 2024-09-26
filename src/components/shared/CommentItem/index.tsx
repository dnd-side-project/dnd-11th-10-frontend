import { DetailCommentType } from '@/types/comment'
import { getTimeAgo } from '@/utils/date'
import Image from 'next/image'
import useUIStore from '@/store/useUIStore'
import CommentBottomSheet from '../CommentBottomSheet'
import CheckboxBottomSheet from '../CheckboxBottomSheet'

export type CommentItemProps = {
  comment: DetailCommentType
}

export default function CommentItem({ comment }: CommentItemProps) {
  const {
    wordId,
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
  const { bottomSheetType, openBottomSheet } = useUIStore()
  // writerId와 현재 로그인한 사용자 비교
  const isMyComment = true
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
      {/* 댓글 메뉴 bottomSheet */}
      <CommentBottomSheet
        isOpen={bottomSheetType === 'comment'}
        targetId={commentId as number}
        wordId={wordId as number}
        // 로그인 사용자와 writerInfo 사용자와 일치하면 mine 아니면 others
        target={isMyComment ? 'mine' : 'others'}
      />
      <CheckboxBottomSheet
        isOpen={bottomSheetType === 'checkbox'}
        type="commentReport"
        targetId={commentId as number}
      />
    </>
  )
}

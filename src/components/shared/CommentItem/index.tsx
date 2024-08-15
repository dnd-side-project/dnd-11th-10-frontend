import CategoryTag from '@/components/shared/CategoryTag'
import WordTag from '@/components/shared/WordTag'
import { SimpleCommentType } from '@/types/comment'
import { getTimeAgo } from '@/utils/date'
import Image from 'next/image'
import Link from 'next/link'

export interface CommentItemProps extends SimpleCommentType {
  showTags: boolean
}

export default function CommentItem({
  showTags,
  id,
  content,
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
  wordInfo: { id: wordId, name, pronunciationInfo, category },
}: CommentItemProps) {
  return (
    <Link
      href={`/word/${wordId}`}
      className="flex flex-col gap-3 justify-between p-5 bg-gray-800 rounded-2xl"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Image
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
        />
      </div>
      <p className="text-onSurface-300 break-keep overflow-hidden line-clamp-3">
        {content}
      </p>
      {/* 메인 '반응이 뜨거운 댓글' 파트에서만 태그 표기 */}
      {showTags && (
        <div className="flex gap-2">
          <WordTag text={name} />
          <WordTag text={pronunciationInfo.korean} />
          <CategoryTag category={category} />
        </div>
      )}
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
  )
}

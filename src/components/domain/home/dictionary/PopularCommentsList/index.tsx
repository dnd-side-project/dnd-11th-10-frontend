'use client'
import { SimpleCommentType } from '@/types/comment'
import PopularCommentItem from './PopularCommentItem'
import CommentBottomSheet from '@/components/shared/CommentBottomSheet'
import CheckboxBottomSheet from '@/components/shared/CheckboxBottomSheet'
import useUIStore from '@/store/useUIStore'
import { useState } from 'react'

export default function PopularCommentsList({
  PopularComments,
}: {
  PopularComments: SimpleCommentType[]
}) {
  const { bottomSheetType } = useUIStore()
  const [targetId, setTargetId] = useState<number>()
  return (
    <>
      <div className="mx-4">
        <div className="w-full">
          <p className="text-h2 text-[#f3f3f3] mb-3">
            지금 반응이 뜨거운 댓글 🔥
          </p>
          <ul className="flex flex-col gap-4 w-full">
            {PopularComments.map((comment, idx) => (
              <li key={comment.id}>
                <PopularCommentItem
                  comment={comment}
                  setTargetId={setTargetId}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CommentBottomSheet
        isOpen={bottomSheetType === 'comment'}
        targetId={targetId as number}
        target="others"
      />
      <CheckboxBottomSheet
        isOpen={bottomSheetType === 'checkbox'}
        type="report"
        targetId={targetId as number}
      />
    </>
  )
}

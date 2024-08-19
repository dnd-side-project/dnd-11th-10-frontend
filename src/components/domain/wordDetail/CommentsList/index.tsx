'use client'
import Image from 'next/image'
import { Comments } from './data'
import SortButton from '@/components/common/SortButton'
import { useState } from 'react'
import useUIStore from '@/store/useUIStore'
import FilterBottomSheet from '@/components/shared/FilterBottomSheet'
import CommentItem from '@/components/shared/CommentItem'
import CommentBottomSheet from '@/components/shared/CommentBottomSheet'
import CommentInput from '../CommentTextarea'
import { usePathname } from 'next/navigation'

export default function CommentsList() {
  const pathname = usePathname()
  const wordId = pathname.split('/').at(-1) ?? ''

  const [sortType, setSortType] = useState('좋아요순')
  const [openId, setOpenId] = useState<number>()
  const { bottomSheetType, openBottomSheet } = useUIStore()

  const handleRefresh = () => {
    // 댓글 새로고침
  }
  return (
    <>
      <div className="w-full flex flex-col gap-2 mt-10">
        <div className="flex justify-between px-4 mb-5">
          <div className="flex items-center gap-2">
            <p className="text-h3">
              <span className="text-primary-400">{Comments.length}</span>개의
              댓글
            </p>
            <Image
              alt="refresh"
              src={'/icons/refresh.svg'}
              width={24}
              height={24}
              onClick={handleRefresh}
              className="cursor-pointer"
            />
          </div>
          <SortButton
            text={sortType}
            onClick={() => openBottomSheet('filter')}
          />
        </div>
        <div className="w-full box-border px-4">
          <CommentInput wordId={wordId} />
        </div>
        <div>
          {Comments.map((comment, idx) => {
            return (
              <CommentItem
                key={comment.id}
                comment={comment}
                setOpenId={setOpenId}
              />
            )
          })}
        </div>
      </div>
      {/* 정렬 bottomSheet */}
      <FilterBottomSheet
        isOpen={bottomSheetType === 'filter'}
        selected={sortType}
        setSelected={(menu) => setSortType(menu)}
        target="comments"
      />
      <CommentBottomSheet
        isOpen={bottomSheetType === 'comment'}
        commentId={openId as number}
        // 로그인 사용자와 writerInfo 사용자와 일치하면 mine 아니면 others
        target="others"
      />
    </>
  )
}

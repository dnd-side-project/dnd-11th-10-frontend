'use client'
import Image from 'next/image'
import SortButton from '@/components/common/SortButton'
import { useEffect, useState } from 'react'
import useUIStore from '@/store/useUIStore'
import FilterBottomSheet from '@/components/shared/FilterBottomSheet'
import CommentItem from '@/components/shared/CommentItem'
import CommentBottomSheet from '@/components/shared/CommentBottomSheet'
import CommentInput from '../CommentTextarea'
import CheckboxBottomSheet from '@/components/shared/CheckboxBottomSheet'
import { useGetComments } from '@/hooks/comment/useGetComments'
import { useAuthStore } from '@/store/useAuthStore'
import LoginBottomSheet from '@/components/shared/LoginBottomSheet'
import useCommentForm from '@/store/useCommentForm'

export default function CommentsList({ wordId }: { wordId: number }) {
  const [sortType, setSortType] = useState('likeCount')
  const [targetId, setTargetId] = useState<number>()
  const [writerId, setWriterId] = useState<number>()
  const { bottomSheetType, openBottomSheet } = useUIStore()
  const { setEditingId, setEditingText } = useCommentForm()
  const { comments, isFetching, isLoading, refetch } = useGetComments(
    wordId,
    sortType,
  )
  const commentsLength = comments?.length as number
  const { userId } = useAuthStore()

  useEffect(() => {
    return () => {
      setEditingText(null)
      setEditingId(null)
    }
  }, [setEditingId, setEditingText])

  if (!comments && (!isFetching || !isLoading)) return
  return (
    <>
      {isFetching || isLoading ? (
        <div className="h-72 flex items-center justify-center">
          <Image
            src={'/gif/loading.gif'}
            alt="loading.gif"
            width={80}
            height={80}
          />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 mt-10">
          <div className="flex justify-between px-4 mb-5">
            <div className="flex items-center gap-2">
              <p className="text-h3">
                <span className="text-primary-400">{commentsLength}</span>개의
                댓글
              </p>
              <Image
                alt="refresh"
                src={'/icons/refresh.svg'}
                width={24}
                height={24}
                onClick={() => refetch()}
                className="cursor-pointer"
              />
            </div>
            <SortButton
              sortBy={sortType}
              onClick={() => openBottomSheet('filter')}
            />
          </div>
          <div className="w-full box-border px-4">
            <CommentInput wordId={wordId} />
          </div>
          {/* 댓글 리스트 */}
          {commentsLength > 0 ? (
            comments?.map((comment, idx) => (
              <CommentItem
                key={comment.commentId}
                comment={comment}
                setTargetId={setTargetId}
                setWriterId={setWriterId}
              />
            ))
          ) : (
            <div className="w-full flex flex-col gap-5 items-center py-10">
              {/* 일러 변경 필요 */}
              <Image
                alt="image"
                src={'/images/logo.svg'}
                width={80}
                height={80}
              />
              <p className="text-onSurface-100">첫 댓글을 남겨보세요.</p>
            </div>
          )}
        </div>
      )}

      {/* 정렬 bottomSheet */}
      <FilterBottomSheet
        isOpen={bottomSheetType === 'filter'}
        selected={sortType}
        setSortType={setSortType}
        target="comments"
      />
      <CommentBottomSheet
        isOpen={bottomSheetType === 'comment'}
        targetId={targetId as number}
        target={userId === writerId ? 'mine' : 'others'}
        wordId={wordId}
      />
      <CheckboxBottomSheet
        isOpen={bottomSheetType === 'checkbox'}
        type="commentReport"
        targetId={targetId as number}
      />
      <LoginBottomSheet isOpen={bottomSheetType === 'login'} type="loginBtn" />
    </>
  )
}

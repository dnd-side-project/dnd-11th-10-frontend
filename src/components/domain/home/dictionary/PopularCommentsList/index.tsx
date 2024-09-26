'use client'
import PopularCommentItem from './PopularCommentItem'
import { useGetPopularComments } from '@/hooks/comment/useGetPopularComments'

export default function PopularCommentsList() {
  const { comments: popularComments } = useGetPopularComments()
  if (!popularComments || typeof popularComments === 'string') return

  return (
    <>
      <div className="mx-4">
        <div className="w-full">
          <p className="text-h2 text-[#f3f3f3] mb-3">
            지금 반응이 뜨거운 댓글 🔥
          </p>
          <ul className="flex flex-col gap-4 w-full">
            {popularComments &&
              popularComments.map((comment, idx) => (
                <li key={comment.id}>
                  <PopularCommentItem comment={comment} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  )
}

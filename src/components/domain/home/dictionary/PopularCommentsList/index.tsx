import { SimpleCommentType } from '@/types/comment'
import PopularCommentItem from './PopularCommentItem'

export default function PopularCommentsList({
  PopularComments,
}: {
  PopularComments: SimpleCommentType[]
}) {
  return (
    <div className="mx-4">
      <div className="w-full">
        <p className="text-h2 text-[#f3f3f3] mb-3">
          지금 반응이 뜨거운 댓글 🔥
        </p>
        <ul className="flex flex-col gap-4 w-full">
          {PopularComments.map((comment, idx) => (
            <li key={comment.id}>
              <PopularCommentItem comment={comment} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

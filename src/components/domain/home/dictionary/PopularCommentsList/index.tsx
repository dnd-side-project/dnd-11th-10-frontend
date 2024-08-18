import CommentItem from '@/components/shared/CommentItem'
import { SimpleCommentType } from '@/types/comment'

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
          {PopularComments.map(
            ({ id, content, likeCount, createdAt, isLike, wordInfo }, idx) => (
              <li key={id}>
                <CommentItem
                  showTags
                  id={id}
                  content={content}
                  likeCount={likeCount}
                  createdAt={createdAt}
                  isLike={isLike}
                  wordInfo={wordInfo}
                />
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}

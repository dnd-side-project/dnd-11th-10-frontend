import CategoryTag from '@/components/shared/CategoryTag'
import { SimpleWordType } from '@/types/word'
import Image from 'next/image'
import Link from 'next/link'
import BookmarkButton from '../BookmarkButton'
import { usePathname } from 'next/navigation'

type WordListItemProps = {
  word: SimpleWordType
  showBookmarkBtn: boolean
  isMarked?: boolean
}

export default function WordListItem({
  word: { id, category, name, meaning, viewCount, commentCount },
  showBookmarkBtn = false,
  isMarked,
}: WordListItemProps) {
  const pathname = usePathname()
  const isBookmarkPage = pathname.startsWith('/bookmarks')

  return (
    <>
      <Link
        href={`/words/${id}`}
        className="w-full block px-4 py-6 border-b-[1px] border-outline"
      >
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <CategoryTag category={category} />
            {showBookmarkBtn && (
              <BookmarkButton
                isMarked={isMarked! || isBookmarkPage}
                wordId={id}
              />
            )}
          </div>

          <p className="text-sub1">{name}</p>
          <p className="text-onSurface-200 break-keep line-clamp-3">
            {meaning}
          </p>
        </div>
        {/* 하단 조회수, 댓글수 */}
        <div className="flex gap-6 text-onSurface-200 mt-3 text-body3">
          <div className="flex gap-1">
            <Image alt="view" src={'/icons/view.svg'} width={16} height={16} />
            <p>{viewCount}</p>
          </div>
          <div className="flex gap-1">
            <Image
              alt="comment"
              src={'/icons/chat.svg'}
              width={16}
              height={16}
            />
            <p>{commentCount}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

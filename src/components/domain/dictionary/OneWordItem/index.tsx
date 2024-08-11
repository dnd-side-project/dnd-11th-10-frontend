import CategoryTag from '@/components/shared/CategoryTag'
import { SimpleWordType } from '@/types/word'
import Image from 'next/image'

type OneWordItemProps = {
  word: SimpleWordType
}

export default function OneWordItem({
  word: { id, category, name, meaning, viewCnt, commentCnt },
}: OneWordItemProps) {
  return (
    <>
      <div className="w-full px-4 py-6 border-b-[1px] border-outline">
        <div className="flex flex-col gap-1">
          <CategoryTag category={category} />
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-onSurface-200 break-keep line-clamp-3">
            {meaning}
          </p>
        </div>
        {/* 하단 조회수, 댓글수 */}
        <div className="flex gap-6 text-onSurface-200 mt-3 text-sm">
          <div className="flex gap-1">
            <Image alt="view" src={'/icons/view.svg'} width={16} height={16} />
            <p>{viewCnt}</p>
          </div>
          <div className="flex gap-1">
            <Image
              alt="comment"
              src={'/icons/chat.svg'}
              width={16}
              height={16}
            />
            <p>{commentCnt}</p>
          </div>
        </div>
      </div>
    </>
  )
}

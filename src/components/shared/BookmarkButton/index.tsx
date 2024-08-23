'use client'
import Image from 'next/image'

type BookmarkButtonProps = {
  wordId: number
  isMarked: boolean
  markCount?: number
}

export default function BookmarkButton({
  wordId,
  isMarked,
  markCount,
}: BookmarkButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    alert(`${wordId} 북마크`)
  }
  return (
    <button>
      <Image
        alt="bookmark"
        src={
          isMarked ? '/icons/bookmark_fill.svg' : '/icons/bookmark_outline.svg'
        }
        width={24}
        height={24}
        onClick={handleClick}
      />
      <p className="text-caption text-onSurface-200">{markCount}</p>
    </button>
  )
}

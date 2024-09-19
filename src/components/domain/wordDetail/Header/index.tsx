'use client'
import BookmarkButton from '@/components/shared/BookmarkButton'
import Header from '@/components/shared/Header'
import { useGetWordDetail } from '@/hooks/word/useGetWordDetail'

export default function WordDetailHeader({ wordId }: { wordId: number }) {
  const { word } = useGetWordDetail(wordId)
  return (
    <Header
      title="용어 상세"
      rightItem={
        <BookmarkButton
          isMarked={word?.isMarked ?? false}
          wordId={wordId}
          markCount={word?.bookmarkCount}
        />
      }
    />
  )
}

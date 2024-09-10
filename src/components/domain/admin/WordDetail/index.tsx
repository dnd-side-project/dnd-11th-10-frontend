'use client'

import { useGetWordDetail } from '@/hooks/admin/useGetDetailWord'

export default function WordDetail({ wordId }: { wordId: number }) {
  const { word, isLoading } = useGetWordDetail(wordId)
  if (!word) return
  const { name, meaning, pronunciationInfo, category, example } = word
  return <div>{name}</div>
}

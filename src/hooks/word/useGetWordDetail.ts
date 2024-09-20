import { getWordDetailById } from '@/api/words'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export const useGetWordDetail = (wordId: number) => {
  const { data: word, isLoading } = useQuery({
    queryKey: ['words', wordId],
    queryFn: () => getWordDetailById(wordId),
  })
  const [viewCount, setViewCount] = useState(0)
  useEffect(() => {
    if (word) {
      setViewCount(word.viewCount)
    }
  }, [word])
  return { word, viewCount, isLoading }
}

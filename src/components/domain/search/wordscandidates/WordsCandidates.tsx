import { useSearchDebounce } from '@/hooks/search/useSearchDebounce'
import { get } from '@/lib/axios'
import { useSearchStore } from '@/store/useSearchStore'
import React, { useEffect, useState } from 'react'

function WordsCandidates() {
  const { keyword } = useSearchStore()
  const [recommendList, setRecommendList] = useState('')
  const debouncedQuery = useSearchDebounce(keyword, 250)

  // 추천 검색어 요청해서 받아오기
  useEffect(() => {
    async function fetchRecommend() {
      const res = await get(`?name=${debouncedQuery}`)
      setRecommendList(res.data)
    }

    if (debouncedQuery) fetchRecommend()
  }, [debouncedQuery])

  return <div>{recommendList}</div>
}

export default WordsCandidates

'use client'

import { candidatesData } from '@/constants/candidatesData'
import { useSearchDebounce } from '@/hooks/search/useSearchDebounce'
import { get } from '@/lib/axios'
import { useSearchStore } from '@/store/useSearchStore'
import React, { useEffect, useState } from 'react'

function WordsCandidates() {
  const { keyword } = useSearchStore()
  const [recommendList, setRecommendList] = useState([])
  const debouncedQuery = useSearchDebounce(keyword, 250)

  // 추천 검색어 요청해서 받아오기
  useEffect(() => {
    async function fetchRecommend() {
      const res: any = await get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/words/candidates?name=${debouncedQuery}`,
      )
      setRecommendList(res.data)
    }

    if (debouncedQuery) fetchRecommend()
  }, [debouncedQuery])

  return <div className="text-onSurface-300">{recommendList}</div>
}

export default WordsCandidates

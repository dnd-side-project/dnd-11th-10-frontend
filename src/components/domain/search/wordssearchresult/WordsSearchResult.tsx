'use client'

import { get } from '@/lib/axios'
import React, { useEffect, useState } from 'react'

interface Word {
  id: number
  name: string
  pronunciationInfo: {
    english: string
  }
  meaning: string
  category: string
  viewCount: number
}

function WordsSearchResult({ keyword }: { keyword: string }) {
  const [words, setWords] = useState<Word[]>([])

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await get<{ words: Word[] }>('/words/search', {
          params: {
            name: keyword,
            size: 15,
            sortBy: 'name',
            category: '전체 실무',
          },
        })
        setWords(response.words || [])
      } catch (error) {
        console.error('Failed to fetch words', error)
        setWords([])
      }
    }

    if (keyword) {
      fetchWords()
    }
  }, [keyword])

  if (words.length === 0) {
    return (
      <div className="text-onSurface-300">No results found for {keyword}</div>
    )
  }

  return (
    <div className="text-onSurface-300">
      {words.map((word) => (
        <div key={word.id} className="mb-4">
          <h3 className="text-lg font-semibold">{word.name}</h3>
          <p>{word.meaning}</p>
          <p className="text-sm text-gray-500">
            {word.pronunciationInfo.english}
          </p>
          <p className="text-sm text-gray-500">{word.category}</p>
        </div>
      ))}
    </div>
  )
}

export default WordsSearchResult

'use client'

import { useEffect, useState } from 'react'
import { getSearchWords } from '@/api/search'
import { SearchWord } from '@/types/searchWords'
import EmptyLayout from '@/components/shared/EmptyLayout'
import WordListItem from '@/components/shared/WordListItem'

function WordsSearchResult({ keyword }: { keyword: string }) {
  const [words, setWords] = useState<SearchWord[]>([])

  useEffect(() => {
    const getWords = async () => {
      const words = await getSearchWords(keyword)
      setWords(words)
    }

    if (keyword) {
      getWords()
    }
  }, [keyword])

  return (
    <>
      {words.length === 0 ? (
        <div className="w-full h-full flex flex-col justify-center items-center mt-64">
          <div />
          <EmptyLayout target={'searchResults'} />
        </div>
      ) : (
        <div className="text-onSurface-300">
          {words.map((word) => (
            <WordListItem
              word={{
                id: word.id,
                category: word.category,
                name: word.name,
                meaning: word.meaning,
                viewCount: word.viewCount,
                // commentCount를 API에서 넘겨주지 않아서 추후에 변경 예정
                commentCount: word.commentCount,
              }}
              key={word.id}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default WordsSearchResult

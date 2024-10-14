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
        <div className="h-[calc(100%-90px)]">
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

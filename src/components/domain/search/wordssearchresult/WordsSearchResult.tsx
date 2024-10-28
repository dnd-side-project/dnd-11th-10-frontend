'use client'

import { useEffect, useState } from 'react'
import { getSearchWords } from '@/api/search'
import { SearchWord } from '@/types/searchWords'
import EmptyLayout from '@/components/shared/EmptyLayout'
import WordListItem from '@/components/shared/WordListItem'
import Image from 'next/image'

function WordsSearchResult({ keyword }: { keyword: string }) {
  const [words, setWords] = useState<SearchWord[]>([])
  const wordsCount = 1

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
          <div className="px-4 flex justify-between">
            <div className="flex gap-1 text-h2">
              <p>검색된용어</p>
              <p className="text-primary-400">{wordsCount}</p>
            </div>
            <p className="flex gap-1 p-1 text-body3">
              정확도순
              <Image
                src="/icons/arrow_down.svg"
                width={8}
                height={8}
                alt="arrow_down.svg"
              />
            </p>
          </div>
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

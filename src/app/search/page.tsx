'use client'
import { useState } from 'react'
import {
  SearchInput,
  WordsPopular,
  WordsSearchResult,
} from '@/components/domain/search'

export default function SearchPage() {
  const [showWordsList, setShowWordsList] = useState<boolean>(false)

  return (
    <div>
      <SearchInput setShowWordsList={setShowWordsList} />
      <div className="px-4">
        {showWordsList ? <WordsSearchResult /> : <WordsPopular />}
      </div>
    </div>
  )
}

'use client'
import { SearchInput, WordsPopular } from '@/components/domain/search'
import { WordsCandidates } from '@/components/domain/search/wordscandidates'
import { useState } from 'react'

export default function SearchPage() {
  const [enterKeyword, setEnterKeyword] = useState(false)
  return (
    <div>
      <SearchInput />
      <div className="px-4">
        {enterKeyword ? <WordsPopular /> : <WordsCandidates />}
      </div>
    </div>
  )
}

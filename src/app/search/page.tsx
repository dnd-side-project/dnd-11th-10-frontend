'use client'
import { Header, WordsPopular } from '@/components/domain/search'
import { WordsCandidates } from '@/components/domain/search/wordscandidates'
import { useState } from 'react'

export default function SearchPage() {
  const [enterKeyword, setEnterKeyword] = useState(false)
  return (
    <div className="px-4">
      <Header />
      {enterKeyword ? <WordsPopular /> : <WordsCandidates />}
    </div>
  )
}

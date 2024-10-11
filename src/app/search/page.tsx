'use client'
import { useState } from 'react'
import {
  SearchInput,
  WordsCandidates,
  WordsPopular,
  WordsSearchResult,
} from '@/components/domain/search'

export default function SearchPage() {
  const [showWordsList, setShowWordsList] = useState<boolean>(false)
  const [isTyping, setIsTyping] = useState<boolean>(false)

  return (
    <div>
      <SearchInput
        setShowWordsList={setShowWordsList}
        setIsTyping={setIsTyping}
      />
      <div className="px-4">
        {isTyping ? (
          <WordsCandidates />
        ) : showWordsList ? (
          <WordsSearchResult />
        ) : (
          <WordsPopular />
        )}
      </div>
    </div>
  )
}

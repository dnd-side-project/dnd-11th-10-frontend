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
  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword)
  }

  return (
    <div>
      <SearchInput
        setShowWordsList={setShowWordsList}
        setIsTyping={setIsTyping}
        onSearch={handleSearch}
      />
      {isTyping ? (
        <WordsCandidates />
      ) : showWordsList ? (
        <WordsSearchResult keyword={searchKeyword} />
      ) : (
        <WordsPopular />
      )}
    </div>
  )
}

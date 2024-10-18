import { get } from '@/lib/axios'
import { SuccessResponse } from '@/types/response'
import {
  DetailWordType,
  DictionaryListResponse,
  FilterType,
  SimpleWordType,
} from '@/types/word'

// 사전 내 용어 목록 조회
export async function getAllWords(
  category: FilterType,
  sortBy: string | undefined,
  lastWordName?: string,
) {
  const res = await get<DictionaryListResponse>(
    `/words?category=${category}&sortBy=${sortBy}&lastWordName=${lastWordName}`,
  )
  return res
}

// 용어 상세 정보 조회
export async function getWordDetailById(wordId: number) {
  const res = await get<DetailWordType>(`/words/${wordId}`)
  return res
}

// 최근 등록된 용어 3개 조회
export async function getRecentWords() {
  const res = await get<SuccessResponse<SimpleWordType[]>>('/words/recent')
  return res.words
}

// 오늘의 용어 3개 조회
export async function getTodayWords() {
  const res = await get<SuccessResponse<SimpleWordType[]>>('/words/todays')
  return res.words
}

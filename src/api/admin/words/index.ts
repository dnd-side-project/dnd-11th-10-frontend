import { del, get, post, put } from '@/lib/axios'
import { AddWordType, AdminWordType } from '@/types/word'

// 용어 id로 용어 상세 정보 조회
export async function getWordDetailById(wordId: number) {
  const res = await get<AdminWordType>(`/admin/words/${wordId}`)
  return res
}

// 용어 등록
export async function addNewWord(word: AddWordType) {
  const res = await post('/admin/words', word)
  return res
}

// 전체 용어 목록 조회
export async function getAllWords() {
  const res = await get<AdminWordType[]>(`/admin/allwords`)
  return res
}

// 용어 정보 수정
export async function editWord(wordId: number, word: AddWordType) {
  const res = await put(`/admin/words/${wordId}`, word)
  return res
}

// 용어 삭제
export async function removeWord(wordId: number) {
  const res = await del(`/admin/words/${wordId}`)
  return res
}

// 전체 용어 개수 조회
export async function getWordsCount() {
  const res = await get<number>('/words/count')
  return res
}

import { get, post, put } from '@/lib/axios'
import { AddWordType, AdminWordType } from '@/types/word'

export async function getWordDetailById(wordId: number) {
  const res = await get<AdminWordType>(`/admin/words/${wordId}`)
  return res
}

export async function addNewWord(word: AddWordType) {
  const res = await post('/admin/words', word)
  return res
}

export async function getAllWords() {
  const res = await get<AdminWordType[]>(`/admin/allwords`)
  return res
}

// 용어 정보 수정
export async function editWord(wordId: number, word: AddWordType) {
  const res = await put(`/admin/words/${wordId}`, word)
  return res
}

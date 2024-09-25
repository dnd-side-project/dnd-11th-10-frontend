import { getAllWords } from '@/api/admin/words'
import AdminWordList from '@/components/domain/admin/WordList'

export default async function WordsListPage() {
  const res = await getAllWords()
  return (
    <div className="px-40 mt-8">
      <p className="text-h2 mb-2">전체 용어</p>
      <AdminWordList words={res} />
    </div>
  )
}

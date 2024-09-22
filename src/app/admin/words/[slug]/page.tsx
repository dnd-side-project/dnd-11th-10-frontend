import { getWordDetailById } from '@/api/admin/words'
import RemoveWordButton from '@/components/domain/admin/DeleteWordButton'
import AdminWordForm from '@/components/domain/admin/WordForm'

export default async function WordDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const wordId = parseInt(params.slug.split('/').at(-1) ?? '')
  const res = await getWordDetailById(wordId)

  return (
    <div className="mx-72 my-8 max-lg:mx-4">
      <div className="flex justify-between items-center mb-6">
        <p className="text-h2">용어 상세</p>
        <RemoveWordButton wordId={wordId} />
      </div>
      <AdminWordForm initWord={res} />
    </div>
  )
}

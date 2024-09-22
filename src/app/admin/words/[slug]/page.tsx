import { getWordDetailById } from '@/api/admin/words'
import AdminWordForm from '@/components/domain/admin/WordForm'

export default async function WordDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const wordId = parseInt(params.slug.split('/').at(-1) ?? '')
  const res = await getWordDetailById(wordId)
  return (
    <div className="mx-72 mt-8 max-lg:mx-4">
      <p className="text-h2 mb-6">용어 상세</p>
      <AdminWordForm initWord={res} />
    </div>
  )
}

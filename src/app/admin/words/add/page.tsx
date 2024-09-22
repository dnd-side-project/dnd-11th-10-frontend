import AdminWordForm from '@/components/domain/admin/WordForm'

export default function AddWordPage() {
  return (
    <>
      <div className="mx-72 my-8 max-lg:mx-4">
        <p className="text-h2 mb-6">용어 등록</p>
        <AdminWordForm />
      </div>
    </>
  )
}

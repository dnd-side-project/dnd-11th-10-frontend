'use client'
import { removeWord } from '@/api/admin/words'
import { useRouter } from 'next/navigation'

export default function RemoveWordButton({ wordId }: { wordId: number }) {
  const router = useRouter()
  const handleClick = async () => {
    if (confirm('정말 삭제하시겠습니까???')) {
      await removeWord(wordId)
      router.push('/admin/words')
    } else {
      window.close()
    }
  }
  return (
    <button
      className="outline outline-1 outline-red-500 text-red-500 hover:bg-red-400 hover:text-white py-2 px-4 rounded-lg"
      onClick={handleClick}
    >
      용어 삭제
    </button>
  )
}

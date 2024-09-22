import { AdminWordType } from '@/types/word'
import Link from 'next/link'

export default function WordListItem({ word }: { word: AdminWordType }) {
  const { id, name, meaning, category } = word
  return (
    <Link
      href={`/admin/words/${id}`}
      className="bg-white flex gap-6 justify-around py-4 px-8 mb-1 rounded hover:bg-opacity-60"
    >
      <p className="w-64 text-h3">{name}</p>
      <p className="flex-1 text-ellipsis line-clamp-1">{meaning}</p>
      <p>{category}</p>
    </Link>
  )
}

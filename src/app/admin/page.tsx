import Link from 'next/link'

const MENUS = [
  { name: '용어 목록 조회', path: '/admin/words' },
  { name: '용어 등록', path: '/admin/word/add' },
  { name: '댓글 신고 조회', path: '/admin/reports' },
]
export default function AdminMagePage() {
  return (
    <>
      <div className="h-full flex flex-col gap-6 justify-center items-center mx-6">
        {MENUS.map((menu, idx) => (
          <Link
            key={idx}
            href={menu.path}
            className="w-full text-center text-h2 bg-gray-800 text-onSurface-300 p-6 hover:bg-gray-700 outline outline-outline outline-2 rounded-lg"
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'

const MENUS = [
  { name: '용어 목록', path: '/admin' },
  { name: '용어 등록', path: '/admin/words/add' },
  { name: '신고 댓글', path: '/admin/reports' },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-gray-100 text-background">
      <nav className="fixed top-0 w-full flex gap-8 max-lg:gap-2 justify-around py-4 bg-white shadow-sm items-center shrink-0">
        <div className="flex gap-2 items-center max-lg:hidden">
          <Image
            alt="logo.svg"
            src={'/images/logo.svg'}
            width={32}
            height={32}
          />
          <p className="text-h2">Space D</p>
        </div>
        <div className="flex gap-8 max-lg:gap-3">
          {MENUS.map((menu, idx) => (
            <Link key={idx} href={menu.path} className="hover:text-h3">
              {menu.name}
            </Link>
          ))}
        </div>
        <Link
          href={'/home/learning'}
          className="text-gray-400 hover:text-gray-600"
        >
          서비스 메인으로
        </Link>
      </nav>
      <div className="h-full py-12"> {children}</div>
    </div>
  )
}

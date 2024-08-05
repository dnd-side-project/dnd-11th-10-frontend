'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabList = [
  {
    label: '사전',
    path: '/home/dictionary',
  },
  {
    label: '학습',
    path: '/home/learning',
  },
]

export default function Tabs() {
  const curPath = usePathname()
  return (
    <nav className="relative w-full flex justify-between pt-5">
      {tabList.map(({ label, path }, idx) => (
        <Link
          key={idx}
          className={`w-1/2 text-center font-semibold text-xl border-b-4 pb-4 ${curPath === path ? 'text-[#47D3AD] border-b-[#47D3AD]' : 'text-white text-opacity-[0.87] border-b-[#fff] border-opacity-[0.15]'}`}
          href={`${path}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

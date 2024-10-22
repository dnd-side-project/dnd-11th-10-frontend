'use client'
import Image from 'next/image'
import Link from 'next/link'
import LoginButton from './LoginButton'
import { useAuthStore } from '@/store/useAuthStore'

export default function Header() {
  const { userId } = useAuthStore()

  return (
    <div className="flex justify-between items-center h-14 px-4 py-5">
      <Image width={32} height={31} src={'/images/logo.svg'} alt="logo" />
      <div className="flex items-center gap-4">
        <Link href={'/search'} className="text-white">
          <Image width={24} height={24} src={'/icons/search.svg'} alt="검색" />
        </Link>
        {userId ? (
          <Link
            href={'/mypage'}
            className="relative w-[42px] h-[42px] rounded-full overflow-hidden"
          >
            <Image
              className="object-cover"
              fill
              src={'/images/logo.svg'} // user profile image로 변경필요
              alt="마이페이지"
            />
          </Link>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  )
}

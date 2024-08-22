'use client'
import Button from '@/components/common/Button'
import { EMPTY_LAYOUT } from '@/constants/emptyLayout'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export type EmptyLayoutProps = {
  target: 'likeComments' | 'myComments' | 'bookmarks' | 'searchResults'
}

export default function EmptyLayout({ target }: EmptyLayoutProps) {
  const router = useRouter()
  const { image, title, description, btnText } = EMPTY_LAYOUT[target]
  const isLoggedIn = false
  return (
    <div className="w-full h-full flex flex-col gap-4 justify-center items-center px-12">
      <Image src={`/images/${image}`} alt="img" width={80} height={80} />
      <p className="text-h2 text-onSurface-300">{title}</p>
      {description && (
        <p className="text-body1 text-onSurface-200 text-center">
          {isLoggedIn ? description[0] : description[1]}
        </p>
      )}
      {btnText && (
        <Button type="gradient" onClick={() => router.push('/dictionary')}>
          <p>{btnText}</p>
        </Button>
      )}
    </div>
  )
}

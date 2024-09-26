'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface GotoCardProps {
  icon: string
  text: string
  subText?: string
  route: string
}

function GotoCard({ icon, text, subText, route }: GotoCardProps) {
  const router = useRouter()

  const handleNavigation = () => {
    router.push(route)
  }

  return (
    <div className="px-5 py-4 bg-gray-800 flex justify-between rounded-2xl">
      <Image src={`/icons/${icon}`} width={50} height={50} alt="goto.svg" />
      <div className="flex flex-col justify-center ">
        {subText && <p className="text-body3 text-onSurface-300">{subText}</p>}
        <p className="text-sub1 text-onSurface-300">{text}</p>
      </div>
      <Image
        src={'/icons/right_arrow.svg'}
        width={24}
        height={24}
        alt="right_arrow.svg"
        onClick={handleNavigation}
        className="cursor-pointer"
      />
    </div>
  )
}

export default GotoCard

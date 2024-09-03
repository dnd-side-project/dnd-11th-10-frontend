'use client'
import Image from 'next/image'
import { MouseEventHandler } from 'react'

type SortButtonProps = {
  sortBy: string
  onClick: MouseEventHandler<HTMLDivElement>
}

export default function SortButton({ sortBy, onClick }: SortButtonProps) {
  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      <p className="text-body3">{sortBy}</p>
      <Image alt="open" src={'/icons/arrow_down.svg'} width={24} height={24} />
    </div>
  )
}

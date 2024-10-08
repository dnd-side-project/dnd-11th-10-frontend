'use client'
import BottomSheet from '@/components/common/BottomSheet'
import { LOGIN_BOTTOMSHEET } from '@/constants/bottomSheet'
import GoogleLoginButton from '../GoogleLoginButton'
import Image from 'next/image'
import useUIStore from '@/store/useUIStore'

export type BottomSheetProps = {
  isOpen: boolean
  type: 'quizExit' | 'bookmark' | 'loginBtn' | 'learningTab'
}

export default function LoginBottomSheet({ isOpen, type }: BottomSheetProps) {
  const { closeBottomSheet } = useUIStore()

  if (!isOpen) return null
  const { title, description, imgSrc } = LOGIN_BOTTOMSHEET[type]

  return (
    <BottomSheet>
      <p className="text-h2 text-onSurface-300 mb-2">{title}</p>
      <p className="text-body2 text-onSurface-200 mb-7">{description}</p>
      {imgSrc && (
        <Image
          alt={imgSrc!}
          src={imgSrc!}
          width={194}
          height={198}
          className="mx-auto mb-7"
        />
      )}
      <GoogleLoginButton />
      <button
        onClick={closeBottomSheet}
        className="w-full text-onSurface-200 mt-4"
      >
        다음에 할게요
      </button>
    </BottomSheet>
  )
}

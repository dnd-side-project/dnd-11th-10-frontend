import BottomSheet from '@/components/common/BottomSheet'
import { LOGIN_BOTTOMSHEET } from '@/constants/bottomSheet'
import GoogleLoginButton from '../GoogleLoginButton'

export type BottomSheetProps = {
  isOpen: boolean
  type: 'quizExit' | 'bookmark' | 'loginBtn'
}

export default function LoginBottomSheet({ isOpen, type }: BottomSheetProps) {
  if (!isOpen) return null
  return (
    <BottomSheet>
      <p className="text-h2 text-onSurface-300 mb-2">
        {LOGIN_BOTTOMSHEET[type].title}
      </p>
      <p className="text-body2 text-onSurface-200 mb-10">
        {LOGIN_BOTTOMSHEET[type].description}
      </p>
      <GoogleLoginButton />
      <button className="w-full text-onSurface-200 mt-4">다음에 할게요</button>
    </BottomSheet>
  )
}

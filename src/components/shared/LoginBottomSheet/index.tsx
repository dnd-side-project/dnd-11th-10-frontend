import BottomSheet from '@/components/common/BottomSheet'
import { LOGIN_BOTTOMSHEET } from '@/constants/bottomSheet'
import GoogleLoginButton from '../GoogleLoginButton'

export type BottomSheetProps = {
  isOpen: boolean
  onClose: () => void
  type: 'quizExit' | 'bookmark' | 'loginBtn'
}

export default function LoginBottomSheet({
  isOpen,
  onClose,
  type,
}: BottomSheetProps) {
  if (!isOpen) return null
  return (
    <BottomSheet onClose={onClose}>
      <p className="font-semibold text-xl text-onSurface-300 mb-2">
        {LOGIN_BOTTOMSHEET[type].title}
      </p>
      <p className="text-onSurface-200 mb-10">
        {LOGIN_BOTTOMSHEET[type].description}
      </p>
      <GoogleLoginButton />
      <button className="w-full text-onSurface-200 mt-4" onClick={onClose}>
        다음에 할게요
      </button>
    </BottomSheet>
  )
}

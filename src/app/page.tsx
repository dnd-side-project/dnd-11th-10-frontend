'use client'
import Button from '@/components/common/Button'
import GoogleLoginButton from '@/components/shared/GoogleLoginButton'

export default function Home() {
  return (
    <div>
      <GoogleLoginButton />
      <div className="mt-[10px]">
        <Button type={'black'} isFullWidth={true}>
          비회원으로 시작하기
        </Button>
      </div>
    </div>
  )
}

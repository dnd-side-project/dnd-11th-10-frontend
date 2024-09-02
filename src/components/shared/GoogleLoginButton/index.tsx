'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function GoogleLoginButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async () => {
    const isSignUp = false // 임시로
    setLoading(true)
    setError(null)

    try {
      // access token 임시로 가져오기
      const googleAccessToken = 'my-google-access-token'
      localStorage.setItem('accessToken', googleAccessToken)

      if (isSignUp) {
        router.push('/profile')
      } else {
        router.push('/home/dictionary')
      }
    } catch (error) {
      console.error('[ERROR] 로그인 도중 문제가 발생했습니다.', error)
      setError('[ERROR] 로그인에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      className="w-full py-4 px-6 rounded-lg flex justify-center bg-white hover:bg-onSurface-300 cursor-pointer"
      onClick={() => handleLogin()}
    >
      <div className="flex gap-3">
        <Image alt="google" src={'/icons/google.svg'} width={20} height={20} />
        <p className="font-medium text-black">Google로 시작하기</p>
      </div>
    </button>
  )
}

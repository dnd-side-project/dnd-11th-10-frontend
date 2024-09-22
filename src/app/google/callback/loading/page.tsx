'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'

const LoginCallback = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const setAccessToken = useAuthStore((state) => state.setAccessToken)

  const accessToken = searchParams.get('accessToken')
  const isSignUp = searchParams.get('isSignUp')

  useEffect(() => {
    setAccessToken(accessToken)

    if (accessToken && isSignUp) {
      router.push('/profile')
    }

    if (accessToken && isSignUp === 'false') {
      router.push('/home/dictionary')
    }
  }, [accessToken, isSignUp, router, setAccessToken])

  return <></>
}

export default LoginCallback

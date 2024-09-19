'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const LoginCallback = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const accessToken = searchParams.get('accessToken')
  const isSignUp = searchParams.get('isSignUp')

  useEffect(() => {
    if (accessToken && isSignUp) {
      router.push('/profile')
    }
    if (accessToken && isSignUp === 'false') {
      router.push('/home/dictionary')
    }
  }, [accessToken, isSignUp, router])

  return <></>
}

export default LoginCallback

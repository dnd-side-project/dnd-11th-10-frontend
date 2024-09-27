'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'

const LoginCallback = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const setAccessToken = useAuthStore((state) => state.setAccessToken)
  const setRole = useAuthStore((state) => state.setRole)

  const accessToken = searchParams.get('accessToken')
  const isSignUp = searchParams.get('isSignUp')
  const role = searchParams.get('role')

  useEffect(() => {
    if (role && accessToken) {
      setAccessToken(accessToken)
      setRole(role)
    }

    if (accessToken) {
      if (role === 'admin') {
        router.push('/admin')
      }

      if (isSignUp === 'true') {
        router.push('/profile')
      } else if (isSignUp === 'false') {
        router.push('/home/dictionary')
      }
    }
  }, [role, accessToken, isSignUp, router, setAccessToken, setRole])

  return <></>
}

export default LoginCallback

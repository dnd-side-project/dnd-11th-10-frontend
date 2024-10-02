'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'

const LoginCallback = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const setAccessToken = useAuthStore((state) => state.setAccessToken)
  const setUserId = useAuthStore((state) => state.setUserId)
  const [role, setRole] = useState(searchParams.get('role'))

  const accessToken = searchParams.get('accessToken')
  const isSignUp = searchParams.get('isSignUp')
  const userId = searchParams.get('id')

  useEffect(() => {
    if (role && accessToken) {
      setAccessToken(accessToken)
      setRole(role)
      setUserId(Number(userId))
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
  }, [
    role,
    accessToken,
    isSignUp,
    router,
    setAccessToken,
    setRole,
    setUserId,
    userId,
  ])

  return <></>
}

export default LoginCallback

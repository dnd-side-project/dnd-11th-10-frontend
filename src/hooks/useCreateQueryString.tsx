'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export default function useCreateQueryString() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(key, value)
      return params.toString()
    },
    [searchParams],
  )

  const replacePathname = (key: string, value: string) => {
    return router.replace(pathname + '?' + createQueryString(key, value))
  }
  return { replacePathname }
}

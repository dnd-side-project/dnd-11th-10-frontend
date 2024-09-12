'use client'

import Home from '@/app/page'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const GOOGLE_CODE = searchParams.get('code')

    const postCode = async () => {
      if (!GOOGLE_CODE) {
        console.error('[ERRPR] 유효하지 않은 구글 코드 입니다.')
        return
      }

      try {
        const res = await fetch(`/api/google/oauth?code=${GOOGLE_CODE}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: GOOGLE_CODE }),
        })

        if (res.status === 200) {
          console.log(res.json())
        }
      } catch (error) {
        console.error('[ERROR]', error)
      }
    }

    postCode().catch((error) => {
      console.error('Error:', error)
    })
  }, [router, searchParams])

  return (
    <>
      <div>loading .... </div>
      <Home />
    </>
  )
}

export default Page

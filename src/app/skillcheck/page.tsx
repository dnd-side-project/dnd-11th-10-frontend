'use client'

import Button from '@/components/common/Button'
import { useRouter } from 'next/navigation'
import React from 'react'

function SkillCheck() {
  const router = useRouter()
  return (
    <div className="text-onSurface-300">
      <Button type="gradient" onClick={() => router.push('/home/dictionary')}>
        능력 확인하러 가기
      </Button>
    </div>
  )
}

export default SkillCheck

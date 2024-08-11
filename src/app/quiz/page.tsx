'use client'

import QuizType from '@/components/domain/quiz/QuizType'
import Start from '@/components/domain/quiz/Start'
import React, { useState } from 'react'

function Quiz() {
  const [step, setStep] = useState<'시작' | '퀴즈타입선택'>('시작')
  return (
    <div className="mt-10">
      {step === '시작' && <Start />}
      {step === '퀴즈타입선택' && <QuizType />}
    </div>
  )
}

export default Quiz

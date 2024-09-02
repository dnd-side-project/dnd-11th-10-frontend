// 파일 경로: src/utils/getQuizResult.js

import { resultData } from '@/constants/resultData'

export function getQuizResult(correctCount: number) {
  let imageSrc, altText, resultText

  switch (correctCount) {
    case 1:
    case 2:
      imageSrc = '/images/quiz_result_01.svg'
      altText = 'quiz_result_02.svg'
      resultText = resultData[1].result
      break
    case 3:
    case 4:
      imageSrc = '/images/quiz_result_02.svg'
      altText = 'quiz_result_03.svg'
      resultText = resultData[2].result
      break
    case 5:
      imageSrc = '/images/quiz_result_03.svg'
      altText = 'quiz_result_03.svg'
      resultText = resultData[2].result
      break
    default:
      imageSrc = '/images/quiz_result_00.svg'
      altText = 'quiz_result_01.svg'
      resultText = resultData[0].result
      break
  }

  return { imageSrc, altText, resultText }
}

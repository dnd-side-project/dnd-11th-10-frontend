// 파일 경로: src/utils/getQuizResult.js

import { resultData } from '@/constants/resultData'

export function getQuizResult(correctCount: number) {
  let imageSrc, altText, resultText

  switch (correctCount) {
    case 1:
    case 2:
      imageSrc = resultData[1].img!
      altText = resultData[1].altText!
      resultText = resultData[1].result
      break
    case 3:
    case 4:
      imageSrc = resultData[2].img!
      altText = resultData[2].altText!
      resultText = resultData[2].result
      break
    case 5:
      imageSrc = resultData[3].img!
      altText = resultData[3].altText!
      resultText = resultData[3].result
      break
    default:
      imageSrc = resultData[0].img!
      altText = resultData[0].altText!
      resultText = resultData[0].result
      break
  }

  return { imageSrc, altText, resultText }
}

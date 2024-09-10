import { ExplanationInfo, QuizResult } from '@/types/quizresult'

export interface ResultData {
  id: number
  result: string
  img: string
  altText: string
}

export const resultData: ResultData[] = [
  {
    id: 0,
    result: '아직은 외계어 같은 용어들 👽',
    img: '/images/quiz_result_00.svg',
    altText: 'quiz_result_00.svg',
  },
  {
    id: 1,
    result: '업무 소통계의 떠오르는 샛별 ✨',
    img: '/images/quiz_result_01.svg',
    altText: 'quiz_result_01.svg',
  },
  {
    id: 2,
    result: '업무 소통 역량 로켓 상승 중 🚀',
    img: '/images/quiz_result_02.svg',
    altText: 'quiz_result_02.svg',
  },
  {
    id: 3,
    result: '혜성처럼 나타난 업무 소통 능력자 ☄️',
    img: '/images/quiz_result_03.svg',
    altText: 'quiz_result_03.svg',
  },
]

export const quizCardResultData: QuizResult = {
  id: 1,
  correctCount: 5,
  explanationInfo: [
    {
      wordId: 1,
      isCorrect: true,
      isMarked: true,
      name: '아젠다(Agenda)',
      selectedOptionDescription:
        '완수해야 하는 실무 내용을 사전에 정리해 둔 항목들',
      answerOptionDescription:
        '완수해야 하는 실무 내용을 사전에 정리해 둔 항목들',
    },
    {
      wordId: 7,
      isCorrect: true,
      isMarked: true,
      name: '목 데이터(Mock Data)',
      selectedOptionDescription:
        '실제 데이터를 대신하여 개발이나 테스트에 사용하는 가상의 데이터',
      answerOptionDescription:
        '실제 데이터를 대신하여 개발이나 테스트에 사용하는 가상의 데이터',
    },
    {
      wordId: 10,
      isCorrect: true,
      isMarked: true,
      name: '스크럼(Scrum)',
      selectedOptionDescription:
        '애자일 방법론 중 하나로, 일정 기간 동안 작은 단위의 작업을 반복하여 진행',
      answerOptionDescription:
        '애자일 방법론 중 하나로, 일정 기간 동안 작은 단위의 작업을 반복하여 진행',
    },
    {
      wordId: 13,
      isCorrect: true,
      isMarked: true,
      name: '넛지(Nudge)',
      selectedOptionDescription:
        '사용자의 행동을 유도, 관찰된 동작에 대한 간접적인 힌트 제공으로 사용자 경험을 개선하는 개념',
      answerOptionDescription:
        '사용자의 행동을 유도, 관찰된 동작에 대한 간접적인 힌트 제공으로 사용자 경험을 개선하는 개념',
    },
    {
      wordId: 18,
      isCorrect: true,
      isMarked: true,
      name: '가시화(Visualization)',
      selectedOptionDescription:
        '데이터나 정보를 그래프 등의 시각적 형태로 표현',
      answerOptionDescription: '데이터나 정보를 그래프 등의 시각적 형태로 표현',
    },
  ],
}

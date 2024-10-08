import { QuizType } from '@/types/quiz'

export const quizData: QuizType = {
  id: 1,
  problemInfo: [
    {
      answerId: 1,
      question: '아젠다(Agenda) 정리한 것 오늘까지 보내주세요.',
      name: '아젠다(Agenda)',
      category: '비즈니스',
      correctPercent: 70.1,
      wrongPercent: 29.9,
      optionInfo: [
        {
          optionWordId: 1,
          meaning: '완수해야 하는 실무 내용을 사전에 정리해 둔 항목들',
        },
        {
          optionWordId: 2,
          meaning: '회의에 필요한 사무용품 리스트',
        },
        {
          optionWordId: 3,
          meaning: '문제점, 논점, 중요 포인트 등 비지니스 상의 과제',
        },
        {
          optionWordId: 4,
          meaning: '과거 사례 중 가장 효과적이었던 방안',
        },
      ],
    },
    {
      answerId: 7,
      question: '퀴즈를 위해 목 데이터(Mock Data)를 생성했습니다.',
      name: '목 데이터(Mock Data)',
      category: '개발',
      correctPercent: 29.9,
      wrongPercent: 70.1,
      optionInfo: [
        {
          optionWordId: 5,
          meaning: '스크럼 방법론에서 일정 기간 동안 수행되는 작업 단위',
        },
        {
          optionWordId: 6,
          meaning: '향후 처리할 작업 목록',
        },
        {
          optionWordId: 7,
          meaning:
            '실제 데이터를 대신하여 개발이나 테스트에 사용하는 가상의 데이터',
        },
        {
          optionWordId: 8,
          meaning: '완수해야 하는 실무 내용을 사전에 정리해 둔 항목들',
        },
      ],
    },
    {
      answerId: 10,
      question:
        '이번 스프린트의 스크럼(Scrum) 회의를 내일 오전에 진행하도록 하겠습니다.',
      name: '스크럼(Scrum)',
      category: '비즈니스',
      correctPercent: 23.2,
      wrongPercent: 76.8,
      optionInfo: [
        {
          optionWordId: 9,
          meaning: '스크럼 방법론에서 일정 기간 동안 수행되는 작업 단위',
        },
        {
          optionWordId: 10,
          meaning:
            '애자일 방법론 중 하나로, 일정 기간 동안 작은 단위의 작업을 반복하여 진행',
        },
        {
          optionWordId: 11,
          meaning:
            '스프린트가 끝난 후 팀이 완료된 작업을 검토하고 피드백을 주고받는 회의',
        },
        {
          optionWordId: 12,
          meaning: '비교 평가를 위한 기준점 또는 표준',
        },
      ],
    },
    {
      answerId: 13,
      question:
        '넛지(Nudge)를 활용해 사용자가 스크롤 다운할 수 있도록 유도해주세요.',
      name: '넛지(Nudge)',
      category: '디자인',
      correctPercent: 76.8,
      wrongPercent: 23.2,
      optionInfo: [
        {
          optionWordId: 13,
          meaning:
            '사용자의 행동을 유도, 관찰된 동작에 대한 간접적인 힌트 제공으로 사용자 경험을 개선하는 개념',
        },
        {
          optionWordId: 14,
          meaning: '데이터나 정보를 그래프 등의 시각적 형태로 표현',
        },
        {
          optionWordId: 15,
          meaning: '비교 평가를 위한 기준점 또는 표준',
        },
        {
          optionWordId: 16,
          meaning:
            '실제 데이터를 대신하여 개발이나 테스트에 사용하는 가상의 데이터',
        },
      ],
    },
    {
      answerId: 18,
      question:
        '사용자가 정보를 쉽게 이해하고 해석할 수 있도록 가시화(Visualization) 기법을 사용해주세요.',
      name: '가시화(Visualization)',
      category: '디자인',
      correctPercent: 58.2,
      wrongPercent: 41.8,
      optionInfo: [
        {
          optionWordId: 17,
          meaning: '회의에 필요한 사무용품 리스트',
        },
        {
          optionWordId: 18,
          meaning: '데이터나 정보를 그래프 등의 시각적 형태로 표현',
        },
        {
          optionWordId: 19,
          meaning: '스크럼 방법론에서 일정 기간 동안 수행되는 작업 단위',
        },
        {
          optionWordId: 20,
          meaning: '문제점, 논점, 중요 포인트 등 비지니스 상의 과제',
        },
      ],
    },
  ],
}

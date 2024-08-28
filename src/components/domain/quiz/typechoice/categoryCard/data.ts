export interface QuizCategory {
  participantCount: number
  name: string
  color: string
}

export const quizCategory: QuizCategory[] = [
  {
    participantCount: 10,
    name: '전체 실무',
    color: 'text-secondary-200',
  },
  {
    participantCount: 10,
    name: '개발',
    color: 'text-devBlue-200',
  },
  {
    participantCount: 10,
    name: '디자인',
    color: 'text-designPurple-200',
  },
  {
    participantCount: 10,
    name: '비즈니스',
    color: 'text-primary-400',
  },
]

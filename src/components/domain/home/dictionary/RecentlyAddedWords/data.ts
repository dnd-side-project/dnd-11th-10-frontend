import { WordItemProps } from '../../WordItem'

export const WordsList: WordItemProps[] = [
  {
    id: 0,
    name: 'Agenda',
    meaning: '완수해야하는 업무 내용을 사전에 정리해 둔 항목들',
    pronunciationInfo: {
      korean: '아젠다',
    },
    category: '비즈니스',
  },
  {
    id: 1,
    name: 'KPI (Key Performance Indicator)',
    meaning:
      '성과를 측정하는 데 사용되는 주요 지표. 조직이나 개인의 목표 달성 정도를 평가하는 기준으로 사용됩니다.',
    pronunciationInfo: {
      korean: '핵심 성과 지표',
    },
    category: '비즈니스',
  },
  {
    id: 2,
    name: 'Containerization',
    meaning:
      '소프트웨어를 독립적인 실행 환경에서 실행할 수 있도록 패키징하는 기술',
    pronunciationInfo: {
      korean: '컨테이너화',
    },
    category: '개발',
  },
]

import { DetailWordType } from '@/types/word'

export const wordData: DetailWordType = {
  id: 1,
  name: '애자일(Agile)',
  pronunciationInfo: {
    english: 'ædʒl',
  },
  meaning:
    '부서간 경계를 허물고, 팀원에게 의사 설정 권한을 부여해 신속하게 업무를 진행하는 방식을 말해요. 실행과 피드백을 반복하며 빠르게 결과를 만드는 유연함이 특징이에요. 즉각 대응, 고객의 요구를 적극적으로 반영할 수 있는 장점이 있어요.',
  category: '비즈니스',
  viewCount: 23,
  commentCount: 9,
  isMarked: true,
  markedCount: 11,
  example: [
    {
      text: '(1)우리는 애자일(Agile)한 조직으로 변모하기 위해 노력해왔습니다. 1년 동안 모두가 힘써주신 덕분에 높은 성과를 낼 수 있었어요.',
      source: '잡플래닛1',
      createdAt: new Date('2024-08-15T12:12:12'),
    },
    {
      text: '(2)우리는 애자일(Agile)한 조직으로 변모하기 위해 노력해왔습니다. 1년 동안 모두가 힘써주신 덕분에 높은 성과를 낼 수 있었어요.',
      source: '잡플래닛2',
      createdAt: new Date('2024-08-15T12:12:12'),
    },
  ],
  source: '잡플래닛',
  createdAt: new Date('2024-08-15T12:12:12'),
  updatedAt: new Date('2024-08-16T12:12:12'),
}

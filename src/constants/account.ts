export interface Account {
  nickname: string
  profileImage: string
  email: string
  careerInfo: {
    jobGroup: string
    company: string
    experience: string
  }
  quizInfo: {
    totalCategoryQuizCount: number
    designQuizCount: number
    businessQuizCount: number
    developQuizCount: number
  }
}

export const accountData: Account = {
  nickname: '상큼한화성009',
  email: 'dnwlsnw@gmail.com',
  profileImage: '/images/profile_01.svg',
  careerInfo: {
    jobGroup: '개발자',
    company: '비공개',
    experience: '1년 차 미만',
  },
  quizInfo: {
    totalCategoryQuizCount: 0,
    designQuizCount: 0,
    businessQuizCount: 0,
    developQuizCount: 0,
  },
}

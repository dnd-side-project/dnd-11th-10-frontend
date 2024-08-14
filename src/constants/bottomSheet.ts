import { BottomSheetProps } from '@/components/shared/LoginBottomSheet'

// 로그인 유도 BottomSheet 내에 필요한 상수 데이터
// quizExit- 퀴즈 종류 후 x 버튼 클릭 시
// bookmark- 로그인하지 않은 상태에서 북마크 버튼 클릭 시
// loginBtn- 헤더 또는 마이페이지의 '로그인' 버튼 클릭 시
export const LOGIN_BOTTOMSHEET: {
  [key in BottomSheetProps['type']]: { title: string; description: string }
} = {
  quizExit: {
    title: '나의 업무 소통 능력치를 알 수 있어요!',
    description:
      '로그인을 하면 푼 퀴즈를 기반으로\n나의 업무 소통 능력치를 알려드려요.',
  },
  bookmark: {
    title: '별별 저장소에 저장해 보세요!',
    description: `로그인을 하면 즐겨찾기한 실무 용어를\n별별 저장소에서 만나볼 수 있어요.`,
  },
  loginBtn: {
    title:
      '모르는 단어로 인해 소통이 힘드신가요?\n로그인하고 소통의 간격을 줄여보세요!',
    description:
      '별별 저장소, 업무 소통 능력치, 댓글 쓰기등\n다양한 기능을 이용하려면 로그인이 필요해요.',
  },
}

// FilterBottomSheet에 표기할 페이지별 메뉴 목록
export const FILTER_MENUS = {
  comments: ['좋아요순', '최신순', '오래된순'],
  words: ['사전순', '조회순'],
}

// CommentBottomSheet에서 표기할 메뉴 목록(target에 따라 선택)
export const COMMENT_MENUS = {
  mine: ['수정하기', '삭제하기'],
  others: ['신고하기'],
}

// CheckboxBottomSheet에서 표기할 메뉴 목록
export const CHECKBOX_MENUS = {
  report: {
    title: '신고하기',
    description: '중복 선택 가능',
    options: [
      { id: 0, text: '광고 및 홍보성 내용' },
      { id: 1, text: '개인정보 노출 위험' },
      { id: 2, text: '댓글 도배' },
      { id: 3, text: '욕설, 음란 등 부적절한 내용' },
      { id: 4, text: '기타' },
    ],
    btnText: '신고 완료',
  },
}

// RadioBtnBottomSheet에서 표기할 항목 목록
export const RADIOBTN_MENUS = {
  // 마이페이지 직장 수정
  company: {
    title: '직장을 선택해보세요',
    options: [
      { id: 0, item: '비공개' },
      { id: 1, item: '대기업' },
      { id: 2, item: '중견기업' },
      { id: 3, item: '중소기업' },
      { id: 4, item: '스타트업' },
      { id: 5, item: '외국계' },
      { id: 6, item: '취준생/인턴' },
    ],
    btnText: '선택 완료',
  },
  // 마이페이지 경력 수정
  experience: {
    title: '몇 년 차인지 선택해보세요',
    options: [
      { id: 0, item: '비공개' },
      { id: 1, item: '1년 차 미만' },
      { id: 2, item: '1~2년 차' },
      { id: 3, item: '2~3년 차' },
      { id: 4, item: '3~4년 차' },
      { id: 5, item: '4~5년 차' },
      { id: 6, item: '5년 차 이상' },
    ],
    btnText: '선택 완료',
  },
}

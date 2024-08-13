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
  others: ['차단하기', '신고하기'],
}

//

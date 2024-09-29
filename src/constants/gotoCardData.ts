export interface GotoCard {
  icon: string
  text: string
  route: string
  subText?: string
}
export const gotoCardData: GotoCard[] = [
  {
    icon: 'goto_01.svg',
    text: '작성한 댓글 보러가기',
    route: '/mypage/writecomment',
  },
  {
    icon: 'goto_02.svg',
    text: '좋아요한 댓글 보러가기',
    route: '/mypage/likecomment',
  },
  {
    icon: 'goto_03.svg',
    text: '피드백 남기러 가기',
    route: 'https://www.naver.com', // 구글 폼 링크 대체하기
    subText: '서비스의 피드백을 남겨주세요!',
  },
]

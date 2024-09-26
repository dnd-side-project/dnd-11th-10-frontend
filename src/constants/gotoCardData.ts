export interface GotoCardProps {
  icon: string
  text: string
  subText?: string
}
export const gotoCardData: GotoCardProps[] = [
  {
    icon: 'goto_01.svg',
    text: '작성한 댓글 보러가기',
  },
  {
    icon: 'goto_02.svg',
    text: '좋아요한 댓글 보러가기',
  },
  {
    icon: 'goto_03.svg',
    text: '피드백 남기러 가기',
    subText: '서비스의 피드백을 남겨주세요!',
  },
]

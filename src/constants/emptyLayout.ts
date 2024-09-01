import { EmptyLayoutProps } from '@/components/shared/EmptyLayout'

export const EMPTY_LAYOUT: {
  [key in EmptyLayoutProps['target']]: {
    image: string
    title: string
    description?: string | string[]
    btnText?: string
  }
} = {
  likeComments: {
    image: 'logo.svg',
    title: '좋아요 한 댓글이 없어요.',
    btnText: '용어 탐색하기',
  },
  myComments: {
    image: 'logo.svg',
    title: '작성한 댓글이 없어요.',
    btnText: '용어 탐색하기',
  },
  bookmarks: {
    image: 'logo.svg',
    title: '저장소가 비어있어요.',
    description: [
      '별 단어가 다 있다고 생각이 드는\n용어를 별별 저장소에 등록해보세요.',
      '로그인을 하고 별 단어가 다 있다고 생각이 드는\n용어를 별별 저장소에 등록해보세요.',
    ],
    btnText: '등록하러 가기',
  },
  searchResults: {
    image: 'logo.svg',
    title: '검색된 용어가 없어요.',
  },
}

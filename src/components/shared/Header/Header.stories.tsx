import type { Meta, StoryObj } from '@storybook/react'
import Header from '.'
import {
  AppRouterContext,
  type AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import BookmarkButton from '../BookmarkButton'

const meta: Meta<typeof Header> = {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AppRouterContext.Provider value={{} as AppRouterInstance}>
        <Story />
      </AppRouterContext.Provider>
    ),
  ],
  argTypes: {
    title: {
      description: '헤더 중앙에 표기할 텍스트를 작성합니다.',
    },
    path: {
      description:
        'previous 버튼 클릭 시 이동하고 싶은 특정 경로를 작성합니다.전달하는 `path` string이 없는 경우 router.back()을 통해 이전 히스토리 단계로 이동합니다.',
    },
    rightItem: {
      description: '헤더 맨 우측에 표기할 요소를 작성합니다.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    title: '실무 용어',
  },
}

export const HeaderWithRightItem: Story = {
  render: () => (
    <>
      <Header
        title="실무 용어"
        rightItem={<BookmarkButton isMarked={false} markCount={8} wordId={2} />}
      />
      <Header
        title="실무 용어"
        rightItem={<BookmarkButton isMarked={true} markCount={34} wordId={1} />}
      />
    </>
  ),
}

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
    rightItem: {
      description: '헤더 맨 우측에 표기할 요소를 작성합니다.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    title: 'title',
  },
}

export const HeaderWithRightItem: Story = {
  render: () => (
    <>
      <Header
        title="용어 상세"
        rightItem={<BookmarkButton isMarked={false} markCount={8} wordId={2} />}
      />
      <Header
        title="용어 상세"
        rightItem={<BookmarkButton isMarked={true} markCount={34} wordId={1} />}
      />
    </>
  ),
}

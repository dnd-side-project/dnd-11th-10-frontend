import type { Meta, StoryObj } from '@storybook/react'
import BottomSheet from '.'

const meta: Meta<typeof BottomSheet> = {
  title: 'components/common/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'BottomSheet type에 맞는 형태의 내용을 전달합니다',
    },
  },
}

export default meta

type Story = StoryObj<typeof BottomSheet>

export const Default: Story = {
  args: {
    children: 'BottomSheet',
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import CategoryTag from '.'

const meta: Meta<typeof CategoryTag> = {
  title: 'components/Tag/CategoryTag',
  component: CategoryTag,
  tags: ['autodocs'],
  argTypes: {
    category: {
      description: '용어 카테고리에 해당하는 색상을 적용합니다.',
    },
  },
}

export default meta

type Story = StoryObj<typeof CategoryTag>

export const Business: Story = {
  args: {
    category: '비즈니스',
  },
}

export const Design: Story = {
  args: {
    category: '디자인',
  },
}

export const Develop: Story = {
  args: {
    category: '개발',
  },
}

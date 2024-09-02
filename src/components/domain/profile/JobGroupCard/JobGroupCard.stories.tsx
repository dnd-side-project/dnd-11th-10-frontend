import type { Meta, StoryObj } from '@storybook/react'
import JobGroup from '.'
import JobGroupCard from '.'

const meta: Meta<typeof JobGroup> = {
  title: 'components/Profile/JobGroupCard',
  component: JobGroupCard,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: '각 컴포넌트에 대한 ID를 추가합니다',
    },
    name: {
      description: '개발자, 디자이너, 기타로 분류됩니다.',
    },
  },
}

export default meta

type Story = StoryObj<typeof JobGroup>

export const Develop: Story = {
  args: {
    id: 1,
    name: '개발자',
  },
  render: () => <JobGroupCard id={1} name={'개발자'} />,
}

export const Design: Story = {
  args: {
    id: 2,
    name: '디자이너',
  },
  render: () => <JobGroupCard id={2} name={'디자이너'} />,
}

export const Etcetera: Story = {
  args: {
    id: 3,
    name: '기타',
  },
  render: () => <JobGroupCard id={3} name={'기타'} />,
}

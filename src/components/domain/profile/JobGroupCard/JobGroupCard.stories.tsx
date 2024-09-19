import type { Meta, StoryObj } from '@storybook/react'
import JobGroupCard from '.'
import { useState } from 'react'

const meta: Meta<typeof JobGroupCard> = {
  title: 'components/Profile/JobGroupCard',
  component: JobGroupCard,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: '각 컴포넌트에 대한 ID를 추가합니다',
      control: 'number',
    },
    name: {
      description: '개발자, 디자이너, 기타로 분류됩니다.',
      control: 'text',
    },
    selected: {
      description: '카드가 선택된 상태를 나타냅니다.',
      control: 'boolean',
    },
    onClick: {
      description: '카드를 클릭할 때 호출되는 함수입니다.',
      action: 'clicked',
    },
  },
}

export default meta

type Story = StoryObj<typeof JobGroupCard>

export const Develop: Story = {
  args: {
    id: 1,
    name: '개발자',
    selected: false,
  },
  render: (args) => {
    const [select, setSelected] = useState(args.selected)

    const handleClick = () => {
      setSelected((prev) => !prev)
    }

    return <JobGroupCard {...args} selected={select} onClick={handleClick} />
  },
}

export const Design: Story = {
  args: {
    id: 2,
    name: '디자이너',
    selected: false,
  },
  render: (args) => {
    const [select, setSelected] = useState(args.selected)

    const handleClick = () => {
      setSelected((prev) => !prev)
    }

    return <JobGroupCard {...args} selected={select} onClick={handleClick} />
  },
}

export const Etcetera: Story = {
  args: {
    id: 3,
    name: '기타',
    selected: false,
  },
  render: (args) => {
    const [select, setSelected] = useState(args.selected)

    const handleClick = () => {
      setSelected((prev) => !prev)
    }

    return <JobGroupCard {...args} selected={select} onClick={handleClick} />
  },
}

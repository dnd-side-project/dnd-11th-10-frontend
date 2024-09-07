import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import QuizProblemStopModal from '@/components/shared/QuizProblemStopModal'
import Modal from '.'

const meta: Meta<typeof Modal> = {
  title: 'components/common/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Modal type에 맞는 형태의 내용을 전달합니다',
    },
  },
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    children: 'Modal',
  },
}

export const QuizProblemStopModalStory: Story = {
  render: () => {
    return (
      <>
        <QuizProblemStopModal
          isModalOpen={true}
          totalProblem={5}
          currentProblem={2}
        />
      </>
    )
  },
}

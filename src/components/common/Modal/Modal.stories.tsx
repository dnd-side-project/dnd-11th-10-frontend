import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import QuizProblemStopModal from '@/components/domain/quiz/problem/QuizProblemStopModal'
import Modal from '.'
import Image from 'next/image'
import Button from '../Button'

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
  render: () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const closeModal = () => {
      setIsModalOpen(false)
    }

    return (
      <>
        <Button type="default" onClick={() => setIsModalOpen(true)}>
          모달창 열기
        </Button>
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
          모달의 내용 부분입니다
        </Modal>
      </>
    )
  },
}

export const QuizProblemStopModalStory: Story = {
  render: () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const closeModal = () => {
      setIsModalOpen(false)
    }

    return (
      <>
        <Image
          src={'/icons/cross.svg'}
          alt="corss.svg"
          onClick={() => setIsModalOpen(true)}
          width={20}
          height={20}
        />
        <QuizProblemStopModal
          isModalOpen={isModalOpen}
          totalProblem={5}
          currentProblem={2}
          closeModal={closeModal}
        />
      </>
    )
  },
}

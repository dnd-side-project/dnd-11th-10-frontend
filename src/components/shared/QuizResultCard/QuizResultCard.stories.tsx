import type { Meta, StoryObj } from '@storybook/react'
import ExplanationInfo from '.'
import QuizReultCard from '.'

const meta: Meta<typeof ExplanationInfo> = {
  title: 'components/Quiz/QuizResultCard',
  component: ExplanationInfo,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ExplanationInfo>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <QuizReultCard
        wordId={1}
        isCorrect={true}
        isMarked={true}
        name={'아젠다(Agenda)'}
        selectedOptionDescription={
          '완수해야 하는 실무 내용을 사전에 정리해 둔 항목들'
        }
        answerOptionDescription={
          '완수해야 하는 실무 내용을 사전에 정리해 둔 항목들'
        }
      />
    </div>
  ),
}

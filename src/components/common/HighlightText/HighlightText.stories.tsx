import type { Meta, StoryObj } from '@storybook/react'
import HighlightText from '.'

const meta: Meta<typeof HighlightText> = {
  title: 'components/common/HighlightText',
  component: HighlightText,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'target 단어를 포함한 `전체 문장 또는 단어`입니다.',
    },
    target: {
      description: 'highlight 하고싶은 `특정 단어`입니다.<br/>(대소문자 구분X)',
    },
    variant: {
      description: '카테고리 종류입니다.',
      control: {
        type: 'radio',
      },
      options: [null, '비즈니스', '디자인', '개발'],
    },
  },
}

export default meta

type Story = StoryObj<typeof HighlightText>

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gray-200">
        <Story />
      </div>
    ),
  ],
  args: {
    text: '“우리는 애자일(Agile)한 조직으로 변모하기 위해 노력해왔습니다. 1년 동안 모두가 힘써주신 덕분에 높은 성과를 낼 수 있었어요.”',
    target: '애자일(Agile)',
  },
}

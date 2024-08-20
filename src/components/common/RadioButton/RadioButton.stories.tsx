import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import RadioButton from '.'

const meta: Meta<typeof RadioButton> = {
  title: 'components/common/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: '각 RadioButton를 구분하는 value를 결정합니다.',
    },
    isChecked: {
      description: '선택 유무를 결정합니다.',
    },
    item: {
      description: 'label에 표기할 텍스트를 입력합니다.',
    },
  },
}

export default meta

type Story = StoryObj<typeof RadioButton>

export const Default: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.isChecked)

    useEffect(() => {
      setIsChecked(args.isChecked)
    }, [args.isChecked])

    return (
      <div className="text-onSurface-300">
        <RadioButton
          {...args}
          isChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>
    )
  },
  args: {
    isChecked: false,
    item: 'radioButton',
  },
}

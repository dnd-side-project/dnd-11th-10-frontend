import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import Checkbox from '.'

const meta: Meta<typeof Checkbox> = {
  title: 'components/common/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    isChecked: {
      description: '체크 유무를 결정합니다.',
    },
    text: {
      description: 'label에 표기할 텍스트를 입력합니다.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.isChecked)

    useEffect(() => {
      setIsChecked(args.isChecked)
    }, [args.isChecked])

    return (
      <div className="text-onSurface-300">
        <Checkbox
          {...args}
          isChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>
    )
  },
  args: {
    isChecked: false,
    text: 'checkbox',
  },
}

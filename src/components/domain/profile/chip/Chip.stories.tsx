import type { Meta, StoryObj } from '@storybook/react'
import ProfileChip from '.'
import { useState } from 'react'

const meta: Meta<typeof ProfileChip> = {
  title: 'components/Profile/Chip',
  component: ProfileChip,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ProfileChip>

export const Default: Story = {
  render: () => {
    const [isSelected, setIsSelected] = useState(false)

    const toggleChipSelection = () => {
      setIsSelected((prev) => !prev)
    }

    return (
      <div className="flex flex-col gap-2">
        <ProfileChip
          id={0}
          name="비공개"
          selected={isSelected}
          onClick={toggleChipSelection}
        />
      </div>
    )
  },
}

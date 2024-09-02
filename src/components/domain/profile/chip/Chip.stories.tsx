import type { Meta, StoryObj } from '@storybook/react'
import ProfileChip from '.'
import Chip from '.'

const meta: Meta<typeof ProfileChip> = {
  title: 'components/Profile/Chip',
  component: ProfileChip,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ProfileChip>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Chip id={0} name="비공개" type="기업" />
    </div>
  ),
}

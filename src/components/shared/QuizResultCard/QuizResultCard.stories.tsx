import type { Meta, StoryObj } from '@storybook/react'
import WordTag from './index'

const meta: Meta<typeof WordTag> = {
  title: 'components/Tag/WordTag',
  component: WordTag,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof WordTag>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <WordTag text="Agenda" />
      <WordTag text="어젠더" />
      <WordTag text="[əˈdʒendə]" />
    </div>
  ),
}

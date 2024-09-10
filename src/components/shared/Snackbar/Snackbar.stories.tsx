import type { Meta, StoryObj } from '@storybook/react'
import Snackbar from '.'
import useUIStore from '@/store/useUIStore'
import { SNACKBAR_TYPE } from '@/constants/snackbar'

const meta: Meta<typeof Snackbar> = {
  title: 'components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Snackbar>

export const Default: Story = {
  render: () => {
    const { showSnackbar } = useUIStore()
    const buttons = [
      { type: 'commentAdd', text: '댓글 등록' },
      { type: 'commentEdit', text: '댓글 수정' },
      { type: 'commentDelete', text: '댓글 삭제' },
      { type: 'commentReport', text: '댓글 신고' },
      { type: 'commentBlock', text: '댓글 차단' },
      { type: 'bookmarkAdd', text: '용어 북마크' },
    ]
    return (
      <>
        <div className="h-48 flex flex-col">
          <div className="flex gap-2">
            {buttons.map((button, idx) => (
              <button
                key={idx}
                onClick={() => showSnackbar(button.type as SNACKBAR_TYPE)}
                className="w-fit p-2 bg-white rounded-lg"
              >
                {button.text}
              </button>
            ))}
          </div>
          <Snackbar />
        </div>
      </>
    )
  },
}

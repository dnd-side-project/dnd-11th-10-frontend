import TextArea from '@/components/common/Textarea'
import useAddComment from '@/hooks/comment/useAddComment'
import { useState } from 'react'

const [smallHeight, largeHeight] = ['56px', '76px']

export default function CommentTextarea({ wordId }: { wordId: number }) {
  const [value, setValue] = useState<string>('')
  const [focused, setFocused] = useState(false)
  const [height, setHeight] = useState<number | string>(smallHeight)
  const maxLength = 100
  const { mutate: addComment } = useAddComment(wordId && wordId)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target
    resizeTextarea(textarea)
    setValue(textarea.value.slice(0, maxLength))
  }

  const handleFocus = () => {
    setFocused(true)
    setHeight('auto')
  }
  const handleBlur = () => {
    setFocused(false)
    if (!value) {
      setHeight(smallHeight)
    }
  }

  const handleSubmit = async () => {
    if (!value) return
    addComment({ wordId, value })
    setValue('')
    resizeTextarea()
  }

  const resizeTextarea = (textarea?: EventTarget & HTMLTextAreaElement) => {
    if (textarea) {
      textarea.style.height = `${textarea.scrollHeight}px`
      if (textarea.value === '') {
        setHeight(largeHeight)
      }
    } else {
      setHeight(smallHeight)
    }
  }

  return (
    <div className="relative w-full">
      <TextArea
        placeholder={
          focused
            ? '주제와 무관한 내용 및 악플은 삭제될 수 있어요.'
            : '용어와 관련된 에피소드나 의견을 공유해 보세요.'
        }
        className={value ? 'pt-3 pb-8' : ''}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        height={height}
        maxLength={100}
      />

      {value || (focused && !value) ? (
        <div className="w-full absolute bottom-3 px-4">
          <div className="flex justify-between text-onSurface-200">
            <p className="text-body3">{`${value.length}/${maxLength}`}</p>
            <button
              className={`text-sub3 ${value && 'text-primary-400'}`}
              onClick={handleSubmit}
            >
              등록
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute bottom-[18px] right-4 cursor-default">
          <p className="text-sub3 text-onSurface-200">등록</p>
        </div>
      )}
    </div>
  )
}

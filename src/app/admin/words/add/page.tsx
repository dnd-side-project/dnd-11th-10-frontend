'use client'
import { addNewWord } from '@/api/admin/words'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import RadioButton from '@/components/common/RadioButton'
import Textarea from '@/components/common/Textarea'
import { AddWordType } from '@/types/word'
import { useState } from 'react'

const CATEGORY = [
  { id: 0, name: '비즈니스' },
  { id: 1, name: '디자인' },
  { id: 2, name: '개발' },
]

export default function AddWordPage() {
  const [word, setWord] = useState<AddWordType>({
    name: '',
    meaning: '',
    pronunciation: { english: '' },
    category: '비즈니스',
    example: '',
    resource: '',
  })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target
    if (type === 'radio') {
      const category = CATEGORY.find((item) => item.id === parseInt(value))
      const categoryName = category ? category.name : ''
      setWord((prev: any) => ({
        ...prev,
        category: categoryName,
      }))
    } else if (name === 'pronunciation') {
      setWord((prev) => ({ ...prev, pronunciation: { english: value } }))
    } else {
      setWord((prev) => ({ ...prev, [name]: value }))
    }
  }
  function hasEmptyField() {
    const { name, meaning, pronunciation, example, resource } = word
    return (
      name === '' ||
      meaning === '' ||
      pronunciation.english === '' ||
      example === '' ||
      resource === ''
    )
  }

  const handleSubmit = async () => {
    if (hasEmptyField()) {
      alert('모두 입력해주세요')
      return
    }
    await addNewWord(word)
    alert('용어 등록 완료')
    setWord({
      name: '',
      meaning: '',
      pronunciation: { english: '' },
      category: '비즈니스',
      example: '',
      resource: '',
    })
  }

  return (
    <>
      <div className="mx-72 mt-8 max-lg:mx-4">
        <p className="text-h2 mb-6">용어 등록</p>
        <div className="flex flex-col gap-6">
          <label>
            용어 이름{' '}
            <Input
              name="name"
              value={word.name ?? ''}
              onChange={handleChange}
            />
          </label>
          <label>
            용어 뜻{' '}
            <Textarea
              name="meaning"
              value={word.meaning ?? ''}
              onChange={handleChange}
              className="bg-white"
            />
          </label>
          <label>
            예문{' '}
            <Textarea
              name="example"
              value={(word.example as string) ?? ''}
              onChange={handleChange}
              className="bg-white"
            />
          </label>
          <label>
            발음
            <Input
              name="pronunciation"
              value={word.pronunciation.english ?? ''}
              onChange={handleChange}
            />
          </label>
          <label>
            출처
            <Input
              name="resource"
              value={word.resource ?? ''}
              onChange={handleChange}
            />
          </label>
          <fieldset>
            <label>카테고리</label>
            {CATEGORY.map((item) => (
              <RadioButton
                key={item.id}
                id={item.id}
                item={item.name}
                onChange={handleChange}
                isChecked={word.category === item.name}
              />
            ))}
          </fieldset>
          <Button
            type={hasEmptyField() ? 'disabled' : 'gradient'}
            isFullWidth
            onClick={handleSubmit}
          >
            용어 등록
          </Button>
        </div>
      </div>
    </>
  )
}

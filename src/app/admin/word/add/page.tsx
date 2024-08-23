'use client'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import RadioButton from '@/components/common/RadioButton'
import Textarea from '@/components/common/Textarea'
import Header from '@/components/shared/Header'
import { useState } from 'react'

type AdminWordType = {
  name: string
  meaning: string
  pronunciation: {
    english: string
  }
  category: string
  example: string
}

const CATEGORY = [
  { id: 0, name: '비즈니스' },
  { id: 1, name: '디자인' },
  { id: 2, name: '개발' },
]

export default function AddWordPage() {
  const [word, setWord] = useState<AdminWordType>({
    name: '',
    meaning: '',
    pronunciation: { english: '' },
    category: '',
    example: '',
  })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target
    if (type === 'radio') {
      const category = CATEGORY.find((item) => item.id === parseInt(value))
      const name = category ? category.name : undefined
      setWord((prev: any) => ({
        ...prev,
        ['category']: name,
      }))
    } else if (name === 'pronunciation') {
      setWord((prev: any) => ({ ...prev, [name]: { english: value } }))
    } else {
      setWord((prev: any) => ({ ...prev, [name]: value }))
    }
    console.log(word)
  }
  function hasEmptyField() {
    const { name, meaning, pronunciation, category, example } = word
    return (
      name === '' ||
      meaning === '' ||
      pronunciation.english === '' ||
      category === '' ||
      example === ''
    )
  }
  const handleSubmit = () => {
    if (hasEmptyField()) {
      alert('모두 입력해주세요')
      return
    }
  }

  return (
    <>
      <Header title="용어 등록" />
      <div className="flex flex-col gap-6 text-onSurface-300 px-4">
        <label>
          용어 이름{' '}
          <Input name="name" value={word.name ?? ''} onChange={handleChange} />
        </label>

        <label>
          용어 뜻{' '}
          <Textarea
            name="meaning"
            value={word.meaning ?? ''}
            onChange={handleChange}
          />
        </label>
        <label>
          예문{' '}
          <Textarea
            name="example"
            value={word.example ?? ''}
            onChange={handleChange}
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
        <fieldset>
          <label>카테고리 구분</label>
          {CATEGORY.map((item, idx) => (
            <RadioButton
              key={item.id}
              id={item.id}
              item={item.name}
              onChange={handleChange}
              isChecked={word.category === item.name}
            />
          ))}
        </fieldset>
        <Button type="gradient" isFullWidth onClick={handleSubmit}>
          용어 등록
        </Button>
      </div>
    </>
  )
}
